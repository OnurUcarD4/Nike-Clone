import React from "react";
import { Link } from "react-router-dom";

const GridItem = ({ options }) => {
  return (
    <div className="col-span text-xs">
      <ul>
        {options.map((e, index) => {
          return (
            <Link to={e.Link}>
              {" "}
              <li
                className={`${
                  index === 0 ? "head-col" : "opacity-50 hover:opacity-100"
                }`}
                key={e.Id}
              >
                {e.Name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GridItem;
