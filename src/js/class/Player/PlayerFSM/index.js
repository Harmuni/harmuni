import FiniteStateMachine from '../../FiniteStateMachine/index'
import { IdleState, PlayMusicState, RunState, WalkState } from './States'

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
    this.addState('playMusic', PlayMusicState)
  }
}
