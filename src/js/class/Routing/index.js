import { HOME } from '../../constants/Routes'
import { About, Contact, Gamescreen, Home, Homescreen, Startscreen } from '../../screens'
import Game from '../Game'
import { io } from 'socket.io-client'

export default class Routing {
  constructor ({ rootDiv }) {
    this.socket = io('http://192.168.1.21:3000/')
    console.log(this.socket)
    this.rootDiv = rootDiv
    this.routes = {
      'https://harmuni.netlify.app/': Home,
      'https://harmuni.netlify.app/contact': Contact,
      'https://harmuni.netlify.app/about': About,
      'https://harmuni.netlify.app/play': Gamescreen,
      'https://harmuni.netlify.app/play/home': Homescreen,
      'https://harmuni.netlify.app/play/menu': Startscreen
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

        // STORE DATA ONLINE
        this.socket.on('serverState', (state) => console.log('Server State:', state))
        this.socket.on('serverData', (serverData) => console.log('Server Data:', serverData))

        return status

      case '/play':
        console.log('play')
        document.documentElement.setAttribute('style', 'overflow: hidden')
        status = new Game({
          canvas: document.getElementById('webgl'),
          socket: this.socket
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
