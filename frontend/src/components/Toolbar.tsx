import React from 'react';
import '../styles/toolbar.scss';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import canvasState from '../store/canvasState';
import Rect from '../tools/Rect';

const Toolbar = () => {
  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  }

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="toolbar__btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      />
      <button className="toolbar__btn circle" />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <input onChange={changeColor} type="color" className="toolbar__btn color" />
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()} />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
