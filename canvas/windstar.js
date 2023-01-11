// 节流
function throttle(fn, second) {
  let timer = null;

  return (...args) => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, second);
  };
}


const colors = [
  '#000030',
  '#4d4398',
  '#4784bf',
  '#000030',
  '#4d4398',
  '#ffffff'
]

//Utility Function
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}



// 星空背景

export default class UniverseBackground {
  static maxStars = 1400;
  // 初始化
  constructor(id) {
    const canvas = document.getElementById(id);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.w = canvas.width = window.innerWidth;
    this.h = canvas.height = window.innerHeight;

    window.onresize = fitCanvasSize
    // ---------------------
    this.hue = 217;
    this.stars = [];
    this.count = 0;
    this.maxStars = BackgroundInfo.maxStars;

    const canvas2 = document.createElement('canvas');
    this.canvas2 = canvas2;
    const ctx2 = canvas2.getContext('2d');
    this.ctx2 = ctx2;
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = this.ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + this.hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + this.hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // 初始化星星
    this.initStar();

    this.animation = this.animation.bind(this);
    this.resize = this.resize.bind(this);
  }

  initStar() {
    for (var i = 0; i < this.maxStars; i++) {
      this.stars.push(new Star(i, this.ctx, this.canvas2, this.w, this.h));
    }
  }

  resize() {
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;

    for (var i = 0; i < this.maxStars; i++) {
      this.stars[i].setWH(this.w, this.h);
    }
  }

  animation() {
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 0.8;
    this.ctx.fillStyle = 'hsla(' + this.hue + ', 64%, 6%, 1)';
    this.ctx.fillRect(0, 0, this.w, this.h);
    // this.ctx.clearRect(0, 0, this.w, this.h);

    this.ctx.globalCompositeOperation = 'lighter';
    for (var i = 0, l = this.stars.length; i < l; i++) {
      this.stars[i].draw();
    }
    this.actionId = window.requestAnimationFrame(this.animation);
  }

  play() {
    this.stop();
    if (!this.actionId) {
      this.animation();
    } else {
      this.stop();
    }
  }

  function fitCanvasSize() {
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight

    this.w = canvas.width;
    this.h = canvas.height;

  }

  stop() {
    // 卸载
    cancelAnimationFrame(this.actionId);
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.actionId = undefined;
  }
}
