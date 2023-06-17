import React, { useState } from 'react';

export default function Sidebar({ items, selectedComponent }) {
  // const [selectedComponent, setComponent] = useState();
  return (
    <div className="">
      <h3 className="font-bold text-lg">List of components</h3>
      <div className="">
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return (
              <div
                onClick={(e) => {
                  // setComponent(e.target.value);
                  selectedComponent((previous, current) => {
                    return [...previous, item];
                  });
                }}
                value={item.title}
                className="bg-pink-200 p-2"
              >
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
