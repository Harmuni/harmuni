import FiniteStateMachine from '../../FiniteStateMachine/index'
import WalkState from './States/WalkState/index'
import IdleState from './States/IdleState/index'
import RunState from './States/RunState/index'

/**
 * Child of general FiniteStateMachine, serves to add character specifics states
 * FSM = Final State Machine
 */
export default class PlayerFSM extends FiniteStateMachine {
  constructor ({ proxy }) {
    super()
    this.proxy = proxy
    this.addState('idle', IdleState)
    this.addState('walk', WalkState)
    this.addState('run', RunState)
  }
}
