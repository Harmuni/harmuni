import ControllerInput from '../ControllerInput/index.js'
import { Component } from '../EntityComponent/index.js'

export default class Pause extends Component {
  constructor () {
    super()
    this.input = new ControllerInput()
  }

  update (timeInSeconds) {
    this.input.keys.escape
      ? document.getElementById('pause').hidden = false
      : document.getElementById('pause').hidden = true
  }
}
