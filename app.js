(function(){

  class App {

    constructor(el) {
      this.canvas = el
      this.isDraw = false
      this.spot = 20
      this.ctx = this.canvas.getContext('2d')
      this.setHandlers()
    }

    setHandlers() {
      document.addEventListener('click', e => {

        if (!e.target) {
          return
        }

        const id = e.target.id

        if(id === 'clear') {
          this.clear()
        }

        if(id === 'train') {
          this.train()
        }

        if(id === 'guess') {
          this.guess()
        }

      })

      this.canvas.addEventListener('mousedown', () => {
				this.isDrawing = true
				this.ctx.beginPath()
			})

			this.canvas.addEventListener('mouseup', () => {
				this.isDrawing = false
			})

			this.canvas.addEventListener('mousemove', e => {
				if(!this.isDrawing) {
          return
        }
        this.ctx.lineWidth = this.spot
        this.ctx.strokeStyle = 'red'
        this.ctx.fillStyle = 'red'

        this.ctx.lineTo(e.offsetX, e.offsetY)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.arc(e.offsetX, e.offsetY, this.spot / 2, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
      })

    }

    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawGrid()
    }

    train() {
      alert('train')
    }

    guess() {
      alert('guess')
    }

    drawLine(x1, y1, x2, y2, color = 'gray') {
      this.ctx.beginPath()
      this.ctx.lineJoin = 'miter'
      this.ctx.lineWidth = 1
      this.ctx.strokeStyle = color
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
    }

    drawGrid() {
      const width = this.canvas.width
      const height = canvas.height
      const q = width / this.spot

      const xStep = width / q
      const yStep = height / q

      for(let x = 0; x < width; x += xStep ) {
        this.drawLine(x, 0, x, height)
      }

      for( let y = 0; y < height; y += yStep ) {
        this.drawLine(0, y, width, y)
      }
    }

  }

  new App(document.getElementById('canvas'))

})()
