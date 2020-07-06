import React, { useState } from 'react'
import QuestionTest from '../QuestionTest/QuestionTest';
import './testCarbone.scss';
import ResultatTest from '../ResultatTest/ResultatTest';

function TestCarbone() {
  const testEtape = useState({
    etapes: [
      {
        id: 0,
        question: "Avec combien de personnes habitez-vous ?",
        answers: [
          {
            "reponse": "5 ou plus",
            "points": 4,
          },
          {
            "reponse": "2, 3 ou 4 personnes",
            "points": 3,
          },
          {
            "reponse": "Avec une personne",
            "points": 2,
          },
          {
            "reponse": "J’habite seul",
            "points": 1
          }
       ]
      },
      {
        id: 1,
        question: "Quelle est votre consommation de viande / poisson ?",
        answers: [
          {
            "reponse": "2 à 3 fois par jour",
            "points": 4,
          },
          {
            "reponse": "1 fois par jour",
            "points": 3,
          },
          {
            "reponse": "Quelques fois par semaine",
            "points": 2,
          },
          {
            "reponse": "Je suis végétarien",
            "points": 1
          }
        ]
      },
      {
        id: 2,
        question: "Jetez vous de la nourriture périmée ?",
        answers: [
          {
            "reponse": "Chaque semaine",
            "points": 4,
          },
          {
            "reponse": "Quelques fois par moi",
            "points": 3,
          },
          {
            "reponse": "Quelque fois par an",
            "points": 2,
          },
          {
            "reponse": "Jamais",
            "points": 1
          }
        ]
      },
      {
        id: 3,
        question: "Quelle surface de votre habitat ?",
        answers: [
          {
            "reponse": "Plus de 100m2",
            "points": 4,
          },
          {
            "reponse": "Entre 41 et 100m2",
            "points": 3,
          },
          {
            "reponse": "Entre 20 et 40m2",
            "points": 2,
          },
          {
            "reponse": "Moins de 20m2",
            "points": 1
          },
        ]
      },
      {
        id: 4,
        question: "Quel est votre type de chauffage ?",
        answers: [
          {
            "reponse": "Electrique",
            "points": 4,
          },
          {
            "reponse": "Pompe à chaleur",
            "points": 3,
          },
          {
            "reponse": "Chauffage à gaz",
            "points": 2,
          },
          {
            "reponse": "Autres",
            "points": 1
          }
        ]
      },
      {
        id: 5,
        question: "Pour vos déplacements du quotidien vous prenez...",
        answers: [
          {
            "reponse": "Principalement la voiture / moto",
            "points": 4,
          },
          {
            "reponse": "Un peut la voiture et autre (bus, à pied, ...)",
            "points": 3,
          },
          {
            "reponse": "Plutôt transports en commun",
            "points": 2,
          },
          {
            "reponse": "Tout à pied ou en vélo",
            "points": 1
          }
        ]
      },
      {
        id: 6,
        question: "Vous prenez l’avion ...",
        answers: [
          {
            "reponse": "Plus de 6 fois / an",
            "points": 4,
          },
          {
            "reponse": "Entre 2 et 6 fois / an",
            "points": 3,
          },
          {
            "reponse": "1 ou 2 fois / an",
            "points": 2,
          },
          {
            "reponse": "Jamais",
            "points": 1
          },
        ]
      },
      {
        id: 7,
        question: "Quel est votre budget loisir/passion (hors nourriture) ?",
        answers: [
          {
            "reponse": "Plus de 1500 €/mois",
            "points": 4,
          },
          {
            "reponse": "Entre 1000 et 1499 €/mois",
            "points": 3,
          },
          {
            "reponse": "Entre 100 et 999 €/mois",
            "points": 2,
          },
          {
            "reponse": "Moins de 100 €/mois",
            "points": 1
          }
        ]
      },
      {
        id: 8,
        answers: []
      }
    ]
  })
  
  const [nextStep, setNextStep] = useState({
    step: -1,
    show: false
  })

  const increment = () => {
    setNextStep({
      step: nextStep.step + 1,
      show: true
    })
  }

  const decrement = () => {
    setNextStep({
      step: nextStep.step - 1,
      show: true
    })
  }

  const showStep = () => {
    setNextStep({
      show : !nextStep.show,
      step : nextStep.step + 1
    })
  }

  const [arrayPoints, setArrayPoints] = useState([])

  const addPoints = (value, event) => {
    let newPoints = [...arrayPoints]
    newPoints.push(value.points)
    setArrayPoints(newPoints)

    // if (event === value.detail) {
    //   newPoints.splice(value.points, 1);
    // }
    // //console.log(newPoints)
    
    // console.log(newPoints, value.detail)
  }

  const totalPoints = arrayPoints.reduce(
    (previousPoints, currentPoints, index) =>
      previousPoints+currentPoints, 
      0
  );
  //console.log(totalPoints);

  return (
    <div className="test_carbone">

      <div className="header_test">
        <img src={require('../../../assets/logo-green.svg')} alt="logo"/>
        <button onClick={() => window.location.assign('/')}>Connexion</button>
      </div>

      { !nextStep.show ? (
        <div className="presentation_test">
          <h1>Découvre ton empreinte carbone</h1>
          <p>Répondez aux questions suivantes le plus honnêtement possible<br/>pour connaître une estimation de votre empreinte carbone</p>
          <button onClick={showStep}>Suivant</button>
        </div>

        ) : ( 
          testEtape[0].etapes.map((etape, i) => {

            return etape.id === nextStep.step && i === etape.id ? 
                    
              <QuestionTest 
                key={i}
                id={etape.id + 1}
                question={etape.question} 
                answers={etape.answers}
                reponse={etape.reponse}
                increment={increment}
                decrement={decrement}
                addPoints={addPoints}
              />
            :
              " "
          })
        )
      }

      { nextStep.step === 8 ? (
          <ResultatTest totalPoints={totalPoints} /> 

        ) : ( 
          " "
      )}

    </div>
  )
}

export default TestCarbone;