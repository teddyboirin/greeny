import React from 'react';
import './resultat.scss';

function ResultatTest(props) {
  return (
    <div className="resutat_container">
      {/* <img src={require('../../../assets/dots_up.png')} alt="dots_up"/> */}
      <h1><span>Votre</span> empreinte personnelle</h1>
      <p>Travaillons ensemble pour réduire notre empreinte écologique</p>
      <h2>{props.totalPoints}</h2>
      <button onClick={() => window.location.assign('/defis')}>Commencer</button>
    </div>
  )
}

export default ResultatTest;