import React, { useState, useEffect } from "react";
const axios = require('axios');
function Assoc(props){

  const [assoc, setAssoc] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`http://127.0.0.1:8000/api/associations`, {
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

      {
        assoc.map((asso, i) => 
          <div key={i}>
            <img src={asso.image}/>

            <div>
              <p>{asso.name}</p>
              <button>
                <a target="blank" href={asso.url}>Découvrir</a>
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Assoc;