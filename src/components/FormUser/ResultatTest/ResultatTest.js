import React, { useState } from 'react';
import './resultat.scss';
//import DefisCategory from '../../Defis/DefisCategory/DefisCategory';

function ResultatTest(props) {

  const data = useState({
    axesX: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  })

  //let niveau;
  if(props.totalPoints >= 0 && props.totalPoints <= 11) {
    //console.log("facile")
    //niveau = <DefisCategory />
  } else if(props.totalPoints >= 12 && props.totalPoints <= 21) {
    console.log("moyen")
    //niveau = <DefisCategory />
  } else if(props.totalPoints >= 22 && props.totalPoints <= 32) {
    console.log("dure")
    //niveau = <DefisCategory />

  }

  return (
    <div className="resutat_container">
      <h1><span>Votre</span> empreinte carbone</h1>
      <p>Travaillons ensemble pour réduire votre empreinte écologique</p>
      
      <div className="chart_result_bloc">
      {
        data[0].axesX.map((axe, i) => (
          <div key={i} className="chart_axe">
            <span>{axe}</span>
            {
              props.totalPoints === axe ? 
                <div className="chart_result">
                  <p>Vous êtes ici</p>
                  <div style={{ color:'#02C39A'}}>{props.totalPoints}</div>
                </div>
              : ""
            }
            
          </div>
        ))
      }
      </div>

      <button onClick={() => window.location.assign('/defis')}>Commencer</button>
    </div>
  )
}

export default ResultatTest;