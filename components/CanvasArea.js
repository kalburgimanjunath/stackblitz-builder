import React, { useState } from 'react';
import { Label, Hero, Input } from './';
export default function CanvasArea({ listcomponents }) {
  // console.log(listcomponents);
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
          return <div>{getComponent(item.type)}</div>;
        })}
    </div>
  );
}
