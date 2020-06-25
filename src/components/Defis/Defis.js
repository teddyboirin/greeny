import React from "react";
import './defis.scss';
import Category from "../Category/Category";

function Defis(){
  return(
    <div className="defis">
      <h1 className="page_title">Choisi une catégorie<br/>pour ton défi du jour</h1>
      
      <div className="defis_categ_container">
        <Category categ='Alimentation'/>
        <Category categ='Energie'/>
        <Category categ='Déchets'/>
        <Category categ='Déplacements'/>
        <Category categ='Diy'/>
        <Category categ='Au travail'/>
      </div>

    </div>
  );
}

export default Defis;