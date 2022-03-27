import React from "react";
import { Link } from "react-router-dom";

const GridTitle = ({ options }) => {
  return (
    <div className="col-span">
      <ul className="head-col text-xs">
        {options.map((e) => {
          return (
            <Link to={e.Link}>
              <li key={e.Id}>{e.Name}</li>{" "}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GridTitle;
