export default class PlayerAnimationsProxy {
  constructor ({ animations }) {
    this.animations = animations
  }

  get Animations () {
    return this.animations
  }
}
