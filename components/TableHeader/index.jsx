import React from "react";

const TableHeader = ({ headerData }) => {
  const renderData = (item, i) => (
    <div
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 w-24"
      key={`${i}-${item.title}`}
    >
      {item.title}
    </div>
  );

  return (
    <div className="bg-gray-50">
      <div className="flex justify-between">{headerData.map(renderData)}</div>
    </div>
  );
};

export default TableHeader;
