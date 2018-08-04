(function(){

  class App {

    constructor(el) {
      this.canvas = el
      this.isDraw = false
      this.spot = 24;
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
				this.isDraw = true
				this.ctx.beginPath()
			})

			this.canvas.addEventListener('mouseup', () => {
				this.isDraw = false
			})

			this.canvas.addEventListener('mousemove', e => {
				if(!this.isDraw) {
          return
        }
        this.ctx.lineWidth = this.spot
        this.ctx.strokeStyle = 'red'
        this.ctx.fillStyle = 'red'

        this.ctx.lineTo(e.offsetX, e.offsetY)
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.arc(e.offsetX, e.offsetY, this.spot / 2, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
      })

    }

    clear() {
      alert('clear')
    }

    train() {
      alert('train')
    }

    guess() {
      alert('guess')
    }

  }

  new App(document.getElementById('canvas'))

})()
