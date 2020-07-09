import React, {useState} from 'react';
import './signup.scss';
const axios = require('axios');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
function SignUp() {

  const [signup , setSignup] = useState(true);

  const [registrate, setRegistrate] = useState({
    email: "",
    nom: "",
    prenom: "",
    password: "",
    points: 0,
    roles: ["1"],
    niveau: "facile"
  })

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  

  const handleChange = (e) => {
    const {id , value} = e.target   
    setRegistrate(prevState => ({
        ...prevState,
        [id] : value
    }))

    setLogin(prevState => ({
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
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(registrate.password, salt, function(err, hash) {
            let hashN = hash;
            const userData ={
              "email": registrate.email,
              "password": hashN,
              "roles":registrate.roles,
              "points": registrate.points,
              "nom": registrate.nom,
              "prenom":registrate.prenom,
              "niveau": registrate.niveau
            }
            //console.log(userData)
            axios.post('https://greeny.samirchalal.fr/api/users', userData)
            .then(function (response) {
              console.log(response);
              redirectToTest()
            })
            .catch(function (error) {
              console.log(error);
            })
        });
    });
    } else {
      alert("Rempli tous les champs")
    }
  }

  const sendLoginToServer = (e) => {
    e.preventDefault()
    if(login.email.length && login.password.length ) {
      const loginData ={
        "password": login.password,
        "username": login.email
      }
      
      axios.post('https://greeny.samirchalal.fr/api/login_check', loginData)
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        //redirectToDefis()
        const token = localStorage.getItem("token");
        axios.get(`https://greeny.samirchalal.fr/api/users?email=${login.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          } 
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem('niveau', response.data['hydra:member'][0].niveau);
          localStorage.setItem('email', response.data['hydra:member'][0].email);
          localStorage.setItem('id', response.data['hydra:member'][0].id);
          redirectToDefis()
        })
        .catch(function (error) {
          console.log(error);
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    } else {
      alert("Rempli tous les champs")
    }
  }

  const redirectToTest = () => {
    window.location.assign('/test');
  }  

  const redirectToDefis = () => {
    window.location.assign('/defis');
  }  

  return (
    <div className='SignUp'>
      <div className='SignUp_part SignUp_part_1'>
        <img className='SignUp_logo_desktop' src={require('../../../assets/logo.svg')} alt="logo"/>
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
          <form onSubmit={sendLoginToServer}>
            <label htmlFor="Email"></label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={login.email} 
              onChange={handleChange}
            />

            <label htmlFor="password"></label>
            <input 
              type="password" 
              id="password" 
              placeholder="Mot de passe" 
              value={login.password} 
              onChange={handleChange}
            />
            <button type="submit" onClick={sendLoginToServer}>Continuer</button>
          </form >
        ) : (

          <form onSubmit={sendDetailsToServer}>
            <label htmlFor="nom"></label>
            <input 
              type="text" 
              id="nom" 
              placeholder="Nom" 
              value={registrate.nom} 
              onChange={handleChange}
            />

            <label htmlFor="prenom"></label>
            <input 
              type="text" 
              id="prenom" 
              placeholder="Prenom" 
              value={registrate.prenom} 
              onChange={handleChange}
            />

            <label htmlFor="email"></label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={registrate.email} 
              onChange={handleChange}
            />

            <label htmlFor="password"></label>
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