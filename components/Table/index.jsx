import React from "react";
import { useRecoilValue } from "recoil";
import { filterTableData } from "../../recoil/selectors";
import TableHeader from "../TableHeader";

const Table = ({ render }) => {
  const _filterTableData = useRecoilValue(filterTableData);
  const header = [
    {
      title: 'Code'
    },
    {
      title: 'Company'
    },
    {
      title: 'Status'
    },
    {
      title: 'Id'
    },
    {
      title: ''
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="min-w-full divide-y divide-gray-200">
              <div className='w-full'>
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
  );
};

export default Table;
