import React from "react";
import './defis.scss';

function Defis(){
  return(
    <div className="defis">
      <h1 className="page_title">Choisi une catégorie<br/>pour ton défi du jour</h1>

      <div className="defis_categ_container">
        <div className="defis_categ_bloc">
          <div></div>
          <h2>Alimentation</h2>
        </div>

        <div className="defis_categ_bloc">
          <div></div>
          <h2>Énergie</h2>
        </div>

        <div className="defis_categ_bloc">
          <div></div>
          <h2>Déchets</h2>
        </div>

        <div className="defis_categ_bloc">
          <div></div>
          <h2>Déplacements</h2>
        </div>

        <div className="defis_categ_bloc">
          <div></div>
          <h2>Dyi</h2>
        </div>

        <div className="defis_categ_bloc">
          <div></div>
          <h2>Au travail</h2>
        </div>
      </div>
    </div>
  );
}

export default Defis;