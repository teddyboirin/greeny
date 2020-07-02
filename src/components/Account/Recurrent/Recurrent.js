import React , {useState} from "react";
import './recurrent.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";

function Reccurent(){

  const defiReccurent = useState({
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

  return(
    <div>
      {defiClicked === false ? (
        <div className="recurrence">
        {defiReccurent[0].defis.map((defi, i) => {
          return <Defi onClick={onClick} key={i} points={defi.points} defi={defi.name}/>
        })}
        </div>
      ) : (
        <DefiDescription name={chosenDefi.name} points={chosenDefi.points} />
      )}
    </div>
  )
}

export default Reccurent;