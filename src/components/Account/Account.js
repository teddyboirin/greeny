import React, { useState, useEffect } from "react";
import './account.scss';
import Reccurent from "./Recurrent/Recurrent";
import Categories from "./Categories/Categories";
import InfoPerso from "./InfoPerso/InfoPerso";

const axios = require('axios');

function Account(props){
  const [toggle, setToggle] = useState({
    show: false,
    colorGreen: "#02C39A",
    colorWhite: "#fff"
  })

  const [file, setFile] = useState({
    image: null
  })

  const [users, setUser] = useState([]);

  function handleChange(event) {
    setFile({
      image: URL.createObjectURL(event.target.files[0])
    })
  }

  function handleToggle() {
    setToggle({ 
      show : !toggle.show,
      colorGreen : toggle.colorWhite,
      colorWhite : toggle.colorGreen
    })
  }

  const getUser = () => {

    const token = localStorage.getItem("token");
    axios.get('http://127.0.0.1:8000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setUser(response.data['hydra:member']);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getUser()
  }, [])
  console.log(users)

  return(
    <div className="account">
      <div className="title_account">
        {
          users.map(user => {
             return <h1 className="page_title" key={user.id}>Hello {user.prenom}</h1>
          })
        }
    
        <h3 className="page_subtitle">Un nouveau jour, un nouveau défi</h3>
      </div>

      <div className="account_inner_bloc">
        <div className="account_inner_right">
          <div className="account_tab" onClick={handleToggle}>
            <h3 onClick={()=> { setToggle(!toggle.show) }} style={{background : toggle.colorGreen, color : toggle.colorWhite}}>Votre évolution</h3>
            <h3 onClick={handleToggle} style={{background : toggle.colorWhite, color : toggle.colorGreen}}>Vos défis récurrents</h3>
          </div>

          { !toggle.show ? (
            <div>
              <Categories  />
            </div>
          ) : (
            <Reccurent />
          )}
        </div>

        <div className="bloc_info">
          <div className="avatar">
            <input type="file" accept=".jpg, .jpeg, .png" onChange={handleChange}/>
            <img src={file.image} alt=""/>
          </div>

          {
            users.map(user => {
              return  <InfoPerso key={user.id} prenom={user.prenom} nom={user.nom} email={user.email} />
            })
          }
        </div>

      </div>
    </div>
  );
}

export default Account;