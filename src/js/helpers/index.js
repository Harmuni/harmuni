function helloWorld () {
  console.log('Hello World!')
}

const vector = (p1, p2) => {
  return {
    x: (p2.x - p1.x),
    z: (p2.z - p1.z)
  }
}

const dot = (u, v) => {
  return u.x * v.x + u.z * v.z
}

export {
  helloWorld,
  vector,
  dot
}
