import React, { useState } from "react";
import './defiscategory.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";

function DefisCategory(props){

  const defis = useState({
    defis: [
      {
        points: 5,
        name: 'Consommer des oeufs de poule élevé en plein air'
      },
      {
        points: 15,
        name: 'Consommer au maximum des produits frais'
      },
      {
        points: 10,
        name: 'Acheter un calendrier des fruits et légumes de saison'
      },
      {
        points: 8,
        name: 'Éviter au maximum les plats préparés industriels'
      },
      {
        points: 20,
        name: 'Prioriser les aliments encore consommables'
      },
      {
        points: 10,
        name: 'Faire l’inventaire de ses placards avant de faire les courses'
      }
    ]
  })

  const [defiClicked, setDefiClicked] = useState(false)

  const [chosenDefi, setChosenDefi] = useState({
    name: '',
    points: 0
  })

  const onClick = (value) => {
    setDefiClicked(value.defiClicked)
    setChosenDefi({
      name: value.name,
      points: value.points
    })
  }

  // const [defi, setDefis] = useState({
  //   name: "",
  //   points: 0,
  //   recurrence: true,
  //   text: "",
  //   categorie: ""
  // })

  // useEffect(() => {
  //   const defiData ={
  //     "name": defi.name,
  //     "points": defi.points,
  //     "recurrence": defi.recurrence,
  //     "text": defi.text,
  //     "categorie": defi.categorie
  //   }

  //   axios.get('http://127.0.0.1:8000/api/defis', defiData)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // })

  return(
    <div>
      {defiClicked === false ? (
        <div>
          <h1 className="page_title">Choisi ton défi du jour<br></br>Catégorie : {props.categ}</h1>
          <div className="defis_container">
            {defis[0].defis.map((defi, i) => {
              return <Defi onClick={onClick} key={i} defi={defi.name} points={defi.points}/>
            })}
          </div>
        </div>
      ) : (
        <DefiDescription name={chosenDefi.name} points={chosenDefi.points} />
      )}
    </div>
  )
}

export default DefisCategory