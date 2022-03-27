import React from "react";
import GridItem from "./GridItem";
import GridTitle from "./GridTitle";

const FooterNav = ({ gridTitle, gridApp, gridAbout, gridHelp }) => {
  return (
    <>
      <GridTitle options={gridTitle} />
      <GridItem options={gridHelp} />
      <GridItem options={gridAbout} />
      <GridItem options={gridApp} />
    </>
  );
};

export default FooterNav;
