import React, {useState} from 'react';

function SignUp() {
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
      <div className='SignUp__part'>
        Greeny
      </div>
      <div className='SignUp__part'>
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
      </div>
    </div>
  );
}

export default SignUp;