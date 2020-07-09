import React, { useState } from "react";
import './defidescription.scss'
const axios = require('axios');

function DefiDescription(props){

  const [checkDefi, setCheckDefi] = useState(false);
  const [users, setUser] = useState([]);

  const token = localStorage.getItem("token");
  axios.get(`http://127.0.0.1:8000/api/users/${localStorage.getItem("id")}`, {
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
  const setDefi = () => {
    const token = localStorage.getItem("token");
    axios.put(`http://127.0.0.1:8000/api/defis/${props.id}`, {
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

  return(
    <div>
      {checkDefi === false ? (
        <div className='DefiDescription'>
          <div className='DefiDescription_part DefiDescription_part_1'>
          <div>
            <h1>{props.name}</h1>
            <p>
              {props.text}
            </p>
          </div>
        </div>
        <div className='DefiDescription_part DefiDescription_part_2'>
          <h2>As-tu relevé le défi ?</h2>
          <button onClick={setDefi}>Je l'ai fait</button>
          <div>{props.points}pts</div>
        </div>
        </div>
      ) : (
        <div className='DefiChecked'>
          <img src={require('../../../assets/bravo.svg')} alt="bravo"/>
          <h1>BRAVO</h1>
          <h2>Tu as relevé le défi !</h2>
          <div className='DefiChecked_points'>
            {props.points}pts
            <span>+{props.points}</span>
            <span>+{props.points}</span>
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