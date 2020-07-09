import React, { useState } from 'react';
import './resultat.scss';
const axios = require('axios');

function ResultatTest(props) {

  const data = useState({
    axesX: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  })

  const [users, setUser] = useState([]);
  const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/users/${localStorage.getItem("id")}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setUser(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    })

  const setLevel = (level) => {
    const token = localStorage.getItem("token");
    axios.put(`https://greeny.samirchalal.fr/api/users/${users.id}`, ( {"niveau": level}), {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  if(props.totalPoints >= 0 && props.totalPoints <= 11) {
      setLevel("dure")
  } else if(props.totalPoints >= 12 && props.totalPoints <= 21) {
     setLevel("moyen")
  } else if(props.totalPoints >= 22 && props.totalPoints <= 32) {     
      setLevel("facile")
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