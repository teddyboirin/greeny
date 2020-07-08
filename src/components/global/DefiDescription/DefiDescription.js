import React, { useState } from "react";
import './defidescription.scss'

function DefiDescription(props){

  const [checkDefi, setCheckDefi] = useState(false);

  return(
    <div>
      {checkDefi === false ? (
        <div className='DefiDescription'>
          <div className='DefiDescription_part DefiDescription_part_1'>
          <div>
            <h1>{props.name}</h1>
            <p>
              {props.text}
            </p>
          </div>
        </div>
        <div className='DefiDescription_part DefiDescription_part_2'>
          <h2>As-tu relevé le défi ?</h2>
          <button onClick={() => setCheckDefi(true)}>Je l'ai fait</button>
          <div>{props.points}pts</div>
        </div>
        </div>
      ) : (
        <div className='DefiChecked'>
          <img src={require('../../../assets/bravo.svg')} alt="bravo"/>
          <h1>BRAVO</h1>
          <h2>Tu as relevé le défi !</h2>
          <div className='DefiChecked_points'>
            {props.points}pts
            <span>+{props.points}</span>
            <span>+{props.points}</span>
          </div>
          <div className='DefiChecked_button' onClick={() => window.location.assign('/defis')}>
            <div className='DefiChecked_button_hover'>
              GO
            </div>
            Lance toi dans un nouveau défi
          </div>
        </div>
      )}
    </div>
  )
}

export default DefiDescription