import React, { useState } from "react";
import './defis.scss';
import Category from "../global/Category";

function Defis(){

  const categories = useState({
    categories: [
      {
        name: 'Alimentation'
      },
      {
        name: 'Énergie'
      },
      {
        name: 'Déchets'
      },
      {
        name: 'Déplacements'
      },
      {
        name: 'DIY'
      },
      {
        name: 'Au travail'
      }
    ]
  })

  return(
    <div className="defis">
      <h1 className="page_title">Choisi une catégorie<br/>pour ton défi du jour</h1>
      <div className="defis_categ_container">
        {categories[0].categories.map((category, i) => {
          return <Category key={i} categ={category.name}/>
        })}
      </div>

    </div>
  );
}

export default Defis;