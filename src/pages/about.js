import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
// import heroVideo from './HeroVideo.mp4';
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '95vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '66.4%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {/* <ReactPlayer */}
        {/* // url={heroVideo} */}
      {/* //   url={"images/SASTRANS 2.MOV"}
      //   playing="false"
      //   loop
      //   muted
      //   width="100%"
      //   height="100%"
      // /> */}
      <headers>

      </headers>
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          {/* <Typography variant="h4" component="h4" className={classes.title}>
            A propos de Sastrans
          </Typography> */}
          {/* <Button color="primary" variant="contained">
            Click Me
          </Button> */}
        </Box>
      </div>
      <div class="container">
        <div class="">
          <div class="col-md-12">
            <div class="section-header">
              <h3>A Propos de Nous</h3>
              <p>La réalisation des tronçons autoroutiers AIBD-MBOUR-THIES et THIES-TOUBA vient consolider la stratégie et la politique de développement économique et social du sénégal et plus particulièrement le secteur des insfrastructures de transport. La stratégie du plan sénégal émergent mise en oeuvre par l’Etat Sénégalais pour le désenclavement des régions et le développement des activités économiques se concrétise à travers l’autoroute ILA TOUBA.</p>
              <h3>Les Sections THIES-TOUBA  et AIBD-MBOUR-THIES</h3>
              <p>Long respectivement de 129 km et 42 km comprennent, outre les ouvrages de génie civil, l’ensemble des installations socio-collectives nécessaires telles que : les postes de péage, les aires de repos et de service, les centres d’entretien, les aires d’arrêt d’urgence, etc. Pour le fonctionnement et l’exploitation de l’infrastructure dans les meilleurs conditions de sécuité, de sûreté et de qualité de service pour les usagers le gouvrenement par le biais de l’AGEROUTE, maitre d’ouvrage, a retenu la société CHINA ROAD & BRIDGE CORPORATION (CRBC) pour la gestion et l’exploitation de ce tracé.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="single-service">
            <div class="service-bg service-bg-1">
              <h2>Base de THIES (THIES-TOUBA)</h2>
            </div>

            <div class="service-text">
              <div id="summary">
              <p class="collapse" id="collapseSummary" >THIES – TOUBA d’un linéaire de 129 km</p>
              {/* <a  className="btn-area" class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls='collapseSummary' ></a> */}
              {/* <i class="fa fa-long-arrow-right"></i> */}
            </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="single-service">
            <div class="service-bg service-bg-2">
              <h2>Base Kiréne (AIBD-MBOUR-THIES)</h2>
            </div>

            <div class="service-text">
            <div id="summary2">
              <p class="collapse-2" id="collapseSummary-2">AIBD – SINDIA – MBOUR d’un linéaire de 42 km</p>
              {/* <a  className="btn-area" class="collapsed-2" data-toggle="collapse" href="#collapseSummary-2" aria-expanded="false" aria-controls='collapseSummary-2'></a> */}
              {/* <i class="fa fa-long-arrow-right"></i> */}
            </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="single-service">
            <div class="service-bg service-bg-3">
              <h2>pont à Peage de Foundiougne</h2>
            </div>

            <div class="service-text">
            <div id="summary3">
              <p class="collapse-3" id="collapseSummary-3">pont à péage de FOUNDIOUGNE (longueur 1595m) </p>
              {/* <a className="btn-area" class="collapsed-3" data-toggle="collapse" href="#collapseSummary-3" aria-expanded="false" aria-controls='collapseSummary-3'></a> */}
              {/* <i class="fa fa-long-arrow-right"></i> */}
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br/>
      {/* <div class="content3">
            <h1>Web Design & <br /><span>Development</span> <br />Course</h1>
            <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
                 expedita atque eveniet <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
                <br /> a quae totam ipsa illum minus laudantium?</p>
      </div> */}
      
      <div class="about-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="about-image">
                        <img
                        src={"/images/cropped-Logo-SASTRANS.png"}
                        className="w-100"
                        alt="..."
                      />
                    </div> 
                </div>
                <div class="col-lg-8 col-md-12 about-title">
                    <h2 class="text-uppercase pt-5">
                        <span>Notre Vision</span>

                    </h2>
                    <div class="paragraph py-3 w-80">
                        <p class="para">
                        Nous avons la conviction que c’est uniquement lorsque la mobilité est sûre qu’elle peut être créatrice d’activité économique et de lien social. Nos actions et nos choix sont orientés, pour faire de votre mobilité une expérience plus sûre et plus durable.
                        </p>
                        <p class="para">
                        Votre sécurité, notre mission
                        </p>
                    </div>
                    {/* <button type="button" class="btn button primary-button text-uppercase">Download cv</button> */}
             </div>
         </div>
     </div>
 </div>
 <Footer/>
    </section>
    
  );
};

export default Hero;