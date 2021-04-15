import FiniteStateMachine from '../../FiniteStateMachine/index'
import DanceState from './States/DanceState/index'
import WalkState from './States/WalkState/index'
import IdleState from './States/IdleState/index'
import RunState from './States/RunState/index'

/**
 * Child of general FiniteStateMachine, serves to add character specifics states
 * FSM = Final State Machine
 */
export default class PlayerFSM extends FiniteStateMachine {
  constructor (proxy) {
    super()
    this._proxy = proxy
    this._addState('idle', IdleState)
    this._addState('walk', WalkState)
    this._addState('run', RunState)
    this._addState('dance', DanceState)
    console.log('fsm init', proxy)
  }
}
