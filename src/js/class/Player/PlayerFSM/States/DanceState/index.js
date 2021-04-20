import State from '../../State/index'
import { LoopOnce } from 'three'

export default class DanceState extends State {
  constructor (parent) {
    super({ parent })
    this.name = 'dance'

    this.finishedCallback = () => {
      this.finished()
    }
  }

  finished () {
    this.cleanup()
    this.parent.setState('idle')
  }

  cleanup () {
    const action = this.parent.proxy.animations.dance.action
    action.getMixer().removeEventListener('finished', this.cleanupCallback)
  }

  getName () {
    return this.name
  }

  enter (prevState) {
    const curAction = this.parent.proxy.animations.dance.action
    const mixer = curAction.getMixer()
    mixer.addEventListener('finished', this.finishedCallback)

    if (prevState) {
      const prevAction = this.parent.proxy.animations[prevState.getName()].action

      curAction.reset()
      curAction.setLoop(LoopOnce, 1)
      curAction.clampWhenFinished = true
      curAction.crossFadeFrom(prevAction, 0.2, true)
      curAction.play()
    } else {
      curAction.play()
    }
  }

  exit () {
    this.cleanup()
  }

  update (_) {}
}
