import React from "react";
import './onboarding.scss';

function OnBoarding(props){

    return(
        <div className='onBoarding'>

            <div className="onboarding_container">
                <div className="items">
                    <img src={require('../../assets/illu_eco.svg')} alt=""/>
                    <div className="container__text">
                        <h2>
                            Devenez éco résponsable
                        </h2>
                        <p>
                            En accomplissant des défis du quotididens
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={require('../../assets/illu_cat.svg')} alt=""/>
                    <div className="container__text">
                        <h2>
                            Choisissez une des catégories
                        </h2>
                        <p>
                            Afin de réaliser votre défi dans la catégorie de votre choix
                        </p>
                    </div>
                </div>
                <div className="items">
                    <img src={require('../../assets/illu_defis.svg')} alt=""/>
                    <div className="container__text">
                        <h2>
                            Choisissez un des défis
                        </h2>
                        <p>
                            Séléctionnez un défi et validez le afin de gagner des points et de diminuer votre empreinte carbone
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="button">
                <a href="/signup">Suivant</a>
            </div>
        </div>
    );
}

export default OnBoarding;
