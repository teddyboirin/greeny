import React from "react";
import './infoperso.scss';

function InfoPerso(props){
  return(
    <div className="info_perso">
      <h4>{props.prenom}</h4>
      <label htmlFor="nom">Nom</label>
      <p>{props.nom} {props.prenom}</p>

      <label htmlFor="email">Email</label>
      <p>{props.email}</p>
    </div>
  );
}

export default InfoPerso;