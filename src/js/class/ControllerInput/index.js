export default class ControllerInput {
  constructor () {
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      space: false,
      shift: false
    }
    window.addEventListener('keydown', (e) => this.onKeyDown(e), false)
    window.addEventListener('keyup', (e) => this.onKeyUp(e), false)
  }

  onKeyDown (event) {
    switch (event.keyCode) {
      case 90: // z
        this.keys.forward = true
        break
      case 81: // q
        this.keys.left = true
        break
      case 83: // s
        this.keys.backward = true
        break
      case 68: // d
        this.keys.right = true
        break
      case 32: // SPACE
        this.keys.space = true
        break
      case 16: // SHIFT
        this.keys.shift = true
        break
    }
  }

  onKeyUp (event) {
    switch (event.keyCode) {
      case 90: // z
        this.keys.forward = false
        break
      case 81: // q
        this.keys.left = false
        break
      case 83: // s
        this.keys.backward = false
        break
      case 68: // d
        this.keys.right = false
        break
      case 32: // SPACE
        this.keys.space = false
        break
      case 16: // SHIFT
        this.keys.shift = false
        break
    }
  }
}
