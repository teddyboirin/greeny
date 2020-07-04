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
    axesX: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
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