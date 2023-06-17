import { useState } from 'react';

export default function Sidebar({ items, selectedComponent }) {
  // const [selectedComponent, setComponent] = useState();
  return (
    <div>
      <h3>List of components</h3>
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
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
}
