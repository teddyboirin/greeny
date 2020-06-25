import React from "react";
import './defi.scss'

function Defi(props){
  return(
    <div className="defi">
      <div className='defi__top'>
        <div>
          <img src={require('../../assets/favoris.svg')} alt="Icône favoris"/>
        </div>
        <div>{props.points}pts</div>
      </div>
      <h3 className='defi__text'>{props.defi}</h3>
      <div className='defi__bottom'>
        <div>
          <img src={require('../../assets/learn-more.svg')} alt="Icône en savoir plus"/>
        </div>
        <span>En savoir plus</span>
      </div>
    </div>
  );
}

export default Defi;