export default class ControllerInput {
  constructor () {
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      r: false,
      space: false,
      shift: false,
      escape: false
    }
    window.addEventListener('keydown', (event) => this.onKeyDown(event), false)
    window.addEventListener('keyup', (event) => this.onKeyUp(event), false)
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
      case 82: // r
        this.keys.r = true
        break
      case 32: // SPACE
        this.keys.space = true
        break
      case 16: // SHIFT
        this.keys.shift = true
        break
      case 27: // ESCAPE
        this.keys.escape
          ? this.keys.escape = false
          : this.keys.escape = true
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
      case 82: // r
        this.keys.r = false
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
