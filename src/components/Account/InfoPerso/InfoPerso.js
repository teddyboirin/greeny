import React from "react";
import './infoperso.scss';

function InfoPerso(props){
  return(
    <div className="info_perso">
      <h4>{props.prenom}</h4>
      
      <label htmlFor="nom">Nom</label>
      <p>{props.nom}</p>

      <div>
        <label htmlFor="prenom">Prenom</label>
        <p>{props.prenom}</p>
      </div>

      <label htmlFor="email">Email</label>
      <p>{props.email}</p>
    </div>
  );
}

export default InfoPerso;