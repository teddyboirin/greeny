import React, { useState } from "react";
import './account.scss';
import Category from "../Category/Category";
import Defi from "../global/Defi";

function Account(props){
  const [toggle, setToggle] = useState({
    show: false,
    colorGreen: "#02C39A",
    colorWhite: "#fff"
  })

  const [file, setFile] = useState({
    image: null
  })

  function handleChange(event) {
    setFile({
      image: URL.createObjectURL(event.target.files[0])
    })
  }

  function handleToggle() {
    setToggle({ 
      show : !toggle.show,
      colorGreen : toggle.colorWhite,
      colorWhite : toggle.colorGreen
    })
  }

  return(
    <div className="account">
      <div className="title_account">
        <h1 className="page_title">Hello</h1>
        <h3 className="page_subtitle">Un nouveau jour, un nouveau défi</h3>
      </div>

      <div className="account_inner_bloc">
        <div className="account_inner_right">
          <div className="account_tab" onClick={handleToggle}>
            <h3 onClick={()=> { setToggle(!toggle.show) }} style={{background : toggle.colorGreen, color : toggle.colorWhite}}>Votre évolution</h3>
            <h3 onClick={handleToggle} style={{background : toggle.colorWhite, color : toggle.colorGreen}}>Vos défis récurrents</h3>
          </div>

          { !toggle.show ? (
            <div>
              <div className="defis_categ_container">
                <Category categ='Alimentation' points="40pts"/>
                <Category categ='Energie' points="20pts"/>
                <Category categ='Déchets' points="12pts"/>
                <Category categ='Déplacements' points="8pts"/>
                <Category categ='DIY' points="8pts"/>
                <Category categ='Au travail' points="15pts"/>
              </div>
              <h3>Total des points accumulés</h3>
              <p></p>
            </div>
          ) : (

            <div className="recurrence">
              <Defi points='5' defi='Consommer des oeufs de poule élevé en plein air'/>
              <Defi points='15' defi='Consommer au maximum des produits frais' />
              <Defi points='10' defi='Acheter un calendrier des fruits et légumes de saison' />
              <Defi points='8' defi='Éviter au maximum les plats préparés industriels' />
              <Defi points='20' defi='Prioriser les aliments encore consommables' />
              <Defi points='10' defi='Faire l’inventaire de ses placards avant de faire les courses' />
            </div>
          )}
        </div>

        <div className="bloc_info">
          <div className="avatar">
            <input type="file" accept=".jpg, .jpeg, .png" onChange={handleChange}/>
            <img src={file.image} alt=""/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Account;