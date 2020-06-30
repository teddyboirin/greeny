import React, { useState } from "react";
import './account.scss';
import Category from "../Category/Category";

function Categories(){

  const categories = useState({
    categories: [
      {
        name: 'Alimentation',
        points: 40
      },
      {
        name: 'Énergie',
        points: 20
      },
      {
        name: 'Déchets',
        points: 12
      },
      {
        name: 'Déplacements',
        points: 8
      },
      {
        name: 'DIY',
        points: 8
      },
      {
        name: 'Au travail',
        points: 15
      }
    ]
  })

  return(
    <div className="defis_categ_container">
      {categories[0].categories.map((category) => {
        return <Category categ={category.name} points={category.points}/>
      })}
    </div>
  )
}

export default Categories;