import { makeAutoObservable } from 'mobx';

class ToolState {
  tool = {
    fillColor: null,
    strokeColor: null,
    lineWidth: null,
  };
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: any) {
    this.tool = tool;
  }

  setFillColor(fillColor: any) {
    this.tool.fillColor = fillColor;
  }

  setStrokeColor(strokeColor: any) {
    this.tool.strokeColor = strokeColor;
  }

  setLineWidth(lineWidth: any) {
    this.tool.lineWidth = lineWidth;
  }


}

export default new ToolState();
