import React from "react";
import GridHelp from "./GridHelp";

const GridHelpNav = (props) => {
  const {
    gridCargo,
    gridRefunds,
    gridAccounts,
    gridOrders,
    gridProducts,
    gridCorporation,
  } = props;
  return (
    <>
      <GridHelp options={gridCargo} />
      <GridHelp options={gridRefunds} />
      <GridHelp options={gridAccounts} />
      <GridHelp options={gridOrders} />
      <GridHelp options={gridProducts} />
      <GridHelp options={gridCorporation} />
    </>
  );
};

export default GridHelpNav;
