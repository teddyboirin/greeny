import React, { useState, useEffect } from "react";
import './defiscategory.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";
const axios = require('axios');

function DefisCategory(props){

  const [defis, setDefis] = useState([])

  const [defiClicked, setDefiClicked] = useState(false)

  const [chosenDefi, setChosenDefi] = useState({
    name: '',
    points: 0
  })

  const onClick = (value) => {
    setDefiClicked(value.defiClicked)
    setChosenDefi({
      name: value.name,
      points: value.points
    })
  }

  const token = localStorage.getItem("token");
  console.log(token)
  axios.get('http://127.0.0.1:8000/api/defis', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setDefis(response.data['hydra:member'])
    })
    .catch(function (error) {
      console.log(error);
    })

  // const getDefis = () => {
  //   axios.get('http://127.0.0.1:8000/api/defis', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   })
  //   .then(function (response) {
  //     setDefis(response.data['hydra:member'])
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }
  

  // useEffect(() => {
  //     getDefis()
  //   }, [defis]
  // );

  return(
    <div>
      {defiClicked === false ? (
        <div>
          <h1 className="page_title">Choisi ton défi du jour<br></br>Catégorie : {props.categ}</h1>
          <div className="defis_container">
            {defis.map((defi) => {
              return <Defi onClick={onClick} key={defi.id} defi={defi.name} points={defi.points}/>
            })}
          </div>
        </div>
      ) : (
        <DefiDescription name={chosenDefi.name} points={chosenDefi.points} />
      )}
    </div>
  )
}

export default DefisCategory