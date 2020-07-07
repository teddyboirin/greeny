import React, { useState } from "react";

function ReponseTest(props){

  const [style, setStyle] = useState({
    grey: '#F5F5F5',
    black: '#000',
    green: '#02C39A',
    white: '#fff'
  })

  const onClick = () => {
    props.addPoints({
      points: props.points
    })
    changeColor()
  }
  
  const changeColor = () => {
    setStyle({
      grey: style.green,
      green: style.grey,
      black: style.white,
      white: style.black
    })
  }

  return(
    
    <li onClick={onClick} style={{background: style.grey, color: style.black}}>
      <span style={{color: style.green}}>{props.idRep}</span>
      {props.reponse}
    </li>
    
  );
}

export default ReponseTest;