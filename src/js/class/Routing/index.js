import { HOME } from '../../constants/Routes'
import { About, Contact, Gamescreen, Home, Homescreen, Startscreen } from '../../screens'
import Game from '../Game'

export default class Routing {
  constructor ({ rootDiv }) {
    this.rootDiv = rootDiv
    this.routes = {
      '/': Home,
      '/contact': Contact,
      '/about': About,
      '/play': Gamescreen,
      '/play/home': Homescreen,
      '/play/menu': Startscreen
    }
    if (this.routes[window.location.pathname]) {
      this.rootDiv.innerHTML = this.routes[window.location.pathname]
    } else {
      this.rootDiv.innerHTML = this.routes['/']
    }
    this.main()
  }

  main () {
    window.onpopstate = () => {
      if (this.routes[window.location.pathname]) {
        this.rootDiv.innerHTML = this.routes[window.location.pathname]
      } else {
        this.rootDiv.innerHTML = this.routes['/']
      }
    }

    let status
    switch (window.location.pathname) {
      case HOME:
        console.log('home')
        return status

      case '/play':
        console.log('play')
        document.documentElement.setAttribute('style', 'overflow: hidden')
        status = new Game({
          canvas: document.getElementById('webgl')
        })
        return status
    }
  }

  onNavigate ({ pathname }) {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    this.rootDiv.innerHTML = this.routes[pathname]
  }
}
