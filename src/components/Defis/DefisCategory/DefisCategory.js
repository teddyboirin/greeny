import React, { useState, useEffect, useParams } from "react";
import './defiscategory.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";
const axios = require('axios');

function DefisCategory(props){

  const [defis, setDefis] = useState([])

  const [defiClicked, setDefiClicked] = useState(false)

  const [chosenDefi, setChosenDefi] = useState({
    name: '',
    points: 0,
    text: ''
  })

  const onClick = (value) => {
    setDefiClicked(value.defiClicked)
    setChosenDefi({
      name: value.name,
      points: value.points,
      text: value.text,
      categorie: value.categorie
    })
  }

  useEffect(() => {
    getDefis()
  }, []);

  const getDefis = () => {
    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/defis?categorie=${window.location.pathname.split("/")[2]}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function (response) {
        setDefis(response.data['hydra:member'])
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  return(
    <div>
      {defiClicked === false ? (
        <div>
          <h1 className="page_title">Choisi ton défi du jour<br></br>Catégorie : {props.categ}</h1>
          <div className="defis_container">
            {defis.map((defi) => {
                return <Defi onClick={onClick} key={defi.id} defi={defi.name} points={defi.points} />
            })}
          </div>
        </div>
      ) : (
        defis.map((chosenDefi) => {
         return <DefiDescription key={chosenDefi.id} name={chosenDefi.name} points={chosenDefi.points} text={chosenDefi.text}/>
        })
      )}
    </div>
  )
}

export default DefisCategory