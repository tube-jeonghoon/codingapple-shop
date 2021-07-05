/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Data from "./data";

function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="background">
        <h1>20% Season off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt="그림"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
              alt="그림"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
              alt="그림"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
