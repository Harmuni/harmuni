import State from '../../State/index'

export default class WalkState extends State {
  constructor (parent) {
    super(parent)
    this._name = 'walk'
  }

  get name () {
    return this._name
  }

  enter (prevState) {
    const curAction = this._parent._proxy._animations.walk.action
    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.name].action
      curAction.enabled = true

      if (prevState.Name === 'run') {
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
    if (input._keys.forward || input._keys.backward) {
      if (input._keys.shift) {
        this._parent.setState('run')
      }
      return
    }

    this._parent.setState('idle')
  }
}
