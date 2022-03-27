import React from "react";

const Menu = ({ options }) => {
  return (
    <>
      {options.map((x) => {
        return (
          <div className="mt-4">
            <ul className="flex gap-2 mb-10">
              <div className="flex flex-col gap-3">
                <li className="text-black cursor-pointer">{x.Name}</li>
                {x.Children.length > 0 &&
                  x.Children.map((y) => (
                    <li className="text-sm text-gray-500 cursor-pointer">
                      {y.Name}
                    </li>
                  ))}
              </div>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
