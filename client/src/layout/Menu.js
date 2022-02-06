import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/dashboard">NASA Open APIs Playground</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Earth"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">Earth</NavDropdown.Item>
              <NavDropdown.Item href="/neows">
                Near Earth Object Web Service (NeoWS)
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Earth Observatory Natural Event Tracker (EONET)
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Earth Polychromatic Imaging Camera (EPIC)
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Two-Line Element Set (TLE)
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Mars"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/marsrover">
                Mars Rover Photos
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                InSight: Mars Weather Service
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Web Map Tiles"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">Vesta</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Moon</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Mars</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Solar System"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">
                Space Weather Database Of Notifications, Knowledge, Information
                (DONKI)
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">GeneLab</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Satellite Situation Center (SSCWeb)
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="SSD and CNEOS"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">CAD</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">FireBall</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Mission Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">NHATS</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Scout</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Sentry</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Multimedia"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/pod">
                Astronomy Picture of the Day (APOD)
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                NASA Image and Video Library
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Nasa Technology"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">TechTransfer</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Techport</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">GeneLab</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Satellite Situation Center (SSCWeb)
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Misc"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/NotFound">
                About the Author
              </NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">
                Links to Other NASA Information
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/NotFound">
                Community Message Board
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
