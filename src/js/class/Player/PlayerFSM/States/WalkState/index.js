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
    const curAction = this.parent.proxy.animations.walk.action
    if (prevState) {
      const prevAction = this.parent.proxy.animations[prevState.getName()].action
      curAction.enabled = true

      if (prevState.name === 'run') {
        const ratio = curAction.getClip().duration / prevAction.getClip().duration
        curAction.time = prevAction.time * ratio
      } else {
        curAction.time = 0.0
        curAction.setEffectiveTimeScale(1.0)
        curAction.setEffectiveWeight(1.0)
      }

      curAction.crossFadeFrom(prevAction, 0.5, true)
      curAction.play()
    } else {
      curAction.play()
    }
  }

  exit () {}

  update (timeElapsed, input) {
    if (input.keys.forward || input.keys.backward) {
      if (input.keys.shift) {
        this.parent.setState('run')
      }
      return
    }

    this.parent.setState('idle')
  }
}
