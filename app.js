(function(){

  class App {

    constructor(el) {
      alert(el)
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
