import React from "react";

function QuestionTest(props){

  return(
    <div className="test_carbone_detail">
      <span>Question {props.id} / 8</span>
      <h2>{props.question}</h2>

      <div>
        <ul>
          <li>{props.reponseA}</li>
          <li>{props.reponseB}</li>
          <li>{props.reponseC}</li>
          <li>{props.reponseD}</li>
        </ul>

        <div className="button_step">
          <button onClick={props.deincrement}>Précédent</button>
          <button onClick={props.increment}>Suivant</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionTest;