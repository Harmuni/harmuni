export default class PlayerAnimationProxy {
  constructor (animations) {
    this._animations = animations
  }

  get animations () {
    return this._animations
  }
}
