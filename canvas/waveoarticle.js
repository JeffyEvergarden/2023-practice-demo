function randomNormal(o) {
  var r,
    a,
    n,
    e,
    l = o.mean,
    t = o.dev

  do {
    a = 2 * Math.random() - 1
    n = 2 * Math.random() - 1
    r = a * a + n * n
    console.log(r)
  } while (r >= 1)
  // r < 0 停止
  e = a * Math.sqrt((-2 * Math.log(r)) / r)
  return t * e + l
}

const NUM_PARTICLES = 600  // 创建个数
const PARTICLE_SIZE = 0.5 // View heights
const SPEED = 20000 // Milliseconds

let particles = []

// 随机数
function rand(low, high) {
  return Math.random() * (high - low) + low
}

// 创建
function createParticle(canvas) {
  // 颜色
  const colour = {
    r: 255,
    g: randomNormal({ mean: 125, dev: 20 }),
    b: 50,
    a: rand(0, 1)
  }
  return {
    x: -2,
    y: -2,
    diameter: Math.max(
      0,
      randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
    ), // 直径
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
    amplitude: randomNormal({ mean: 16, dev: 2 }), //	(声音、无线电波等的)振幅
    offsetY: randomNormal({ mean: 0, dev: 10 }),
    arc: Math.PI * 2, // 弧度: 圆
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`
  }
}
// 进行移动
function moveParticle(particle) {
  const progress =
    ((time - particle.startTime) % particle.duration) / particle.duration
  return {
    ...particle,
    x: progress,
    y: Math.sin(progress * particle.arc) * particle.amplitude + particle.offsetY
  }
}
// 绘制
function drawParticle(particle, canvas, ctx) {
  canvas = document.getElementById('canvas')
  const vh = canvas.height / 100

  ctx.fillStyle = particle.colour
  ctx.beginPath()
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + canvas.height / 2,
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  )
  ctx.fill()
}

export default class WaveBackground {
  constructor(id) {
    let canvas = document.getElementById('canvas')
    if (canvas) {
      this.canvas = canvas
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      this.canvas.getContext('2d')
      this.resize = () => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio
        canvas.height = canvas.offsetHeight * window.devicePixelRatio
        this.ctx = canvas.getContext('2d')
      }
      window.addEventListener('resize', this.resize)
    }

    this.animate = this.animate.bind(this)
    this.draw = this.draw.bind(this)
    // 节点收集数组
    this.particles = []
  }

  draw(time, canvas, ctx) {
    // Move particles
    particles.forEach((particle, index) => {
      particles[index] = moveParticle(particle, canvas, time)
    })

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 绘制圆形
    particles.forEach((particle) => {
      drawParticle(particle, canvas, ctx)
    })

    // Schedule next frame
    // 无限循环
    this.actionId = requestAnimationFrame((time) =>
      this.draw(time, canvas, ctx)
    )
  }

  animate() {
    // 创建和收集节点
    for (let i = 0; i < NUM_PARTICLES; i++) {
      this.particles.push(createParticle(this.canvas))
    }

    // 执行一次
    requestAnimationFrame((time) => draw(time, this.canvas, this.ctx))
  }

  play() {
    if (this.actionId) {
      this.stop()
    } else {
      this.animate()
    }
  }

  stop() {
    // 取消执行
    cancelAnimationFrame(this.actionId)
    // 清除画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // 移除监听事件
    window.removeEventListener('resize', this.resize)
  }
}
