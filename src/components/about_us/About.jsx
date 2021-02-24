import React from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark, GeolocationControl } from "react-yandex-maps";
import { BorderAllRounded } from '@material-ui/icons';
import Footer from '../footer/footer'


const About = () => {
  return (
    <Wrapper>
      <div>
        <div className="about-section">
          <h1 className="big-title">About Us</h1>
          <p style={{ fontSize: '14px' }}> Finding a skilled developer that would boost your project is similar to chasing a dream. <br/>
           The race is long, the forest is dark and there is a hunter hiding behind every tree.<br/>
           With the entire world screaming about the huge gap between the number of developers and the number of vacancies, 
           one can easily find programmers, the another one  should have to run an extra mile with the recruitment process.<br/>
           Are you a human, who is ready to achive his goal of becoming programmer or broadend your perception of programming? <br/>
           Here's one more way to find your dream developer, who will help you to achieve the job that fits you perfectly.<br/>
           If you are a recruiter, DevsHunter will help you to find the right people for the jobs, to match candidates to the job they are born for.<br/>
           DevsHunter is a platform which can help you to find all the information that will best describe the person's 
           knowledge, work experience, feedbacks and completed projects.<br/>
           Good luck and enjoy DevsHunter  :)<br/>
           Best regards DevsHunter team.
           </p>
        </div>
            <h1 className="big-title" >Our Team</h1>
        <div className="row">
          
          <div className="column">
            <div className="card">
              <img
                src="https://avatars.githubusercontent.com/u/75744803?s=400&v=4"
                alt="Zhoya"
              ></img>
              <div className="container">
                <h2>Zhoya Ghalumyan</h2>
                <p className="title">Project developer</p>
                <p className="describe-text">Some text that describes Zhoya(two lines).</p>
                <p>zoya.ghalumyan01@gmail.com</p>
                <div className="sm-contacts">
                <a  href="https://github.com/zoyagh">
                  <i className="fa fa-github"></i>
                </a>
                <a  href="https://www.facebook.com/profile.php?id=100008008067272">
                  <i className="fa fa-facebook"></i>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="https://avatars.githubusercontent.com/u/56400967?s=400&v=4"
                alt="Nikolay"
              ></img>
              <div className="container">
                <h2>Nikolay Zakharyan</h2>
                <p className="title">Project Senior</p>
                <p className="describe-text">Some text that describes Nikolay(two lines)</p>
                <p>nikolzakharyan@gmail.com</p>
                <div className="sm-contacts">
                <a  href="https://github.com/NikolayZakharyan">
                  <i className="fa fa-github"></i>
                </a>
                <a  href="https://www.facebook.com/nikolzakharyan">
                  <i className="fa fa-facebook"></i>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="https://avatars.githubusercontent.com/u/75839537?s=400&u=9b9e2858510ac3e9a1c0bb1e1670c58f487c9c11&v=4"
                alt="Liana"
              ></img>
              <div className="container">
                <h2>Liana Ilyichyova</h2>
                <p className="title">Project developer</p>
                <p className="describe-text">Lover trying new things, creating and introducing new ideas.</p>
                <p>liana.ilyichyova@gmail.com</p>
                <div className="sm-contacts">
                <a  href="https://github.com/LianaIlyichyova">
                  <i className="fa fa-github"></i>
                </a>
                <a  href="https://www.facebook.com/liana.kanakaryan">
                  <i className="fa fa-facebook"></i>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <h1 className="big-title">Our Location</h1>
        <CustomMap/>
      </div>
      <div>
        <Footer/>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`


  // *,
  // *:before,
  // *:after {
  //   box-sizing: inherit;
  // }

  .column {
    margin-bottom: 50px;
  }

  .row{
    width: 53%;
    margin-left: 24.2%;
    font-style: normal; 
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-top: 15px;
    width: 217px;
    height: 390px;
    boder-color: #546e7a;
    font-style: normal;
  }

  .about-section {
    margin-top: -59px;
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
    margin-bottom: 50px;
    width: 100%;
  }


  .container {
    padding: 0 16px;
  }

  .container>p{
    font-style: normal;
  }

  h2{
    margin-top: 12px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  .title {
    color: grey;
    font-size: 15px;
  }

  .describe-text{
    font-style: italic;
    font-size: 12px;
    margin-top: -2px;
  }

  .sm-contacts{
    font-size: 22px;
    color: #546e7a;
    margin-left: -15px;
    margin-top: -5px;

  }

  img{
    width: 60%;
    border-radius: 50%;
    margin-left: 20%;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
  }

  .big-title{
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 3px;
  }


  @media(max-width: 576px){
    .column {
      width: 100%;
    }
}

  @media(min-width: 576px) and (max-width: 768px){
    .column {
      width: 100%;
    }
}


  @media(min-width: 768px)and (max-width: 992px){
    .column {
      width: 55%;
      margin-left: 22%;
    }
}


  @media(min-width: 992px)and (max-width: 1200px){
    .column {
      width: 40%;
      margin-left: 35px;
    }
  }


  @media (min-width: 1200px){
    .column {
      width: 33.3%;
      margin-left: 0px;
    }
}
`;



const mapState = {
  center: [40.198510, 44.490089],
  zoom: 8
};

function CustomMap() {
  return (
    <div className="map">
      <YMaps query={{ lang: 'en_RU' }}>
        <Map
        style={{ marginTop: "20px", width: "100%", 
              height: "380px", marginBottom: "0px"}}
          defaultState={mapState}
          instanceRef={ref => {
            if (ref) {
              ref.events.add("click", e => {
                ref.balloon.close();
              });
            }
          }}
        >
          <GeolocationControl />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            geometry={[40.198510, 44.490089]}
            properties={{
              balloonContent: "<strong>ACA</strong> </br>3 Hakob Hakobyan, Yerevan, Armenia"
            }}
          />
        </Map>
      </YMaps>
      </div>
  );
}
