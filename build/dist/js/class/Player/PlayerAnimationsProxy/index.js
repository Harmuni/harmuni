export default class PlayerAnimationsProxy {
  constructor ({ animations }) {
    this.animations = animations
  }

  getAnimations () {
    return this.animations
  }
}
