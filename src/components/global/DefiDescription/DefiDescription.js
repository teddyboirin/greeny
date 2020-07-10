import React, { useState, useEffect } from "react";
import './defidescription.scss'
const axios = require('axios');

function DefiDescription(props){
  const [currentDefi, setCurrentDefi] = useState([])
  const [checkDefi, setCheckDefi] = useState(false);
  
  const setDefi = () => {
    const token = localStorage.getItem("token");
    axios.put(`https://greeny.samirchalal.fr/api/defis/${currentDefi.id}`, {
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
      setCheckDefi(true)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`https://greeny.samirchalal.fr/api/defis/${window.location.pathname.split("/")[2]}`, {
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
      {checkDefi === false ? (
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

        ) : (
        <div className='DefiChecked'>
          <img src={require('../../../assets/bravo.svg')} alt="bravo"/>
          <h1>BRAVO</h1>
          <h2>Tu as relevé le défi !</h2>
          <div className='DefiChecked_points'>
            {currentDefi.points}pts
            <span>+{currentDefi.points}</span>
            <span>+{currentDefi.points}</span>
          </div>
          <div className='DefiChecked_button' onClick={() => window.location.assign('/defis')}>
            <div className='DefiChecked_button_hover'>
              GO
            </div>
            Lance toi dans un nouveau défi
          </div>
        </div>
      )}
    </div>
    
  )
}

export default DefiDescription