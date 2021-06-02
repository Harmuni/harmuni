import ControllerInput from '../ControllerInput'
import { Component } from '../EntityComponent'

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
