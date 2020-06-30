import React from "react";
import './defidescription.scss'

function DefiDescription(props){
  return(
    <div className='DefiDescription'>
      <div className='DefiDescription_part DefiDescription_part_1'>
        <div>
          <h1>{props.name}</h1>
          <p>
            Savais-tu que chaque coquille d'œuf est marquée par un code qui indique dans quelles conditions d'élevage cet œuf a été pondu ? 
            <br></br><br></br>
            Le premier chiffre imprimé, juste avant le code “FR", est là pour nous donner des indications sur les conditions de vie des poules qui les ont pondus : 
            <br></br><br></br>
            0:eufs bio de poules élevées en plein air <br></br>
            1: eufs de poules élevées en plein air <br></br>
            2: eufs de poules élevées au sol qui ne voient jamais le jour <br></br>
            3: ceufs de poules élevées en cage qui ne voient jamais le jour <br></br>
            <br></br><br></br>
            70% des œufs consommés sont issus d'élevages en batterie, mais maintenant, même si ta boîte d'œufs affiche une poule bien dodue gambadant dans l'herbe verte, tu as un moyen très facile de vérifier si c'est vrai !
          </p>
        </div>
      </div>
      <div className='DefiDescription_part DefiDescription_part_2'>
        <h2>As-tu relevé le défi ?</h2>
        <button>Je l'ai fait</button>
        <div>{props.points}pts</div>
      </div>
    </div>
  )
}

export default DefiDescription