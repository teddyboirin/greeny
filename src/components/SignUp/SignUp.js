import React, {useState} from 'react';
import './signup.scss';

function SignUp() {

  const [signup , setSignup] = useState(true);

  const [registrate, setRegistrate] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
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

  return (
    <div className='SignUp'>
      <div className='SignUp__part SignUp__part--1'>
        Greeny
      </div>
      <div className='SignUp__part SignUp__part--2'>
        <div className='SignUp__top'>
          <div>
            Se connecter
          </div>
          <div>
            S'inscrire
          </div>
        </div>
        {signup === true ? (
          <form>
            <input 
              type="text" 
              id="pseudo" 
              placeholder="Pseudo" 
              value={registrate.pseudo} 
              onChange={handleChange}
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Mot de passe" 
              value={registrate.password} 
              onChange={handleChange}
            />
            <button type="submit" >Se connecter</button>
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
              type="text" 
              id="pseudo" 
              placeholder="Pseudo" 
              value={registrate.pseudo} 
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

            <button type="submit" >S'inscrire</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;