import { dot, vector } from '../../helpers'
import { Component } from '../EntityComponent'

export default class SquareEventArea extends Component {
  constructor ({ targetToEmit, action, area }) {
    super()
    this.targetToEmit = targetToEmit
    this.action = action
    this.area = area

    console.log(this.area)
    Object.keys(this.area).map((element, id) => {
      console.log(element, this.area[element].x)
    })
  }

  update (timeInSeconds) {
    //console.log('pos', this.targetToEmit.position.x, this.targetToEmit.position.z)

    // if (this.targetToEmit.position.x < this.area.a) {
    //   this.action()
    // }

    // this.targetToEmit.position.y < this.area.a.y &&
    // this.targetToEmit.position.y > this.area.c.y
    if(this.checkPlayerIsInArea()){
      this.action()
    }
  }

  checkPlayerIsInArea() {

    // if (this.area.c.x) {
    //   //positive
    //   this.area.c.x > 0

    // } else if () {
    //   // negative
    // } else if () {
    //   // mix
    // }

    //positive good for positive
    // if (
    //   this.targetToEmit.position.x >= this.area.c.x &&
    //   this.targetToEmit.position.x <= this.area.d.x &&
    //   this.targetToEmit.position.z >= this.area.c.z &&
    //   this.targetToEmit.position.z <= this.area.a.z
    // ) {
    //   this.action()
    // }

    // const M = this.targetToEmit.position
    // const AB = vector(this.area.A, this.area.B)
    // const AM = vector(this.area.A, M)
    // const BC = vector(this.area.B, M)
    // const BM = vector(this.area.B, M)
    // const dotABAM = dot(AB, AM)
    // const dotABAB = dot(AB, AB)
    // const dotBCBM = dot(BC, BM)
    // const dotBCBC = dot(BC, BC)
    // return 0 <= dotABAM && dotABAM <= dotABAB && 0 <= dotBCBM && dotBCBM <= dotBCBC

    // const A = -(this.area.B.y - this.area.A.y)
    // const B = this.area.B.x - this.area.A.x
    // const C = -(A * this.area.A.x + B * this.area.A.y)
    // const D = A * this.targetToEmit.position.x + B * this.targetToEmit.position.y + C
    // if (D >= 0) {
    //   return true
    // } else {
    //   return false
    // }


    if (
      this.targetToEmit.position.x >= this.area.C.x &&
      this.targetToEmit.position.x <= this.area.D.x &&
      this.targetToEmit.position.z >= this.area.C.z &&
      this.targetToEmit.position.z <= this.area.A.z
    ) {
      // this.action()
    }

  }
}
