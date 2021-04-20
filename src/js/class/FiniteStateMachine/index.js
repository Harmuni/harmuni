/**
 * FiniteStateMachine is modelling the possible states and transitions for a character
 * https://fr.wikipedia.org/wiki/Automate_fini
 * https://medium.com/@venkatperi/javascript-state-machines-a-tutorial-972863e37825
 */
export default class FiniteStateMachine {
  constructor () {
    this.states = {}
    this.currentState = null
  }

  addState (name, type) {
    this.states[name] = type
  }

  /**
   * SetState() signals the old state that's exiting, set the current state, and then notifies the new state that's is active
   * @param {*} name
   */
  setState (name) {
    const prevState = this.currentState

    if (prevState) {
      if (prevState.name === name) return
      prevState.exit()
    }

    const state = new this.states[name](this)

    this.currentState = state
    state.enter(prevState)
  }

  /**
   * Update() gets called every frame and passes the frame time & input to the currently active state
   * @param {*} timeElapsed
   * @param {*} input
   */
  update (timeElapsed, input) {
    if (this.currentState) {
      this.currentState.update(timeElapsed, input)
    }
  }
}
