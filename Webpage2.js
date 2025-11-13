import React from "react";
import { Container, Nav, Navbar, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaNode,FaReact,FaAngular,FaDatabase} from "react-icons/fa";
import { SiExpress,SiReactbootstrap  } from "react-icons/si";

import {FaTwitter,FaInstagram,FaPinterest } from "react-icons/fa";


function Webpage2() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">STEVEN BELL</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">e-Books</Nav.Link>
              <Nav.Link href="#">Courses</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{
        background: "linear-gradient(rgba(217, 217, 231, 0.7), rgba(0,0,100,0.7)) ",
        backgroundSize: "cover",
        color: "white",
        padding: "100px 0"
      }}>
        <Container>
          <h1 className="mb-4">Let Me Help You<br />Overshoot Your Goals in the Right Ways.</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="light" className="me-3">Start Now</Button>
          <Button variant="primary">Read More</Button>
        </Container>
      </div>
      
        <Container className="text-center my-5">
        <h5>As Featured In:</h5>
        <div className="row">
         <div style={{display:"flex",justifyContent:"center",fontSize:"40px",gap:"60px"}}>
          <FaNode /> <div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"405px"}}>Node.js</div>
         <FaReact/><div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"505px" }}>React.js</div>
          <FaAngular /><div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"600px" }}>Angular.js</div>
          <FaDatabase /><div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"696px" }}>Database</div>
          <SiExpress /><div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"800px" }}>Express.js</div>
          <SiReactbootstrap/><div style={{ marginTop: "5px", fontSize: "14px",position:"absolute", top:"580px",left:"900px" }}>React-Bootstrap</div>
         </div>
        </div>
      </Container>

      <Container className="my-5">
        <h2 className="d-flex justify-content-center">What I Do</h2>
        <p className="text-muted mb-4 d-flex justify-content-center">
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.
        </p>
        <Row>
          {[
            { title: "I Coach.", text: "Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore magna aliqua." },
            { title: "I Speak.", text: "Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore magna aliqua." },
            { title: "I Write.", text: "Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore magna aliqua." }
          ].map((item, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <div className="p-4 text-white" style={{ backgroundColor: "blue",height:"300px"}}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Button variant="outline-light">Read More</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
       <div className="min-h-screen bg-white flex flex-col">
     

      <div className="flex flex-col lg:flex-row items-center justify-center p-8 gap-4">
        <div className="w-full lg:w-1/2">
          <img
            src="soap"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-blue-600 text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-black font-bold mb-4">
            Space To Make Your <br /> Greatest Impact.
          </h2>
          <p className="mb-6 text-black">
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made.
          </p>
          <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md border border-white hover:bg-blue-700 hover:text-white transition duration-300 ">
            Get Your Place →
          </button>
        </div>
        
        
         <footer className="footer bg-black text-white pt-5 pb-3 ">
      <div className="container mt-29">
        <div className="row text-center text-md-start">

          
          <div className="col-12 col-md-4 mb-4">
            <h3 className="fw-bold text-uppercase">About</h3>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,<br />
              convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum<br />
              id orci porta dapibus. Sed porttitor lectus nibh.
            </p>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <h3 className="fw-bold text-uppercase">Social</h3>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <FaTwitter className="bg-white text-dark p-2 rounded" size={32} />
              <FaInstagram className="bg-white text-dark p-2 rounded" size={32} />
              <FaPinterest className="bg-white text-dark p-2 rounded" size={32} />
            </div>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <h3 className="fw-bold text-uppercase">Contact Us</h3>
            <p>
              500 Terry Francois St.<br />
              San Francisco,<br />
              CA 94158<br />
              +1-410-555-0134<br />
              info@example.com<br />
              contact@example.com
            </p>
          </div>

        </div>

        
        <div className="text-center mt-4 border-top pt-3">
          <small>Copyright © 2025 Comtrance | Powered by Comtrance</small>
        </div>
      </div>
    </footer>  
           
        

        
      </div>
    </div>
    </>
  );
}

export default Webpage2;