import React, { useState } from 'react'
import QuestionTest from './QuestionTest';

function TestCarbone() {
  const testEtape = useState({
    etapes: [
      {
        id: 0,
        question: "Avec combien de personnes habitez-vous ?",
        reponseA: "5 ou plus",
        reponseB: "2, 3 ou 4 personnes",
        reponseC: "Avec une personne",
        reponseD: "J’habite seul"
      },
      {
        id: 1,
        question: "Quelle est votre consommation de viande / poisson ?",
        reponseA: "2 à 3 fois par jour",
        reponseB: "1 fois par jour",
        reponseC: "Quelques fois par semaine",
        reponseD: "Je suis végétarien"
      },
      {
        id: 2,
        question: "Jetez vous de la nourriture périmée ?",
        reponseA: "Chaque semaine",
        reponseB: "Quelques fois par moi",
        reponseC: "Quelque fois par an",
        reponseD: "Jamais"
      },
      {
        id: 3,
        question: "Quelle surface de votre habitat ?",
        reponseA: "Plus de 100m2",
        reponseB: "Entre 41 et 100m2",
        reponseC: "Entre 20 et 40m2",
        reponseD: "Moins de 20m2"
      },
      {
        id: 4,
        question: "Quel est votre type de chauffage ?",
        reponseA: "Electrique",
        reponseB: "Pompe à chaleur",
        reponseC: "Chauffage à gaz",
        reponseD: "Autres"
      },
      {
        id: 5,
        question: "Pour vos déplacements du quotidien vous prenez...",
        reponseA: "Principalement la voiture / moto",
        reponseB: "Un peut la voiture et autre (bus, à pied, ...)",
        reponseC: "Plutôt transports en commun",
        reponseD: "Tout à pied ou en vélo"
      },
      {
        id: 6,
        question: "Vous prenez l’avion ...",
        reponseA: "Plus de 6 fois / an",
        reponseB: "Entre 2 et 6 fois / an",
        reponseC: "1 ou 2 fois / an",
        reponseD: "Jamais"
      },
      {
        id: 7,
        question: "Quel est votre budget loisir/passion (hors nourriture) ?",
        reponseA: "Plus de 1500 €/mois",
        reponseB: "Entre 1000 et 1499 €/mois",
        reponseC: "Entre 100 et 999 €/mois",
        reponseD: "Moins de 100 €/mois"
      }
    ]
  })

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

  function cc(){
    setNextStep({
      show : !nextStep.show,
      step : nextStep.step + 1
    })
  }

  return (
    <div className="test_carbone">
      {console.log(nextStep.show)}
      <img src={require('../../assets/logo-green.svg')} alt="logo"/>

      { !nextStep.show ? (
        <div>
          <h1>Découvre ton empreinte carbone</h1>
          <p>Répondez aux questions suivantes le plus honnêtement possible pour connaître une estimation de votre empreinte carbone</p>
          <button onClick={cc}>Suivant</button>
        </div>

        ) : ( 
          testEtape[0].etapes.map((etape, i) => {
            if(etape.id === nextStep.step && i === etape.id) {
              return <QuestionTest 
                key={i} 
                question={etape.question} 
                reponseA={etape.reponseA} 
                reponseB={etape.reponseB} 
                reponseC={etape.reponseC} 
                reponseD={etape.reponseD}
                increment={increment}
              />
            }
          })
        )}

    </div>
  )
}

export default TestCarbone;