import React, { useState, useEffect } from "react";
import './categories.scss';
import Category from "../../global/Category/Category";
const axios = require('axios');

function Categories(){

  const [pointsCateg, setPointsCateg] = useState([])

  useEffect(() => {
    getReccurrence()
    totalPointsCateg()
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
      //console.log(response.data["hydra:member"])
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  const totalPoints = pointsCateg.reduce((total, point) => total + point.points, 0);
  const totalPointsCateg = () => {
    pointsCateg.map((point, i) => {

      if(point.categorie === "alimentation") {
        let newArray = []

        newArray.push(point.points)
        newArray.reduce((total, point) => total + point.points, 0)
        console.log(newArray)
      }
      //console.log(point.categorie)
    })
  }

  return(
    <div className="defis_categ_right">
      <div className="defis_categ_container">
        <Category categ="Alimentation" points={totalPoints + 'pts'}/>
        <Category categ="Énergie" points={totalPoints + 'pts'}/>
        <Category categ="Déchets" points={totalPoints + 'pts'}/>
        <Category categ="Déplacements" points={totalPoints + 'pts'}/>
        <Category categ="DIY" points={totalPoints + 'pts'}/>
        <Category categ="Au travail" points={totalPoints + 'pts'}/>
      </div>

      <div>
        <h3 onClick={totalPointsCateg}>Total des points accumulés</h3>
        <p className="total_points">{totalPoints}pts</p>
      </div>
    </div>
  )
}

export default Categories;