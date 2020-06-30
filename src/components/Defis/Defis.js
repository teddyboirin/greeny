import React, { useState } from "react";
import './defis.scss';
import Category from "../global/Category";
import DefisCategory from "./DefisCategory";

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

  const [clickCategory, setClickCategory] = useState(false)

  const [nameCategory, setNameCategory] = useState('')

  const changeValue = (value) => {
    setClickCategory(value.showDefis);
    setNameCategory(value.categoryName);
  }

  return(
    <div className="defis">
      {clickCategory === false ? ( 
        <div>
          <h1 className="page_title">Choisi une catégorie<br/>pour ton défi du jour</h1>
          <div className="defis_categ_container">
            {categories[0].categories.map((category, i) => {
              return <Category onClick={changeValue} key={i} categ={category.name} />
            })}
          </div>
        </div>
      ) : (
        <DefisCategory categ={nameCategory}  />
      )}

    </div>
  );
}

export default Defis;