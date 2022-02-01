import React from "react";
import navbar from "../navbar/navbar";
// import { appendErrors } from "react-hook-form";
// import { NavLink } from "react-router-dom";


function NosServices() {
  
  return (
    
    <section className="section  border-top">

    <br/>
    
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="main-heading">NOS SERVICES</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center">
            <p>boonk</p>
            </div>
          </div>
        </div>
          <div className="col-md-6 ">
            <div className="card shadow h-100">
              <img
                src={"/images/repartition.jpg"}
                className="w-100 border-bottom"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="">REPARTITION</h5>
                <div class="underline mx-auto"></div>
                <p>
                Le répartiteur est un relais entre l’Opérateur Poste de Contrôle (OPC), les patrouilleurs et les remorqueurs. Il recueille en temps réel et de manière permanente toutes les informations venant soit de l’OPC, du patrouilleur ou du remorqueur. Ainsi il assure la coordination de façon efficace du traitement des événements ou les situations qui peuvent engendrer un danger ou une perturbation sur le tracé par les agents de viabilité – sécurité. Il a pour tâche aussi de consigner sur une main courante toutes les informations reçues.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 ">
            <div className="card shadow h-100">
              <img
                src={"/images/remorque.jpg"}
                className="w-100 img-fluid border-bottom"
                alt="..."
              />
              <div className="card-body text-center">
                <h5>REMORQUE</h5>
                <div class="underline mx-auto"></div>
                <p>Le remorquage porte sur les véhicules accidentés ou en panne ne pouvant plus repartir seuls constituant à tout instant un danger pour les usagers.</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 ">
            <div className="card shadow">
              <img
                src={"/images/viabilite.jpg"}
                className="w-100 img-fluid border-bottom"
                alt="..."
              />
              <div className="card-body text-center">
                <h6>Viabilité</h6>
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-md-8">
            <div className="card shadow h-200">
              <img
                src={"/images/Patrouille.jpg"}
                className="w-100 img-fluid  border-bottom"
                alt="..."
              />
              <div className="card-body text-center">
                <h5>PATROUILLE</h5>
                <div class="underline mx-auto"></div>
                <p>
                Le patrouilleur a pour mission d’effectuer des patrouilles, c’est-à-dire la surveillance du réseau autoroutier en vue de détecter le plus rapidement possible d’éventuellement anomalies de fonctionnement mais aussi de procéder à des interventions de sécurité sur événements.
                </p>
                <p>La mission du patrouilleur se résume ainsi:
                  <li>
                  Surveille un itinéaire et alerte si nécessaire
                  </li>
                  <li>
                  Fournit un ensemble de données qualitatives fiables
                  </li>
                  <li>
                  Permet la résolution immédiate de dysfonctionnements simples (ramassage si possible d’objets présents sur la chaussée, balisage d’obstacles…)
                  </li>
                  <li>
                  Elabore un premier diagnostic lors d’un évènement
                  </li>
                  <li>
                  Agit pour éviter le sur-accident
                  </li>
                  <li>
                  Valide, affine, complète les informations en provenance d’autres sources (répartiteur, OPC, usagers…)
                  </li>
                  <li>
                  Apporte une assistance à un usager (information, appel à un dépanneur)
                  </li>
                  <li>
                  Transmet au répartiteur les informations pertinentes, rend compte des comportements anormaux (des entreprises, dépanneurs, clients…)
                  </li>
                </p>
                  
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
}

export default NosServices;
