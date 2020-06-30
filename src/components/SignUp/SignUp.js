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

  const formSignUp = () => {
    setSignup(true)
  }

  const formSignIn = () => {
    setSignup(false)
  }

  return (
    <div className='SignUp'>
      <div className='SignUp_part SignUp_part_1'>
        <img className='SignUp_logo_mobile' src={require('../../assets/logo-green.svg')} />
        <img className='SignUp_logo_desktop' src={require('../../assets/logo.svg')} />
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

            <button type="submit" >Continuer</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;