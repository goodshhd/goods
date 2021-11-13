import React from "react";
import { useRecoilValue } from "recoil";
import { filterTableData } from "../../recoil/selectors";
import TableHeader from "../TableHeader";
import SubmitForm from "../SubmitForm";
import {useTranslation} from "next-i18next";

const Table = ({ render }) => {
  const { t } = useTranslation('table');

  const _filterTableData = useRecoilValue(filterTableData);
  const header = [
    {
      title: t("date-title"),
    },
    {
      title: t("code-title"),
    },
    {
      title: t("company-title"),
    },
    {
      title: t("status-title"),
    },
    {
      title: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="min-w-full divide-y divide-gray-200">
                <div className="w-full">
                  <TableHeader headerData={header} />
                </div>
                <div className="bg-white divide-y divide-gray-200">
                  {render(_filterTableData)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed right-10 bottom-24'>
        <SubmitForm />
      </div>
    </>
  );
};

export default Table;
