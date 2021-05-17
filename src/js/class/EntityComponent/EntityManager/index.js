export default class EntityManager {
  constructor () {
    this.ids = 0
    this.entitiesMap = {}
    this.entities = []
  }

  generateName () { // genere un unique désignant une instance de l'entité
    this.ids += 1
    return '__name__' + this.ids
  }

  get (n) {
    return this.entitiesMap[n]
  }

  filter (cb) {
    return this.entities.filter(cb)
  }

  add (e, n) { // ajoute une nouvelle entité (ex: ajouter monstre, on appel add e = instance monstre, n = nom de l'entité)
    if (!n) {
      n = this.generateName()
    }

    this.entitiesMap[n] = e
    this.entities.push(e)

    e.setParent(this)
    e.setName(n)
  }

  setActive (e, b) {
    const i = this.entities.indexOf(e)
    if (i < 0) {
      return
    }

    this.entities.splice(i, 1)
  }

  update (timeElapsed) { // grosse boucle sur tableau d'entité, pour chaque entité de son tableau, on met à jour à chaque frame de la gameloop avec les bonnes données
    for (const e of this.entities) {
      e.update(timeElapsed)
    }
  }
}
