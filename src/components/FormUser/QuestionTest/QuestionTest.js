import React from "react";
import ReponseTest from '../ReponseTest/ReponseTest';

function QuestionTest(props){
  let buttonDecrement;
  if (props.id > 1) {
    buttonDecrement = <button onClick={props.decrement}>Précédent</button>
  }

  return(
    <div>
    {
      props.id < 9 ? (
        <div className="test_carbone_detail">
          <div className="test_question_bloc">
            <span>Question {props.id} / 8</span>
            <h2 onClick={props.addPoints}>{props.question}</h2>
          </div>
        
          <div>
            <ul>
              {props.answers.map((answer, j) => (
                <ReponseTest 
                  key={j} 
                  reponse={answer.reponse} 
                  points={answer.points}
                  addPoints={props.addPoints}
                />
              ))}
            </ul>

            <div className="button_step">
              {buttonDecrement}
              <button onClick={props.increment}>Suivant</button>
            </div>
          </div>
        </div>

      ) : (
        " "
    )
  }
  </div>
  );
}

export default QuestionTest;