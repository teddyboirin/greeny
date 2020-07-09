import React, { useState, useEffect } from "react";
import './defidescription.scss'
const axios = require('axios');

function DefiDescription(props){
  const [currentDefi, setCurrentDefi] = useState([])
  const [users, setUser] = useState([]);
  // const [checkDefi, setCheckDefi] = useState(false);
  const setDefi = () => {
    const token = localStorage.getItem("token");
    axios.put(`http://127.0.0.1:8000/api/defis/${currentDefi.id}`, {
      "users": [
          "/api/users/" + localStorage.getItem("id")
      ]},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    })
    .then(function (response) {
      console.log(response.data)
      console.log('ok', props.id)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

 useEffect(() => {
    const token = localStorage.getItem("token");
  axios.get(`http://127.0.0.1:8000/api/defis/${window.location.pathname.split("/")[2]}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then(function (response) {
    console.log(response.data)
    setCurrentDefi(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
 }, [])


  return(
    <div>

        <div className='DefiDescription'>
          <div className='DefiDescription_part DefiDescription_part_1'>
          <div>
            <h1>{currentDefi.name}</h1>
            <p>
              {currentDefi.text}
            </p>
          </div>
        </div>
        <div className='DefiDescription_part DefiDescription_part_2'>
          <h2>As-tu relevé le défi ?</h2>
          <button onClick={setDefi}>Je l'ai fait</button>
          <div>{currentDefi.points}pts</div>
        </div>
        </div>
    </div>
  )
}

export default DefiDescription