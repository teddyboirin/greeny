import React from "react";
import './favoris.scss';
import Defi from "../global/Defi";

function Favoris(){
  return(
    <div className="favoris">
      <h1 className="page_title">Mes défis favoris</h1>
      <div className="favoris_container">
        <Defi points='5' defi='Consommer des oeufs de poule élevé en plein air'/>
        <Defi points='15' defi='Consommer au maximum des produits frais' />
        <Defi points='10' defi='Acheter un calendrier des fruits et légumes de saison' />
        <Defi points='8' defi='Éviter au maximum les plats préparés industriels' />
        <Defi points='20' defi='Prioriser les aliments encore consommables' />
        <Defi points='10' defi='Faire l’inventaire de ses placards avant de faire les courses' />
      </div>
    </div>
  );
}

export default Favoris;