import React from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark, GeolocationControl } from "react-yandex-maps";
import { BorderAllRounded } from '@material-ui/icons';


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
                alt="Jane"
                // style={{width:'100%'}}
              ></img>
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
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
                alt="Mike"
                // style="width:100%"
              ></img>
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
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
                alt="John"
                // style="width:100%"
              ></img>
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
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
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`


  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  .row {
      padding: 100px 500px ;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
  }

  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
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

  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
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
              height: "400px", marginBottom: "50px" }}
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
