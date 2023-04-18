import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen(canvas);
  }

  listen() {
    this.canvas.onmousemove = this.onMouseMove.bind(this);
    this.canvas.onmousedown = this.onMouseDown.bind(this);
    this.canvas.onmouseup = this.onMouseUp.bind(this);
  }

  onMouseUp(e) {
    this.mouseDown = false;
  }

  onMouseDown(e) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  onMouseMove(e) {
    if (this.mouseDown) this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  draw(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}