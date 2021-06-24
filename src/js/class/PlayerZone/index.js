import { Mesh ,Sphere,TorusKnotBufferGeometry, MeshStandardMaterial, SphereBufferGeometry,MeshPhongMaterial, Matrix4,Clock, Box3,Vector3, BufferGeometry, BoxGeometry, CylinderGeometry, PlaneGeometry, MeshBasicMaterial, DoubleSide, ShaderMaterial, Color, FrontSide, AdditiveBlending} from 'three'
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'
import { Component } from '../EntityComponent'
import ControllerInput from '../ControllerInput/index'

Mesh.prototype.raycast = acceleratedRaycast
BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree

export default class PlayerZone extends Component {
  
  constructor ({ player, camera, terrain }) {
    super()
    this.player = player
    this.camera = camera
    this.terrain = terrain

    this.input = new ControllerInput()

    this.playerInZone = false
    this.zoneIsCreated = false
    this.zone = null
    this.zoneGlowGeom = null
    this.zoneGlow = null
    this.targetMesh = null
    this.transformMatrix = null
    this.sphere = null
    this.shapes = {}

    this.init({ camera: this.camera, terrain: this.terrain, player: this.player})

  }

  init(camera, terrain, player) {

    //ZONE SHAPE
    const zoneGeom = new CylinderGeometry( 15, 15, 5, 40 )
    const zoneMaterial = new MeshBasicMaterial({color : 0xc72a3f, opacity: 0.5, transparent: true} )
    this.shapes.zone = new Mesh(zoneGeom, zoneMaterial)
    this.shapes.zone.name = "Zone"

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
    const glowMaterial = new ShaderMaterial( 
      {
          uniforms: 
        { 
          "c":   { type: "f", value: 1.0 },
          "p":   { type: "f", value: 1.4 },
          glowColor: { type: "c", value: new Color(0xc72a3f) },
          viewVector: { type: "v3", value: camera.camera.components.Camera.threeCamera.position }
        },
        vertexShader:   vertexShader(),
        fragmentShader: fragmentShader(),
        side: FrontSide,
        blending: AdditiveBlending,
        transparent: true
      }  
    )

    //GLOW GEOM
    this.zoneGlowGeom = new CylinderGeometry( 15, 15, 100, 32 )
    this.shapes.zoneGlow = new Mesh( this.zoneGlowGeom, glowMaterial )
    this.shapes.zoneGlow.scale.multiplyScalar(1.2)
    this.shapes.zoneGlow.name= "zoneGlow"
    
  }
  
  createZone () {
    const pos = this.player.position
    this.zoneIsCreated = true

    this.shapes.zoneGlow.position.set(pos.x,50,pos.z)
    this.shapes.zone.position.set(pos.x,-1,pos.z)

    // add created zones to terrain
    this.terrain.add(  this.shapes.zoneGlow )
    this.terrain.add(  this.shapes.zone )


    // player collision shape
    const targetGeometry = this.player.components.Player.target.children[0].geometry
    const targetMaterial = new MeshPhongMaterial( { color: 0xffffff, side: DoubleSide, wireframe : true } )

    this.targetMesh = new Mesh( targetGeometry, targetMaterial )
    this.targetMesh.geometry.computeBoundsTree()
    this.targetMesh.position.set(pos.x,0,pos.z)
    this.targetMesh.rotateX(- Math.PI / 2)
    this.targetMesh.scale.set(3,3,3)
    this.terrain.add( this.targetMesh )
    this.targetMesh.updateMatrixWorld()
    
    this.shapes.sphere = new Mesh( new SphereBufferGeometry( 1, 50, 50 ), new MeshStandardMaterial( {
      metalness: 0.1,
      transparent: true,
      opacity: 0.75,
      premultipliedAlpha: true
    } ) )
    this.shapes.sphere.position.set(pos.x,20,pos.z)
    this.terrain.add( this.shapes.sphere )
    
    this.transformMatrix =
      new Matrix4()
      .copy( this.targetMesh.matrixWorld ).invert()
      .multiply( this.shapes.sphere.matrixWorld )


    // this.sphere = new Sphere( new Vector3(this.zoneGlowGeom.boundingSphere.center.x, this.zoneGlowGeom.boundingSphere.center.y, this.zoneGlowGeom.boundingSphere.center.z), this.zoneGlowGeom.parameters.radiusTop )
    this.sphere = new Sphere( undefined, this.zoneGlowGeom.parameters.radiusTop )
    this.sphere.applyMatrix4( this.transformMatrix )
        
  }

  expandZone () {
    
    this.transformMatrix =
    new Matrix4()
    .copy( this.targetMesh.matrixWorld ).invert()
    .multiply( this.shapes.sphere.matrixWorld )
    
    // console.log("ZoneGlowGeom",this.zoneGlow)
    // this.sphere = new Sphere( new Vector3(this.shapes.zoneGlow.position.x, this.shapes.zoneGlow.position.y, this.shapes.zoneGlow.position.z), this.zoneGlowGeom.parameters.radiusTop )
    // this.sphere.applyMatrix4( this.transformMatrix )
    
    const hit = this.targetMesh.geometry.boundsTree.intersectsSphere( this.targetMesh, this.sphere )

    if(hit) {
      console.log("hit")
  
      this.shapes.zone.scale.x += 0.001
      this.shapes.zone.scale.z += 0.001
      this.shapes.zoneGlow.scale.z += 0.001
      this.shapes.zoneGlow.scale.x += 0.001
      
    } else {
      console.log("pas hit")
    }
  }

  update(timeInSeconds) {

    if (this.input.keys.zone) {
      this.zoneIsCreated == false
        ? this.createZone()
        : this.expandZone()
    }

    if(this.zoneIsCreated) {
      
      const pos = this.player.position
      this.targetMesh.position.set(pos.x,0,pos.z)
      this.targetMesh.updateMatrixWorld()

      this.shapes.sphere.position.set(pos.x,20,pos.z)
    }
     
    // this.crateGlow.material.uniforms.viewVector.value = new Vector3().subVectors( this.camera.components.Camera.threeCamera.position, this.crateGlow.position )
  }

}
