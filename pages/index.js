import styles from '../styles/Home.module.css';
import { Sidebar, CanvasArea } from '../components/';
import { useState, useEffect } from 'react';
import React from 'react';
export default function Home() {
  const sidebarComponent = [
    {
      id: 1,
      title: 'TextBox',
      type: 'textbox',
    },
    {
      id: 2,
      title: 'Label',
      type: 'label',
    },
    {
      id: 3,
      title: 'Hero',
      type: 'hero',
    },
  ];
  const InitialValue = [
    {
      id: 0,
      title: 'Label',
    },
  ];
  const [newcomponents, setComponents] = useState(InitialValue);

  useEffect(() => {});
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 bg-gray-200 gap-4 w-full">
      <Sidebar items={sidebarComponent} selectedComponent={setComponents} />
      <CanvasArea listcomponents={newcomponents} />
      
    </div>
  );
}
