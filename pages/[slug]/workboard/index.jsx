import React, {useEffect, useCallback} from "react";

import { getSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import { useRecoilState } from "recoil";

import Table from "../../../components/Table";
import Filter from "../../../components/Filter";
import TableRows from "../../../components/TableRows";
import withLayout from "../../../utils/hoc/withLayout";

import { tableData } from "../../../recoil/atoms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {getTableData} from "../../../service/getTableData";
import { useToasts } from "react-toast-notifications";

const Workboard = () => {
  const [,_setTableData] = useRecoilState(tableData);
  const { addToast } = useToasts();

  const { t } = useTranslation("common");

  useEffect(() => {
    getTableData().then(data => {
      _setTableData((prevData) => [...prevData, ...data])
    })
        .catch(error => {
          addToast(error.message, { appearance: 'error' })
        });
  }, []);

  const handleDelete = useCallback((id) => {
    id === null
      ? addToast('Something went wrong', { appearance: 'error' })
      : _setTableData((prevData) => prevData.filter((item) => item.id !== id));
    addToast('Deleted', { appearance: 'success' })
  }, []);

  const renderRows = (item, i) => (
    <TableRows
      row2={item.code}
      row3={item.date}
      row4={item.status}
      row1={item.company}
      key={`${i}-${item.id}`}
      onDelete={() => handleDelete(item.id)}
    />
  );

  return (
    <section>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t("purchase-text")}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Filter />
          </div>
          <Table render={(data) => data.map(renderRows)} />
        </div>
      </main>
    </section>
  );
};

export default withLayout(Workboard);

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const namespaces = ["common", "tabs", "inputs", "table", "buttons", "header-dropdown"];

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/signIn",
      },
      props: {
        session,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, namespaces)),
      session,
    },
  };
}
