export default class Component {
  constructor () {
    this.parent = null
  }

  setParent (p) {
    this.parent = p
  }

  initComponent () {}

  getComponent (n) {
    return this.parent.getComponent(n)
  }

  findEntity (n) {
    return this.parent.findEntity(n)
  }

  broadcast (m) {
    this.parent.broadcast(m)
  }

  update () {}

  registerHandler (n, h) {
    this.parent.registerHandler(n, h)
  }
}
