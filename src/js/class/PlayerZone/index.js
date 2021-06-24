import { Mesh ,Sphere,TorusKnotBufferGeometry, MeshStandardMaterial, SphereBufferGeometry,MeshPhongMaterial, Matrix4,Clock, Box3,Vector3, BufferGeometry, BoxGeometry, CylinderGeometry, PlaneGeometry, MeshBasicMaterial, DoubleSide, ShaderMaterial, Color, FrontSide, AdditiveBlending} from 'three'
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'
import { Component } from '../EntityComponent'

Mesh.prototype.raycast = acceleratedRaycast
BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree

export default class PlayerZone extends Component {
  
  constructor ({ player, camera, terrain }) {
    super()
    this.player = player
    this.camera = camera
    this.terrain = terrain

    this.playerInZone = false
    this.zone = null
    this.crate = null
    this.crateGlow = null
    this.targetMesh = null
    this.transformMatrix = null
    this.shapes = {}

    this.createZone({ camera: this.camera, terrain: this.terrain, player: this.player, targetMesh: this.targetMesh})
    // setTimeout(function() {
      // this.checkCollision()
    // }, 3000)

  }
  
  createZone ({ camera, terrain, player }) {
    
    //ZONE SHAPE
    const cubeGeom = new CylinderGeometry( 15, 15, 5, 40 )
    const crateMaterial = new MeshBasicMaterial({color : 0xc72a3f, opacity: 0.5, transparent: true} )
    this.shapes.crate = new Mesh(cubeGeom, crateMaterial)
    this.shapes.crate.position.set(0,-1,0)
    this.shapes.crate.name="Crate"
    terrain.add(this.shapes.crate)

    //SHADER 
    function vertexShader() {
      return `
      uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      void main() 
      {
          vec3 vNormal = normalize( normalMatrix * normal );
        vec3 vNormel = normalize( normalMatrix * viewVector );
        intensity = pow( c - dot(vNormal, vNormel), p );
        
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
      `
    }

    function fragmentShader() {
      return `
        uniform vec3 glowColor;
        varying float intensity;

        void main() 
        {
          vec3 glow = glowColor * intensity;
            gl_FragColor = vec4( glow, 1.0 );
        }
      `
    }
    
    //SHADER SHAPE
    const customMaterial = new ShaderMaterial( 
      {
          uniforms: 
        { 
          "c":   { type: "f", value: 1.0 },
          "p":   { type: "f", value: 1.4 },
          glowColor: { type: "c", value: new Color(0xc72a3f) },
          viewVector: { type: "v3", value: camera.components.Camera.threeCamera.position }
        },
        vertexShader:   vertexShader(),
        fragmentShader: fragmentShader(),
        side: FrontSide,
        blending: AdditiveBlending,
        transparent: true
      }  
    )

    //GLOW GEOM
    const createGlowGeom = new CylinderGeometry( 15, 15, 100, 32 )
    this.crateGlow = new Mesh( createGlowGeom, customMaterial )
    this.crateGlow.position.set(0,50,0)
    this.crateGlow.scale.multiplyScalar(1.2)
    this.crateGlow.name="CrateGlow"
    this.terrain.add(  this.crateGlow )

    const knotGeometry = player.components.Player.target.children[0].geometry
    const material = new MeshPhongMaterial( { color: 0xffffff, side: DoubleSide, wireframe : true } )

    this.targetMesh = new Mesh( knotGeometry, material )
    this.targetMesh.geometry.computeBoundsTree()
    // targetMesh.position.set(11,0,11)
    this.targetMesh.rotateX(- Math.PI / 2)
    this.targetMesh.scale.set(3,3,3)
    terrain.add( this.targetMesh )
    this.targetMesh.updateMatrixWorld()

    this.shapes.sphere = new Mesh( new SphereBufferGeometry( 1, 50, 50 ), new MeshStandardMaterial( {
      metalness: 0.1,
      transparent: true,
      opacity: 0.75,
      premultipliedAlpha: true
    } ) )
    terrain.add( this.shapes.sphere )

    // setTimeout(function() {
    //   if (player.components.Player.target.children[0]) {
  
    //   }
    // },3000)

    // TEST COLLISION
    // const knotGeometry = new TorusKnotBufferGeometry( 1, 0.4, 400, 100 )
    // const material = new MeshPhongMaterial( { color: 0xffffff, side: DoubleSide } )
    
  }

  checkCollision () {
          
      const transformMatrix =
      new Matrix4()
      .copy( this.targetMesh.matrixWorld ).invert()
      .multiply( this.shapes.sphere.matrixWorld )


      const sphere = new Sphere( new Vector3(createGlowGeom.boundingSphere.center.x, createGlowGeom.boundingSphere.center.y, createGlowGeom.boundingSphere.center.z), createGlowGeom.parameters.radiusTop )
      sphere.applyMatrix4( transformMatrix )
      
      const hit = this.targetMesh.geometry.boundsTree.intersectsSphere( this.targetMesh, sphere )
      hit ? console.log("hit") : console.log("pas hit")
      this.targetMesh.material.color.set( hit ? 0xff0000 : 0xffffff )
      this.targetMesh.material.emissive.set( 0xE91E63 ).multiplyScalar( hit ? 0.25 : 0 )
      this.shapes.sphere.material.color.set( hit ? 0xE91E63 : 0x666666 )
      this.shapes.sphere.material.emissive.set( 0xE91E63 ).multiplyScalar( hit ? 0.25 : 0 )
  }

  // inZone() {
  //     const knotGeometry = this.player.components.Player.target.children[0].geometry
  //     const material = new MeshPhongMaterial( { color: 0xffffff, side: DoubleSide, wireframe : true } )
  
  //     this.targetMesh = new Mesh( knotGeometry, material )
  //     this.targetMesh.geometry.computeBoundsTree()
  //     // targetMesh.position.set(11,0,11)
  //     this.targetMesh.rotateX(- Math.PI / 2)
  //     this.targetMesh.scale.set(3,3,3)
  //     this.terrain.add( this.targetMesh )
  //     this.targetMesh.updateMatrixWorld()
  
  //     this.shapes.sphere = new Mesh( new SphereBufferGeometry( 1, 50, 50 ), new MeshStandardMaterial( {
  //       metalness: 0.1,
  //       transparent: true,
  //       opacity: 0.75,
  //       premultipliedAlpha: true
  //     } ) )
  //     this.terrain.add( this.shapes.sphere )
      
  //     const transformMatrix =
  //     new Matrix4()
  //     .copy( this.targetMesh.matrixWorld ).invert()
  //     .multiply( this.shapes.sphere.matrixWorld )


  //     const sphere = new Sphere( new Vector3(this.createGlowGeom.boundingSphere.center.x, this.shapes.createGlowGeom.boundingSphere.center.y, this.shapes.createGlowGeom.boundingSphere.center.z), this.shapes.createGlowGeom.parameters.radiusTop )
  //     // const sphere = new Sphere( new Vector3(shapes.sphere.position.x, shapes.sphere.position.y, shapes.sphere.position.z), createGlowGeom.parameters.radiusTop )
  //     // console.log(createGlowGeom)
  //     sphere.applyMatrix4( transformMatrix )
      
  //     const hit = this.targetMesh.geometry.boundsTree.intersectsSphere( this.targetMesh, sphere )
  //     hit ? console.log("hit") : console.log("pas hit")
  //     // targetMesh.material.color.set( hit ? 0xff0000 : 0xffffff )
  //     // targetMesh.material.emissive.set( 0xE91E63 ).multiplyScalar( hit ? 0.25 : 0 )
  //     // shapes.sphere.material.color.set( hit ? 0xE91E63 : 0x666666 )
  //     // shapes.sphere.material.emissive.set( 0xE91E63 ).multiplyScalar( hit ? 0.25 : 0 )
  // }
  
//   expandZone() {
//      this.shapes.crate.scale.x += 0.001
//      this.shapes.crate.scale.z += 0.001
//      this.shapes.crateGlow.scale.z += 0.001
//      this.shapes.crateGlow.scale.x += 0.001
//  }

  update(timeInSeconds) {
    
    // console.log(this.player.position.x, this.targetMesh)
    // // check if player if in zone and if they press btn
    // // if (this.shapes.crate !== "null" && this.shapes.crate.scale.x < 3) {
    // //     this.expandZone(deltaTime) 
    // // }
    // // console.log(this.targetMesh)
    // if( player && this.targetMesh !== "null") {
    //   // console.log(player.position)
    //   // this.targetMesh.position = player.position
    //   // this.inZone()
    //   // console.log(this.targetMesh)
    // }
 
    // this.crateGlow.material.uniforms.viewVector.value = new Vector3().subVectors( this.camera.components.Camera.threeCamera.position, this.crateGlow.position )
  }

}
