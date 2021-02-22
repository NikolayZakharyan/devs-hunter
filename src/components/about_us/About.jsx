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
          <h1>About Us</h1>
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

              <h2 style={{ textAlign: 'center', marginTop: "20px" }}>Our Team</h2>

        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="http://thesocialdynamic.co.za/wp-content/uploads/2013/03/image-alignment-150x150.jpg"
                alt="Nikolay"
                // style={{width:'100%'}}
              ></img>
              <div className="container">
                <h2>Nikolay Zakharyan</h2>
                <p className="title">Project Senior</p>
                <p>Some text that describes Nikolay</p>
                <p>nikolzakharyan@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="http://thesocialdynamic.co.za/wp-content/uploads/2013/03/image-alignment-150x150.jpg"
                alt="Zhoya"
                // style="width:100%"
              ></img>
              <div className="container">
                <h2>Zhoya Ghalumyan</h2>
                <p className="title">Project developer</p>
                <p>Some text that describes Zhoya.</p>
                <p>zhoya@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src="http://thesocialdynamic.co.za/wp-content/uploads/2013/03/image-alignment-150x150.jpg"
                alt="Liana"
                // style="width:100%"
              ></img>
              <div className="container">
                <h2>Liana Ilyichyova</h2>
                <p className="title">Project developer</p>
                <p>Some text that describes Liana.</p>
                <p>liana.ilyichyova@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
    float: left;
    width: 100%;
    margin-bottom: 50px;
    padding: 0 8px 0 -10px;
  }

  .row {
      padding: 0px 360px ;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 200px;
    height: 400px;
  }

  .about-section {
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

  .container::after,
  .row::after {
    content: '';
    clear: both;
    display: table;
  }

  .title {
    color: grey;
  }

  .button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .button:hover {
    background-color: #555;
  }


  @media(max-width: 576px){
    .column {
      width: 100%;
      display: block;
      padding: 0 8px 0 14%;
    }
    .row {
      padding: 0px 141px ;
  }
}

  @media(min-width: 576px) and (max-width: 768px){
    .column {
      width: 80%;
      display: block;
      padding: 0 8px 0 20%;
    }
    .row {
      padding: 0px 160px ;
  }
}


  @media(min-width: 768px)and (max-width: 992px){
    .column {
      width: 33.3%;
      display: block;
      padding: 0 8px 0 -10px;
    }
    .row {
      padding: 0px 150px ;
  }
}


  @media(min-width: 992px)and (max-width: 1200px){
    .column {
      width: 33.3%;
      display: block;
      padding: 0 10px 0 -10px;
    }
    .row {
      padding: 0px 250px ;
  }
}


  @media (min-width: 1200px){
    .column {
      width: 33.3%;
      display: block;
      padding: 0 8px 0 -10px;
    }
    .row {
      padding: 0px 360px ;
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
      <h2>Our Location</h2>
      <YMaps query={{ lang: 'en_RU' }}>
        <Map
        style={{ marginTop: "20px", width: "100%", 
              height: "300px", marginBottom: "50px" }}
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
