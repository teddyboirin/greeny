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
          addPoints()

  }, [])
  const getReccurrence = (index) => {
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

  const [newArray, setNewArray] = useState([])
  const addPoints = () => {

    pointsCateg.map((point, i) => {
      
           
        if (point === point.categorie) {
          newArray.push({point: point.points, categ: point.categorie})
          setNewArray(point)
        }
              console.log(newArray)

      // let categArray = [] 
      // if(newArray.includes(point.categorie) >= 2) {
      //   categArray.push(newArray)
      // }


      // var temp = point.categorie;
      // var count = (newArray.temp.match(point.categorie) || []).length;
      // console.log(count);
    })

  }
  const totalPoints = pointsCateg.reduce((total, point) => total + point.points, 0);
  
  return(
    <div className="defis_categ_container">
      {pointsCateg.map((point, i) => {
        return <Category key={i} categ={point.categorie} points={point.points + 'pts'}/>
      })}

      <div>
        <h3 onClick={addPoints}>Total des points accumulés</h3>
        <p className="total_points">{totalPoints}pts</p>
      </div>
    </div>
  )
}

export default Categories;