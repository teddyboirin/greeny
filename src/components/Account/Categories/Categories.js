import React, { useState, useEffect } from "react";
import './categories.scss';
import Category from "../../global/Category/Category";
const axios = require('axios');

function Categories(){

  const categories = useState({
    categories: [
      {
        name: 'Alimentation',
        points: 0
      },
      {
        name: 'Énergie',
        points: 0
      },
      {
        name: 'Déchets',
        points: 0
      },
      {
        name: 'Déplacements',
        points: 0
      },
      {
        name: 'DIY',
        points: 0
      },
      {
        name: 'Au travail',
        points: 0
      }
    ]
  })

  const [pointsCateg, setPointsCateg] = useState([])

  useEffect(() => {
    getReccurrence()
  }, [])
  const getReccurrence = () => {
    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/users/${localStorage.getItem('id')}/defis`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setPointsCateg(response.data["hydra:member"]);
      addPoints()
      console.log(response.data["hydra:member"])
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const addPoints = () => {
    pointsCateg.map((point, i) => {
      return <div key={i}>{point.points} </div>
    })
  }
  const totalPoints = categories[0].categories.reduce((total, category) => total + category.points, 0);
  
  return(
    <div className="defis_categ_container">
      {categories[0].categories.map((category, i) => {
        return <Category key={i} categ={category.name} points={category.points + 'pts'}/>
      })}

      <div>
        <h3>Total des points accumulés</h3>
        <p className="total_points">{totalPoints}pts</p>
      </div>
    </div>
  )
}

export default Categories;