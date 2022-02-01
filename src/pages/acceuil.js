import React from "react";
import { NavLink } from "react-router-dom";
// import { homeObjOne, blocDescription1, blocDescription2, blocDescription3, blocDescription4} from "./Data";
import Slider from "../slider/slider";
import Vmc from "../Vmc/Vmc";
// import HeroSection from "./about";
import Footer from "./footer";

function Accueil() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <HeroSection {...homeObjOne} /> */}
      <Slider />
      {/* Mot du Directeur  */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> MOTS DU DIRECTEUR</h3>
              <div className="underline mx-auto"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={"/images/bossImage.jpg"}
                alt="..."
                className="w-50 h-75"
              />
              <h4>Malick SOW </h4>
              <h5>Directeur Général </h5>
            </div>
            <div className="col-md-8 rounded bg-light shadow p-2">
              <h4 className="text-center">
                {" "}
                La mobilité, un nouveau mode de vie
              </h4>

              <p className="lead">
                « La mutation dans la notion de mobilité et l’innovation dans
                l’usage font du transport un véritable pilier sociétal. Bien
                au-delà de la seule idée de franchir une distance, la mobilité
                est de plus en plus comprise comme le moyen de créer des liens,
                des synergies et une source de développement. La vision d’une
                route refléte pour le voyageur, le travailleur, le citoyen
                nomade, un horizon de possibilités. La mobilité fait désormais
                partie du mode de vie standard de la société et de l’économie
                contemporaine. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision mission Valeur */}
      <Vmc />
      {/* <section class="container ourservices text-center">
      
        <h1> Service </h1>
        <p> nous vous presentons nos service par ici</p>
        
        <div class="row rowsetting">
          <div class="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
            <div class=" imgsetting d-block m-auto bg-success"> <i class="fa fa-car fa-4x text-white"></i>
              </div>
            <h2> Patrouille </h2> 
            <p>Ma mission est de sécuriser l’usage dans l’enceinte de l’autoroute.</p>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
            <div class=" imgsetting d-block m-auto bg-success"> <i class="fa fa-desktop fa-3x text-white"></i>
              </div>
            <h2> Repartition </h2> 
            <p>Ma mission est de vous localiser sur l’autoroute et de mobiliser les moyens nécessaires afin de vous porter assistance.</p>
          </div> */}
        
          {/* <div class="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto">
            <div class=" imgsetting d-block m-auto"> <i class="fa fa-road fa-4x"></i>
              </div>
            <h2> Viabilité </h2> 
            <p>Le patrouilleur a pour mission d’effectuer des patrouilles, c’est-à-dire la surveillance du réseau autoroutier en vue de détecter le plus rapidement possible d’éventuellement anomalies de fonctionnement mais aussi de procéder à des interventions de sécurité sur événements.</p>
          </div> */}

          {/* <div class="col-lg-3 col-md-3  col-sm-3 col-10 d-block m-auto">
            <div class=" imgsetting d-block m-auto bg-success"> <i class="fa fa-truck fa-5x text-white"></i>
              </div>
            <h2> Remorquage </h2> 
            <p>Ma mission est l’enlévement de tout véhicule pouvant entraver la circulation et constituer un danger pour les usagers de l’autoroute.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <NavLink className="nav-link" to="/service">
              <button className="btn btn-success  "> Voir Plus</button>
            </NavLink>
          </div>
        </div> */}
        
      {/* </section> */}
      
    <Footer/>
    </div>
  );
}

export default Accueil;
