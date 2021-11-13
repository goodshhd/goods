import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import SmallButton from "../SmallButton";

import { useTranslation } from "next-i18next";
import { useRecoilState } from "recoil";

import plusIcon from "../../public/icon/fi_plus-square.svg";
import minimizeIcon from "../../public/icon/fi_minimize-2.svg";

import moment from "moment";

import { tableData } from "../../recoil/atoms";
import useHttp from "../../utils/hooks/useHttp";

const SubmitForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [inputVal, setInputVal] = useState({});
  const [_tableData, _setTableData] = useRecoilState(tableData);
  const { t } = useTranslation('inputs');
  const { t: tB } = useTranslation('buttons');
  const {request} = useHttp()

  const handleInputValue = (e) => {
    setInputVal({
      ...inputVal,
      id: _tableData.length + 1,
      date: moment().format("MMM Do YY"),
      [e.target.name]: e.target.value,
      status: "Active",
    });
  };

  const handleSubmit = async () => {
    _setTableData([..._tableData, inputVal]);
    await request('http://localhost:8000/api', 'POST', inputVal)
    setInputVal("");
  };

  return (
    <div className="flex w-full">
      <div
        className={`bg-white right-8 rounded-md shadow-xl absolute mr-2 ${ showForm ? "opacity-100" : "opacity-0"} 
        transition duration-300`}
      >
        <div className="py-2 px-10 flex">
          <div className="flex w-full px-8 py-4">
            <div className="mx-4 mt-8 md:mt-0 w-32">
              <Input
                name="code"
                type="text"
                label={t("input-label-code")}
                value={inputVal.code}
                placeholder=""
                onChange={handleInputValue}
              />
            </div>
            <div className="mx-4 mt-8 md:mt-0 w-32">
              <Input
                name="company"
                type="text"
                label={t("input-label-company")}
                value={inputVal.company}
                placeholder=""
                onChange={handleInputValue}
              />
            </div>
            <div className="flex items-end">
              <Button buttonText={tB('add-button-text')} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <SmallButton
        icon={showForm ? minimizeIcon : plusIcon}
        color={showForm ? "bg-yellow-100" : "bg-yellow-600"}
        handleClick={() => setShowForm(!showForm)}
      />
    </div>
  );
};

export default SubmitForm;
