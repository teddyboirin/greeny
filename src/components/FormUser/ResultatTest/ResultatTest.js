import React, { useState } from 'react';
import './resultat.scss';

function ResultatTest(props) {

  const data = useState({
    limits: [
      {
        "min": 0,
        "max": 11
      },
      {
        "min": 12,
        "max": 21
      }, 
      {
        "min": 22,
        "max": 32
      }
    ],
    axesX: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
  })

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