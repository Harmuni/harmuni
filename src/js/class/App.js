import Routing from './Routing'

/**
 * @author Harmuni Developer Team
 * @license ?
 * @version 1.0
 * @class App
 */
export default class App {
  /**
   * @constructor of App
   * @returns {void}
   */
  constructor ({ root }) {
    this.root = root
    const app = this.main()
    app !== 1 && console.error('Error rendering app')
  }

  /**
   * Main of app, render app and refresh animations
   * @returns {void}
   */
  main () {
    const routing = new Routing({ rootDiv: this.root })
    return 1
  }
}
