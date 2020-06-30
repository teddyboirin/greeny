import React, { useState } from "react";
import './defi.scss'

function Defi(props){

  const [defiClicked, setDefiClicked] = useState(false)

  return(
    <div onClick={() => setDefiClicked(true)} className={defiClicked === false ? 'defi' : 'defi_clicked' + ' defi'}>
      <div className='defi_top'>
        <span className="defi_bfr"></span>
        <div>{props.points}pts</div>
      </div>
      <h3 className='defi_text'>{props.defi}</h3>
      <div className='defi_bottom'>
        <span className="defi_bfr"></span>
        <span>En savoir plus</span>
      </div>
    </div>
  );
}

export default Defi;