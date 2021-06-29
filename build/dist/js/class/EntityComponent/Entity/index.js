import { Quaternion, Vector3 } from '../../../../../_snowpack/pkg/three.js'

export default class Entity {
  constructor () {
    this.name = null
    this.components = {}

    this.position = new Vector3()
    this.rotation = new Quaternion()
    this.handlers = {}
    this.parent = null
  }

  registerHandler (n, h) {
    if (!(n in this.handlers)) {
      this.handlers[n] = []
    }
    this.handlers[n].push(h)
  }

  setParent (p) {
    this.parent = p
  }

  setName (n) {
    this.name = n
  }

  getName () {
    return this.name
  }

  setActive (b) {
    this.parent.setActive(this, b)
  }

  addComponent (c) {
    c.setParent(this)
    this.components[c.constructor.name] = c

    c.initComponent()
  }

  getComponent (n) {
    return this.components[n]
  }

  findEntity (n) {
    return this.parent.get(n)
  }

  broadcast (msg) {
    if (!(msg.topic in this.handlers)) {
      return
    }

    for (const curHandler of this.handlers[msg.topic]) {
      curHandler(msg)
    }
  }

  setPosition (p) {
    this.position.copy(p)
    this.broadcast({
      topic: 'update.position',
      value: this.position
    })
  }

  setQuaternion (r) {
    this.rotation.copy(r)
    this.broadcast({
      topic: 'update.rotation',
      value: this.rotation
    })
  }

  update (timeElapsed) {
    for (const k in this.components) {
      this.components[k].update(timeElapsed)
    }
  }
};
