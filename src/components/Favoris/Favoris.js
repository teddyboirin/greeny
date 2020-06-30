import React, { useState } from "react";
import './favoris.scss';
import Defi from "../global/Defi";

function Favoris(){

  const defiFav = useState({
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

  return(
    <div className="favoris">
      <h1 className="page_title">Mes défis favoris</h1>
      <div className="favoris_container">
      {defiFav[0].defis.map((defi) => {
        return <Defi defi={defi.name} points={defi.points}/>
      })}
      </div>
    </div>
  );
}

export default Favoris;