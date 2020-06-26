import React from "react";
import './account.scss';
import Category from "../Category/Category";

function Account(){
  return(
    <div className="account">
      <h1 className="page_title">Hello</h1>
      <h3 className="page_subtitle">Un nouveau jour, un nouveau défi</h3>

      <div className="account_inner_bloc">

        <div className="account_inner_right">
          <div className="account_tab">
            <h3>Votre évolution</h3>
            <h3>Vos défis récurrents</h3>
          </div>

          <div className="defis_categ_container">
            <Category categ='Alimentation' points="40pts"/>
            <Category categ='Energie' points="20pts"/>
            <Category categ='Déchets' points="12pts"/>
            <Category categ='Déplacements' points="8pts"/>
            <Category categ='DIY' points="8pts"/>
            <Category categ='Au travail' points="15pts"/>
          </div>
          <h3>Total des points accumulés</h3>
        </div>

        <div className="bloc_info"></div>
      </div>
    </div>
  );
}

export default Account;