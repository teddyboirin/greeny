import React, {useState} from 'react';
import './signup.scss';
const axios = require('axios');

function SignUp() {

  const [signup , setSignup] = useState(true);

  const [registrate, setRegistrate] = useState({
    email: "",
    nom: "",
    prenom: "",
    password: "",
    points: "0",
    roles: ["1"],
  })

  const handleChange = (e) => {
    const {id , value} = e.target   
    setRegistrate(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const formSignUp = () => {
    setSignup(true)
  }

  const formSignIn = () => {
    setSignup(false)
  }

  const sendDetailsToServer = (e) => {
    e.preventDefault()
    if(registrate.nom.length && registrate.prenom.length && registrate.email.length && registrate.password.length ) {
        const userData ={
          "email": registrate.email,
          "password": registrate.password,
          "roles":registrate.roles,
          "points": registrate.points,
          "nom":registrate.nom,
          "prenom":registrate.prenom
        }
        //console.log(userData)
        axios.post('http://127.0.0.1:8000/api/users', userData)
        .then(function (response) {
          console.log(response);
          redirectToTest()
        })
        .catch(function (error) {
          console.log(error);
        })
      }
  }

  const redirectToTest = () => {
    window.location.assign('/test');
  }  

  return (
    <div className='SignUp'>
      <div className='SignUp_part SignUp_part_1'>
        <img className='SignUp_logo_mobile' src={require('../../assets/logo-green.svg')} alt="logo"/>
        <img className='SignUp_logo_desktop' src={require('../../assets/logo.svg')} alt="logo"/>
      </div>
      <div className='SignUp_part SignUp_part_2'>
        <div className='SignUp_top'>
          <div className={signup === true ? 'active' : ''} onClick={formSignUp}>
            Se connecter
          </div>
          <div className={signup === false ? 'active' : ''} onClick={formSignIn}>
            S'inscrire
          </div>
        </div>
        {signup === true ? (
          <form>
            <input 
              type="text" 
              id="nom" 
              placeholder="Nom" 
              value={registrate.nom} 
              onChange={handleChange}
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Mot de passe" 
              value={registrate.password} 
              onChange={handleChange}
            />
            <button type="submit">Continuer</button>
          </form >
        ) : (
          <form onSubmit={sendDetailsToServer}>
            <input 
              type="text" 
              id="nom" 
              placeholder="Nom" 
              value={registrate.nom} 
              onChange={handleChange}
            />
            <input 
              type="text" 
              id="prenom" 
              placeholder="Prenom" 
              value={registrate.prenom} 
              onChange={handleChange}
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={registrate.email} 
              onChange={handleChange}
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Mot de passe" 
              value={registrate.password} 
              onChange={handleChange}
            />

            <button type="submit" onClick={sendDetailsToServer}>Continuer</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;