import React, {useState} from 'react';
import './signup.scss';
const axios = require('axios');

function SignUp() {

  const [signup , setSignup] = useState(true);

  const [registrate, setRegistrate] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: ""
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

  const sendDetailsToServer = () => {
    if(registrate.nom.length && registrate.prenom.length && registrate.email.length && registrate.password.length ) {
        const userData ={
            "nom": registrate.nom,
            "prenom": registrate.prenom,
            "email": registrate.email,
            "password": registrate.password
        }

        axios.post(`http://127.0.0.1:8000/api/users`, userData)
            .then((response) => {
              console.log(response.userData);
              redirectToTest()
            })
            .catch(function (error) {
                console.log(error);
            });    
    } else {
        console.log("rempli tous les champs")   
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
          </form>
        ) : (
          <form>
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