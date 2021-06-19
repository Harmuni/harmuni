import { Mesh ,Clock, Vector3, BoxGeometry, CylinderGeometry, PlaneGeometry, MeshBasicMaterial, DoubleSide, ShaderMaterial, Color, FrontSide, AdditiveBlending} from 'three'
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'
import { Component } from '../EntityComponent'

// Mesh.prototype.raycast = acceleratedRaycast
// BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
// BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree

export default class PlayerZone extends Component {
  
  constructor ({ scene, player, camera, renderer, terrain }) {
    super()
    this.scene = scene
    this.player = player
    this.camera = camera
    this.renderer = renderer
    this.terrain = terrain

    this.zone = null
    this.crate = null
    this.crateGlow = null
    this.createZone({scene : this.scene, renderer: this.renderer, camera: this.camera, terrain: this.terrain, player: this.player })

  }
  
  createZone ({ scene, renderer, camera, terrain, player }) {
    // console.log(camera.components.Camera)

    //ZONE SHAPE
    var cubeGeom = new CylinderGeometry( 15, 15, 5, 40 );
    var crateMaterial = new MeshBasicMaterial({color : 0xc72a3f, opacity: 0.5, transparent: true} )
    this.crate = new Mesh(cubeGeom, crateMaterial)
    this.crate.position.set(0,-1,0)
    this.crate.name="Crate"
    // this.crate.geometry.computeBoundsTree()
    terrain.add(this.crate)

    console.log(this.crate.geometry)
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
    var customMaterial = new ShaderMaterial( 
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
    var createGlowGeom = new CylinderGeometry( 15, 15, 100, 32 )
    this.crateGlow = new Mesh( createGlowGeom, customMaterial )
    this.crateGlow.position.set(0,50,0)
    this.crateGlow.scale.multiplyScalar(1.2)
    this.crateGlow.name="CrateGlow"
    terrain.add( this.crateGlow )

    

  }
  
  expandZone() {
     this.crate.scale.x += 0.001
     this.crate.scale.z += 0.001
     this.crateGlow.scale.z += 0.001
     this.crateGlow.scale.x += 0.001
 }

  update(deltaTime) {
    // check if player if in zone and if they press btn
    if (this.crate !== "null" && this.crate.scale.x < 3) {
        this.expandZone(deltaTime) 
    }
    // this.crateGlow.material.uniforms.viewVector.value = new Vector3().subVectors( this.camera.components.Camera.threeCamera.position, this.crateGlow.position )
  }

}
