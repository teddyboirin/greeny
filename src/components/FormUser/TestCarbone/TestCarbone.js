import React, { useState } from 'react'
import QuestionTest from '../QuestionTest/QuestionTest';
import './testCarbone.scss';

function TestCarbone() {
  const testEtape = useState({
    etapes: [
      {
        id: 0,
        question: "Avec combien de personnes habitez-vous ?",
        answers: [
          {
            "reponseA": "5 ou plus",
            "pointsA": 4,
            "reponseB": "2, 3 ou 4 personnes",
            "pointsB": 3,
            "reponseC": "Avec une personne",
            "pointsC": 2,
            "reponseD": "J’habite seul",
            "pointsD": 1
          }
       ]
      },
      {
        id: 1,
        question: "Quelle est votre consommation de viande / poisson ?",
        answers: [
          {
            "reponseA": "2 à 3 fois par jour",
            "pointsA": 4,
            "reponseB": "1 fois par jour",
            "pointsB": 3,
            "reponseC": "Quelques fois par semaine",
            "pointsC": 2,
            "reponseD": "Je suis végétarien",
            "pointsD": 1
          }
        ]
      },
      {
        id: 2,
        question: "Jetez vous de la nourriture périmée ?",
        answers: [
          {
            "reponseA": "Chaque semaine",
            "pointsA": 4,
            "reponseB": "Quelques fois par moi",
            "pointsB": 3,
            "reponseC": "Quelque fois par an",
            "pointsC": 2,
            "reponseD": "Jamais",
            "pointsD": 1
          }
        ]
      },
      {
        id: 3,
        question: "Quelle surface de votre habitat ?",
        answers: [
          {
            "reponseA": "Plus de 100m2",
            "pointsA": 4,
            "reponseB": "Entre 41 et 100m2",
            "pointsB": 3,
            "reponseC": "Entre 20 et 40m2",
            "pointsC": 2,
            "reponseD": "Moins de 20m2",
            "pointsD": 1
          }
        ]
      },
      {
        id: 4,
        question: "Quel est votre type de chauffage ?",
        answers: [
          {
            "reponseA": "Electrique",
            "pointsA": 4,
            "reponseB": "Pompe à chaleur",
            "pointsB": 3,
            "reponseC": "Chauffage à gaz",
            "pointsC": 2,
            "reponseD": "Autres",
            "pointsD": 1
          }
        ]
      },
      {
        id: 5,
        question: "Pour vos déplacements du quotidien vous prenez...",
        answers: [
          {
            "reponseA": "Principalement la voiture / moto",
            "pointsA": 4,
            "reponseB": "Un peut la voiture et autre (bus, à pied, ...)",
            "pointsB": 3,
            "reponseC": "Plutôt transports en commun",
            "pointsC": 2,
            "reponseD": "Tout à pied ou en vélo",
            "pointsD": 1
          }
        ]
      },
      {
        id: 6,
        question: "Vous prenez l’avion ...",
        answers: [
          {
            "reponseA": "Plus de 6 fois / an",
            "pointsA": 4,
            "reponseB": "Entre 2 et 6 fois / an",
            "pointsB": 3,
            "reponseC": "1 ou 2 fois / an",
            "pointsC": 2,
            "reponseD": "Jamais",
            "pointsD": 1
          }
        ]
      },
      {
        id: 7,
        question: "Quel est votre budget loisir/passion (hors nourriture) ?",
        answers: [
          {
            "reponseA": "Plus de 1500 €/mois",
            "pointsA": 4,
            "reponseB": "Entre 1000 et 1499 €/mois",
            "pointsB": 3,
            "reponseC": "Entre 100 et 999 €/mois",
            "pointsC": 2,
            "reponseD": "Moins de 100 €/mois",
            "pointsD": 1
          }
        ]
      }
    ]
  })
  console.log(testEtape[0].etapes[0].answers)
  const [nextStep, setNextStep] = useState({
    step: -1,
    show: false
  })

  function increment() {
    setNextStep({
      step: nextStep.step + 1,
      show: true
    })
    if(nextStep.step === 7) {
      window.location.assign('/defis')
    }
  }

  function decrement() {
    setNextStep({
      step: nextStep.step - 1,
      show: true
    })
  }

  function showStep(){
    setNextStep({
      show : !nextStep.show,
      step : nextStep.step + 1
    })
  }

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
              <div key={i}>

                {etape.answers.map((answer, j) => (
                    
                    <QuestionTest 
                      key={j}
                      id={etape.id + 1}
                      question={etape.question} 
                      reponseA={answer.reponseA} 
                      reponseB={answer.reponseB} 
                      reponseC={answer.reponseC} 
                      reponseD={answer.reponseD}
                      increment={increment}
                      decrement={decrement}
                    />
                ))}
               
            </div>
          :
            " "
          })
        )
      }

    </div>
  )
}

export default TestCarbone;