import React from "react";
import ContactUsGrid from "./ContactUsGrid";

const ContactUsNav = (props) => {
  const { gridOrders, gridApps, gridMails, gridCorps, gridMarket } = props;
  return (
    <>
      <ContactUsGrid options={gridOrders} />
      <ContactUsGrid options={gridApps} />
      <ContactUsGrid options={gridMails} />
      <ContactUsGrid options={gridCorps} />
      <ContactUsGrid options={gridMarket} />
    </>
  );
};

export default ContactUsNav;
