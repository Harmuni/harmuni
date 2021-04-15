import State from '../../State/index'
import { LoopOnce } from 'three'

export default class DanceState extends State {
  constructor (parent) {
    super(parent)

    this._finishedCallback = () => {
      this._finished()
    }
  }

  _finished () {
    this._Cleanup()
    this._parent.SetState('idle')
  }

  _cleanup () {
    const action = this._parent._proxy._animations.dance.action
    action.getMixer().removeEventListener('finished', this._CleanupCallback)
  }

  get name () {
    return 'dance'
  }

  enter (prevState) {
    console.log('enter dance')
    const curAction = this._parent._proxy._animations.dance.action
    const mixer = curAction.getMixer()
    mixer.addEventListener('finished', this._FinishedCallback)

    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.Name].action

      curAction.reset();
      curAction.setLoop(LoopOnce, 1)
      curAction.clampWhenFinished = true
      curAction.crossFadeFrom(prevAction, 0.2, true)
      curAction.play()
    } else {
      curAction.play()
    }
  }

  exit () {
    this._Cleanup()
  }

  update (_) {}
}
