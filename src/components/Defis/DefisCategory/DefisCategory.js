import React, { useState, useEffect } from "react";
import './defiscategory.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";
const axios = require('axios');

function DefisCategory(props){

  const [defis, setDefis] = useState([])

  const [defiClicked, setDefiClicked] = useState(false)
  
  const [users, setUser] = useState([]);

  const onClick = (value) => {
    setDefiClicked(value.defiClicked)
  }

   useEffect(() => {
    getDefis()
    getUser()
  }, []);


  const getDefis = () => {
    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/defis?categorie=${window.location.pathname.split("/")[2]}&niveau=${localStorage.getItem("niveau")}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function (response) {
        setDefis(response.data['hydra:member'])
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const getUser = () => {

    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/users/${localStorage.getItem("id")}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setUser(response.data);

    })
    .catch(function (error) {
      console.log(error);
    })
  }

 
  return(
    <div>
    
        <div>
          <h1 className="page_title">Choisi ton défi du jour</h1>
          <div className="defis_container">
            {defis.map((defi, i) => {
              return users.niveau === defi.niveau ? 
              <a href={"/item/" + defi.id} key={i}><Defi  key={defi.id} defi={defi.name} points={defi.points} id={defi.id} categ={defi.categorie}/></a>
              : ""
            })}
          </div>
        </div>
     
    </div>
  )
}

export default DefisCategory