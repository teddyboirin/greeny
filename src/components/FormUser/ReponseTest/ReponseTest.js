import React from "react";

function ReponseTest(props){

  const onClick = () => {
    props.addPoints({
      points: props.points
    })
  }

  return(
    <li onClick={onClick}>{props.reponse}</li>
  );
}

export default ReponseTest;