import { Audio, AudioListener, AudioLoader } from 'three'
import { LumaTheme, SkaljordTheme } from '../../../assets/sounds'
import { Component } from '../EntityComponent'

export default class MusicPlayer extends Component {
  constructor ({ civilisation, camera, scene }) {
    super()
    this.camera = camera
    this.scene = scene
    this.typeOfMusic = civilisation

    this.selectTypeMusic({ typeOfMusic: this.typeOfMusic })
  }

  selectTypeMusic ({ typeOfMusic }) {
    switch (typeOfMusic) {
      case 'luma':
        this.startMusic({ music: LumaTheme })
        break
      case 'skaljord':
        this.startMusic({ music: SkaljordTheme })
        break
      default:
        break
    }
    return true
  }

  startMusic ({ music }) {
    const audioListener = new AudioListener()
    this.camera.add(audioListener)
    const musicToPlay = new Audio(audioListener)
    this.scene.add(musicToPlay)
    const loader = new AudioLoader()

    loader.load(
      music,
      (audioBuffer) => {
        musicToPlay.setBuffer(audioBuffer)
        musicToPlay.setLoop(true)
        musicToPlay.setVolume(0.35)
        musicToPlay.play()
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      },
      (err) => {
        console.log('An error happened', err)
      }
    )
  }

  update (timeInSeconds) {
  }
}
