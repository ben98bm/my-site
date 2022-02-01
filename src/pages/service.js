import React from "react";
import { Link, NavLink } from "react-router-dom";
import NosServices from "../NosServices/NosServices";
import Footer from "./footer";
// import Slider from "../components/slider/Slider";
// import Vmc from "../NosServices/NosServices";
// import { TableListContext } from "../context/TableListContext";
//  import src from "/images/heroImage.svg";

function Accueil() {
  // let history = useHistory();

//   const { setLogging } = useContext(TableListContext);

//   useEffect(() => {
//     console.log("dans Accueil");
//     setLogging(false);
//   }, []);
  return (
  <div>
       {/* <<Slider /> */}
      {/* Services */}
      <section id="section-1">
     
      </section>
      
        <header id="service">
            
            {/* <button >Parcourir</button> */}
        </header>

        <section class="project-area">
            <div class="container">
                <div class="project-title pb-5">
                    <h1 class=" title-h1">Nos Services</h1>
                    <div className="underline mx-auto"></div>
                    {/* <h1 class="text-uppercase title-h1">Quality Work</h1> */}
                </div>

                {/* <div class="button-group">
                    <button type="button" class="active" id="btn1" data-filter="*">All</button>
                    <button type="button" data-filter=".popular">Popular</button>
                    <button type="button" data-filter=".latest">Latest</button>
                    <button type="button" data-filter=".following">Following</button>
                    <button type="button" data-filter=".upcoming">Upcoming</button>
                </div> */}

                <div class="row grid">
                {/* <h1>Nos Services</h1> */}
            <h5>Elle consiste en des opérations générales de gestion, d’entretien et de la viabilité-sécurité des tronçons autoroutiers. Ainsi, CRBC a confié la gestion de viabilité et la sécurité des deux tronçons autoroutiers est confiée à MSA, une société de droit sénégalais. Cette dernière, confére à la société d’Assistance et de Gestion de Transport et de Stationnement (SASTRANS) l’exécution de la mission par le biais d’un contrat de sous-traitance.</h5>
                <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" href= "<NosServices/>" >
                                    <img src="images/patimg.jpg" alt="portfolio-1" class="img-fluid" />
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">PATROUILLE</h4>
                                <span class="text-secondary">Ma mission est de sécuriser l’usage dans l’enceinte de l’autoroute.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                                    <img src="images/remorque.jpg" alt="portfolio-1" class="img-fluid" />
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">REMORQUAGE</h4>
                                <span class="text-secondary">Ma mission est de vous localiser sur l’autoroute et de mobiliser les moyens nécessaires afin de vous porter assistance</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                                    <img src="images/repartition.jpg" alt="portfolio-1" class="img-fluid" />
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">REPARTITION</h4>
                                <span class="text-secondary">Ma mission est l’enlévement de tout véhicule pouvant entraver la circulation et constituer un danger pour les usagers de l’autoroute.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <div class="main" id="produits">

            <div class="content">
                {/* <div class="card">
                    <div class="left">
                        <h1>Nos valeurs</h1>
                        <p>Mangez sainement mais délicieusement. Nos clients sont rois, nos clients sont nos patrons.</p>
                    </div>
                    <div class="right">
                        <img src="https://i.ibb.co/WWnjDdG/burger1.jpg" alt="" />
                    </div>
                </div> */}

                {/* <div class="card">
                    <div class="left">
                        <h1>Nos recettes</h1>
                        <p>Nous mettons à votre disposition les recettes de nos burgers les plus délicieux ! </p>
                    </div>
                    <div class="right">
                        <img src="https://i.ibb.co/LS2T9sD/burger2.jpg" alt="" />
                    </div>
                </div> */}
            </div>
        </div>
        <section id="courses">
          <div class="container course-row">
              <div class="course-left-col">
                  <h1>patrouille</h1>
                  <div class="underline mx-auto"></div>
                  {/* <span class="line-3"></span> */}
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
                {/* <div class="line">
                    <span class="line-1"></span><br/>
                    <span class="line-2"></span><br/>
                    <span class="line-3"></span>
                </div> */}
              </div>
              <div class="shadow course-right-col">
                  <img src="images/Patrouille.jpg" />
              </div>
          </div>
        </section>
        
        <section id="remorquage">
          <div class="container remorquage-row">
              <div class="remorquage-left-col">
                  <img src="images/remorque.jpg" />
              </div>
              <div class="remorquage-right-col">
                  <h1>Remorquage</h1>
                  <div class="underline mx-auto"></div>
                <p>Le remorquage porte sur les véhicules accidentés ou en panne ne pouvant plus repartir seuls constituant à tout instant un danger pour les usagers.</p>   
              </div>
          </div>
        </section>
        
        <section id="repartition">
          <div class="container repartition-row">
              <div class="repartition-right-col">
                  <h1>Repartition</h1>
                  <div class="underline mx-auto"></div>
                <p>Le répartiteur est un relais entre l’Opérateur Poste de Contrôle (OPC), les patrouilleurs et les remorqueurs. Il recueille en temps réel et de manière permanente toutes les informations venant soit de l’OPC, du patrouilleur ou du remorqueur. Ainsi il assure la coordination de façon efficace du traitement des événements ou les situations qui peuvent engendrer un danger ou une perturbation sur le tracé par les agents de viabilité – sécurité. Il a pour tâche aussi de consigner sur une main courante toutes les informations reçues.</p>   
              </div>
              <div class="shadow repartition-left-col">
                  <img src="images/repartition.jpg" />
              </div>
          </div>
        </section>
      {/* <NosServices /> */}
      <Footer />
  </div>
  );
}

export default Accueil;
