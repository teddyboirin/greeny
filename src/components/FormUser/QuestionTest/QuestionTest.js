import React from "react";

function QuestionTest(props){
  let buttonDecrement;
  if (props.id > 1) {
    buttonDecrement = <button onClick={props.decrement}>Précédent</button>
  }

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
          {buttonDecrement}
          <button onClick={props.increment}>Suivant</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionTest;