import React from 'react';
import style from './tabs.css';

const Tab = ({ title, descr }) => (
  <div>
    <h2>{title}</h2>
    <p className={style.classA}>{descr}</p>
  </div>
);

export default Tab;
