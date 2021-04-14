import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class App {
  constructor (options) {
    // Config
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    // Canvas & Renderer
    const canvas = document.querySelector('#webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Handle window resizing
    window.addEventListener('resize', () => {
      // Update dimensions
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Scene
    const scene = new THREE.Scene()

    // Lighting
    const light = new THREE.DirectionalLight('#ffffff')
    light.position.set(0, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.25)
    scene.add(ambientLight)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )
    camera.position.set(0, 0, 3)
    scene.add(camera)

    // Orbit Controls
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.enableDamping = true

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 'green' })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const terrainLoader = new GLTFLoader
    let landscape
    terrainLoader.load(
        "mountain.glb",
        function (gltf) {
            landscape = gltf.scene.children[4]
    
            landscape.scale.set(15,-15,15)
            landscape.position.set(0,0,0)
            landscape.name = "Landscape"
        
            landscape.traverse((node) => {
                if (!node.isMesh) return;
                node.material.wireframe = true
                node.material.doubleSided = true
            })

            scene.add(landscape)
        },
        undefined,
        function (error) {
        console.error(error)
        }
    )

    //Controls 
    const keyboard = {}
    
    window.onkeydown = function (e) {
        keyboard[e.keyCode] = true
    }
    
    window.onkeyup = function (e) {
        delete keyboard[e.keyCode]
    }
    
    var xSpeed = 0.3
    var ySpeed = 0.3
    
    document.addEventListener("keydown", onDocumentKeyDown, false)
        function onDocumentKeyDown(event) {
            var keyCode = event.which
        if (keyCode == 38) {
            cube.position.z -= ySpeed
        } else if (keyCode == 40) {
            cube.position.z += ySpeed
        } else if (keyCode == 37) {
            cube.position.x -= xSpeed
        } else if (keyCode == 39) {
            cube.position.x += xSpeed
        }
    }

    //Raycaster
    const raycaster = new THREE.Raycaster()

    // Render & Animation
    const clock = new THREE.Clock()
    const render = () => {
      window.requestAnimationFrame(render)

      // Animation logic
      const elapsedTime = clock.getElapsedTime()
    
      // Raycaster
      const rayOrigin = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z)
      const rayDirection = new THREE.Vector3(0, -1, 0)
      rayDirection.normalize()
      raycaster.set(rayOrigin, rayDirection) 
        
      if (landscape) {
          const intersects = raycaster.intersectObjects(scene.children, true)
          for(const intersect of intersects)
          {   
              cube.position.set(intersect.point.x, intersect.point.y + 0.8, intersect.point.z)
          }
      }

      orbitControls.update()
      renderer.render(scene, camera)
    }

    window.requestAnimationFrame(render)
  }
}
