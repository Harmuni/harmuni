
export default `
  <div id='game'>
    <canvas id='webgl'></canvas>
  </div>
  <div id='pause' hidden>
  <div class='pause-window'>
    <div class='pause-window__decoration pause-window__decoration--top'>
        <img src='/dist/assets/img/svg/ligne_ornementale_moyenne.svg' alt=''>
    </div>
    <div class='pause-window__menu'>
        <div class='menu__decoration'>
            <img src='/dist/assets/img/svg/losage_contours.svg' alt=''>
        </div>
        <ul class='menu'>
            <li class='menu__item'><button>Reprendre</button></li>
            <li class='menu__item'><button>Paramétres</button></li>
            <li class='menu__item'><button>Quitter</button></li>
        </ul>
        <div class='menu__decoration'>
            <img src='/dist/assets/img/svg/losage_contours.svg' alt=''>
        </div>
    </div>
    <div class='pause-window__decoration pause-window__decoration--bottom'>
        <img src='/dist/assets/img/svg/ligne_ornementale_courte.svg' alt=''>
    </div>
  </div>
  </div>
`
