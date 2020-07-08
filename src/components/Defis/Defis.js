import React, { useState } from "react";
import './defis.scss';
import Category from "../global/Category/Category";

function Defis(){

  const categories = useState({
    categories: [
      {
        name: 'alimentation'
      },
      {
        name: 'energie'
      },
      {
        name: 'dechets'
      },
      {
        name: 'deplacements'
      },
      {
        name: 'diy'
      },
      {
        name: 'travail'
      }
    ]
  })


  return(
   
    <div className="defis">

        <div>
          <h1 className="page_title">Choisi une catégorie<br/>pour ton défi du jour</h1>
          <div className="defis_categ_container">
            {categories[0].categories.map((category, i) => {
              return <Category key={i} categ={category.name} />
            })}
          </div>
        </div>

    </div>
  );
}

export default Defis;