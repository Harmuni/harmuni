import State from '../../State/index'

export default class WalkState extends State {
  constructor (parent) {
    super({ parent })
    this.name = 'walk'
  }

  getName () {
    return this.name
  }

  enter (prevState) {
    const curAction = this.parent.proxy.animations.playMusic.action
    if (prevState) {
      const prevAction = this.parent.proxy.animations[prevState.getName()].action
      curAction.enabled = true

      curAction.time = 0.0
      curAction.setEffectiveTimeScale(1.0)
      curAction.setEffectiveWeight(1.0)

      curAction.crossFadeFrom(prevAction, 0.5, true)
      curAction.play()
    } else {
      curAction.play()
    }
  }

  exit () {}

  update (timeElapsed, input) {
    if (input.keys.r) {
      return
    }

    this.parent.setState('idle')
  }
}