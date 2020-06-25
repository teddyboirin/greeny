import React from "react";
import './account.scss';
import Category from "../Category/Category";

function Account(){
  return(
    <div className="account">
      <h1 className="page_title">Hello</h1>
      <h3>Un nouveau jour, un nouveau défi</h3>

      <Category categ='Alimentation'/>
      <Category categ='Energie'/>
      <Category categ='Déchets'/>
      <Category categ='Déplacements'/>
      <Category categ='Diy'/>
      <Category categ='Au travail'/>

    </div>
  );
}

export default Account;