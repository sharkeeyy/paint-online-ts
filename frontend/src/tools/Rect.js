import Tool from "./Tool";

export default class Rect extends Tool {
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
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  onMouseMove(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x, y, width, height) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x, y, width, height);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}