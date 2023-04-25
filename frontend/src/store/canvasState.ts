import { makeAutoObservable } from 'mobx';

class CanvasState {
  canvas!: HTMLCanvasElement;
  undoList: string[] = [];
  redoList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushUndoList(data: string) {
    this.undoList.push(data);
  }

  pushRedoList(data: string) {
    this.redoList.push(data);
  }

  undo() {
    let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop() as string;
      this.pushRedoList(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      }
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop() as string;
      this.pushUndoList(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  setCanvas(canvas: any) {
    this.canvas = canvas;
  }
}

export default new CanvasState();
