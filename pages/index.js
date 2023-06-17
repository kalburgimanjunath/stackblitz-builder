import styles from '../styles/Home.module.css';
import { Sidebar, CanvasArea } from '../components/';
import { useState, useEffect } from 'react';
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
  ];
  const InitialValue = [
    {
      id: 0,
      title: 'Label',
    },
  ];
  const [newcomponents, setComponents] = useState([]);

  useEffect(() => {});
  return (
    <div className={styles.container}>
      <Sidebar items={sidebarComponent} selectedComponent={setComponents} />
      <CanvasArea listcomponents={newcomponents} />
    </div>
  );
}
