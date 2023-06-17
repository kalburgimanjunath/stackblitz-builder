import React, { useState } from 'react';
import { Label, Hero, Input, PropertyPane } from './';
export default function CanvasArea({ listcomponents }) {
  // console.log(listcomponents);
  const [selectedComponent, setSelectedComponent] = useState();
  function getComponent(type) {
    if (type == 'textbox') {
      return <Input />;
    } else if (type == 'hero') {
      return <Hero />;
    } else if (type == 'label') {
      return <Label />;
    }
  }

  return (
    <div>
      {listcomponents &&
        listcomponents.length > 0 &&
        listcomponents.map((item) => {
          return (
            <div
              className="selectedcomponent hover:bg-red-200"
              onClick={() => setSelectedComponent(item)}
            >
              {getComponent(item.type)}
            </div>
          );
        })}
      <PropertyPane selectedComponent={selectedComponent} />
    </div>
  );
}
