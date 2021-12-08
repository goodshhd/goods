import React from "react";

import Input from "../Input";
import Select from "../Select";
import DateRangePickerCustom from "../DateRangePickerCustom";

import { useRecoilState } from "recoil";
import { useTranslation } from "next-i18next";

import {
  selectedFilter,
  codeInputState,
  datePickerState,
  companyDataState,
} from "../../recoil/atoms";

const Filter = () => {
  const [, setDate] = useRecoilState(datePickerState);
  const [, setFilterType] = useRecoilState(selectedFilter);
  const [selectedValue, setSelectedValue] = useRecoilState(companyDataState);
  const [codeInputValue, setCodeInputValue] = useRecoilState(codeInputState);

  const { t } = useTranslation("common");
  const { t: tI } = useTranslation("inputs");

  const handleChange = (data) => {
    setDate(data.data.start.format("MMM Do YY"));
    setFilterType("date");
  };

  const handleChangeInput = (e) => {
    setCodeInputValue(e.target.value);
    setFilterType("code");
  };
  const handleSelectCompany = (selected) => {
    setSelectedValue(selected);
    setFilterType("company");
  };

  return (
    <div className="w-full shadow-xl py-4 px-6 rounded-md" role="filter">
      <div className="w-full mb-4">
        <span className="mr-auto">{t("filter-text")}</span>
      </div>
      <div className="flex items-center flex-col md:flex-row md:justify-between">
        <DateRangePickerCustom onChange={(e) => handleChange({ data: e })} />
        <div className="flex items-left justify-center flex-col md:flex-row md:items-center">
          <div className="mx-4 mt-8 md:mt-0">
            <Input
              type="text"
              name="filter_code"
              placeholder="VB720"
              value={codeInputValue}
              onChange={handleChangeInput}
              label={tI("input-label-code")}
            />
          </div>
          <div className="mx-4 mt-8 md:mt-0">
            <Select
              placeholder="ART-UA"
              selectedValue={selectedValue}
              onClick={handleSelectCompany}
              label={tI("input-label-company")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
