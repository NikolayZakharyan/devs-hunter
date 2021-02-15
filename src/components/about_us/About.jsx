import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <div>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Repellat porro in, quasi ad cum voluptatem non, commodi corrupti eaque facilis fuga harum debitis minus sint illo similique suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Repellat porro in, quasi ad cum voluptatem non, commodi corrupti eaque facilis fuga harum debitis minus sint illo similique suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Repellat porro in, quasi ad cum voluptatem non, commodi corrupti eaque facilis fuga harum debitis minus sint illo similique suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Repellat porro in, quasi ad cum voluptatem non, commodi corrupti eaque facilis fuga harum debitis minus sint illo similique suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Repellat porro in, qu</p>
        </div>

              <h2 style={{ textAlign: 'center' }}>Our Team</h2>

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
