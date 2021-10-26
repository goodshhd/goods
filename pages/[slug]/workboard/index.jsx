import React from "react";

import { getSession } from "next-auth/client";

import Filter from "../../../components/Filter";
import withLayout from "../../../utils/hoc/withLayout";

import Table from "../../../components/Table";
import TableRows from "../../../components/TableRows";
import { useTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Workboard = () => {
  const { t } = useTranslation();

  const renderRows = (item, i) => (
    <TableRows
      key={`${i}-${item.id}`}
      row1={item.company}
      row2={item.code}
      row3={item.userId}
      row4={item.status}
    />
  );

  return (
    <section>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{t("common:Workboard")}</h1>
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
      ...(await serverSideTranslations(context.locale, ['common'])),
      session,
    },
  };
}
