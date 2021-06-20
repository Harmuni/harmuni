import State from '../../State/index'

export default class IdleState extends State {
  constructor (parent) {
    super({ parent })
    this.name = 'idle'
  }

  getName () {
    return this.name
  }

  enter (prevState) {
    const idleAction = this.parent.proxy.animations.idle.action
    if (prevState) {
      const prevAction = this.parent.proxy.animations[prevState.getName()].action
      idleAction.time = 0.0
      idleAction.enabled = true
      idleAction.setEffectiveTimeScale(1.0)
      idleAction.setEffectiveWeight(1.0)
      idleAction.crossFadeFrom(prevAction, 0.5, true)
      idleAction.play()
    } else {
      idleAction.play()
    }
  }

  exit () {}

  update (_, input) {
    if (input.keys.forward || input.keys.backward) {
      this.parent.setState('walk')
    }
    if (input.keys.r) {
      this.parent.setState('playMusic')
    }
  }
}
