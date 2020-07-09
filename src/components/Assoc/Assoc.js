import React, { useState, useEffect } from "react";
import './assoc.scss'
const axios = require('axios');

function Assoc(props){

  const [assoc, setAssoc] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/associations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setAssoc(response.data["hydra:member"]);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return(
    <div className="assoc">
      <h1 className="page_title">Découvrez les associations</h1>
      <div className="assoc_container">
      {
        assoc.map((asso, i) => 
          <div key={i} className="assoc_bloc">
            <div className="circle"></div>
            <img src={asso.image} alt="association" className="assoc_image"/>

            <div className="assoc_info">
              <p>{asso.name}</p>
              <button>
                <a target="blank" href={asso.url}>Découvrir</a>
              </button>
            </div>
          </div>
        )
      }
      </div>
    </div>
  );
}

export default Assoc;