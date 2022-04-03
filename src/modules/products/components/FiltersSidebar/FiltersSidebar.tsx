import React from 'react';
import {useTranslation} from "react-i18next";
import useStyleTheme from "../../../common/hooks/useStyleTheme";
import styled from "styled-components";
import FilterGroup from "./FilterGroup";

const FiltersSidebar = () => {
  const {t} = useTranslation();
  const theme = useStyleTheme();

  return (
    <>
      <FilterGroup
        title="Dostępność"
      />
      <FilterGroup
        title="Typ produktu"
      />
    </>
  );
};

export default FiltersSidebar;
