import React from 'react';
import '../styles/settings.scss';
import toolState from '../store/toolState';

const Settings = () => {
  return (
    <div className="settings">
      <label htmlFor="line-width">Толщина линии</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="border-line">Цвет обводки</label>
      <input
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        id="border-line"
        type="color"
      />
    </div>
  );
};

export default Settings;
