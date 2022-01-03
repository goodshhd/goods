import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import SmallButton from "../SmallButton";

import { useTranslation } from "next-i18next";
import { useRecoilState } from "recoil";

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

  const plusIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.33337V10.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.3335 8H10.6668" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  const minimizeIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66675 9.33337H6.66675V13.3334" stroke="#E87D00" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 14L6.66667 9.33337" stroke="#E87D00" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 6.66663H9.33325V2.66663" stroke="#E87D00" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33325 6.66667L13.9999 2" stroke="#E87D00" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

  return (
    <div className="flex w-full" role="submit-form">
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
