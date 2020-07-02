import React, { useState } from "react";
import './categories.scss';
import Category from "../../global/Category/Category";

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
      {categories[0].categories.map((category, i) => {
        return <Category key={i} categ={category.name} points={category.points + 'pts'}/>
      })}
    </div>
  )
}

export default Categories;