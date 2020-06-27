import React, {useState} from 'react';

function SignUp(props) {
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
    <div>
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

        <button type="submit" >Suivant</button>
      </form>
    </div>
  );
}

export default SignUp;