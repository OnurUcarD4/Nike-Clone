import React from "react";

const ContactUsGrid = ({ options }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {options.map((e) => {
        return <img className="w-16" src={e.Image} alt="" />;
      })}
      {options.map((f) => {
        return <span>{f.Title}</span>;
      })}
    </div>
  );
};

export default ContactUsGrid;
