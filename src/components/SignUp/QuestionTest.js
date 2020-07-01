import React from "react";

function QuestionTest(props){

  return(
    <div>
      <h1>{props.question}</h1>

      <ul>
        <li>{props.reponseA}</li>
        <li>{props.reponseB}</li>
        <li>{props.reponseC}</li>
        <li>{props.reponseD}</li>
      </ul>

      <button onClick={props.increment}>Suivant button</button>
    </div>
  );
}

export default QuestionTest;