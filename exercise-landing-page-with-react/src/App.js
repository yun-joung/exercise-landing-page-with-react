import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Card from './Components/Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Jumbotron} from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:'1rem 2rem 1rem 2rem'}}>
        <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#memes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid ">
        <div className="row jumDiv" style={{marginBottom:'0'}}>
        <div className="col">
          <Jumbotron>
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto ea nostrum in reiciendis optio numquam a adipisci saepe fugit sequi qui officia, mollitia voluptatem assumenda accusantium vel nisi amet.
    </p>
            <p>
              <Button variant="primary">Call to action!</Button>
            </p>
          </Jumbotron>
          </div>
        </div>
      </div>

      <div className="container-fluid  ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col mt-4">
            <Card
            image = "https://picsum.photos/500/325?image=1011"/>
          </div>
          <div className="col mt-4">
            <Card 
            image = "https://picsum.photos/500/325?image=10"/>
          </div>
          <div className="col mt-4">
            <Card image = "https://picsum.photos/500/325?image=1000"/>
          </div>
          <div className="col mt-4">
            <Card image = "https://picsum.photos/500/325?image=1001" />
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row">
        <div className="col-12 center">
          <p className="text-center copy" >Copyright @ Website 2021</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;