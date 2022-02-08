import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./dashboard.css";
const image = require("../img/archives_raquarii.jpg");

const Dashboard = () => {
  return (
    <Container>
      <Row className="row">
        <Col>
          <header>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />
            <h1 className="m-4">NASA Open APIs Playground</h1>
          </header>
          <section>
            <p>
              This website was created as a resource for users who would like to
              explore everything NASA Open APIs has to offer. Throughout these
              pages, you will be able to retrieve data from various portals
              hosted through NASA's website and play around with the content.
            </p>
            <p>
              <em>NASA Open APIs Playground</em> is expected to be a continuous
              work in process as the author develops additional skills and
              streamlines and optimizes this site's performance. Expect frequent
              updates.
            </p>
            <p>Below is a quick explanation of what each page holds.</p>
          </section>
        </Col>
        <Col className="image">
          <Image className="img" src={`${image}`} />
        </Col>
      </Row>
      <Row>
        <section>
          <ul>
            <li>
              <a href="POD">
                <strong>Astronomy Picture of the Day</strong>
              </a>
              : The most popular API, APOD generates a new photo from the solar
              system daily with accompanying description.
            </li>
            <li>
              <a href="neows">
                <strong>Near Earth Web Object Service</strong>
              </a>
              : A website that allows users to search for Astroids based on
              their closest approach date to Earth, as well as look up Astroids
              based on NASA JPL small body ID and browse overal data pertaining
              to NeoWs.
            </li>
            <li>
              <strong>
                Space Weather Database Of Notifications, Knowledge, Information
              </strong>
              : A comprehensive on-line tool for space weather forecasters,
              scientists, and the general space science community.
              <em> Not available yet.</em>
            </li>
            <li>
              <strong>Earth</strong>: Landsat imagery.
              <em> Not available yet.</em>
            </li>
            <li>
              <strong>Earth Observatory Natural Event Tracker</strong>: Using
              client applications, such as NASA EOSDIS’ Worldview, users can
              browse the entire globe daily and look for natural events as they
              occur. Storms are regularly spotted in the tropics, dust storms
              over deserts, forest fires in the summers.
            </li>{" "}
            <em>Not available yet.</em>
            <li>
              <strong>Earth Polychromatic Imaging Camera</strong>: The EPIC API
              provides information on the daily imagery collected by DSCOVR's
              Earth Polychromatic Imaging Camera (EPIC) instrument.{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>Exoplanet Archive</strong>: The Exoplanet Archive API
              allows programatic access to NASA's Exoplanet Archive database.{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>GeneLab</strong>: Does stuff. <em>Not available yet.</em>
            </li>
            <li>
              <strong>Insight</strong>: NASA’s InSight Mars lander takes
              continuous weather measurements (temperature, wind, pressure) on
              the surface of Mars at Elysium Planitia, a flat, smooth plain near
              Mars’ equator. <em>Not available yet.</em>
            </li>
            <li>
              <a href="marsrover">
                <strong>Mars Rover Photos</strong>
              </a>
              : This API is designed to collect image data gathered by NASA's
              Curiosity, Opportunity, and Spirit rovers on Mars and make it more
              easily available to other developers, educators, and citizen
              scientists.
            </li>
            <li>
              <strong>NASA Image and Video Library</strong>: Provides access the
              NASA Image and Video Library site at images.nasa.gov{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>TechTransfer</strong> NASA's Technology Transfer Program
              ensures that innovations developed for exploration and discovery
              are broadly available to the public. <em>Not available yet.</em>
            </li>
            <li>
              <strong>Satellite Situation Center</strong>: The software and
              associated database of SSCWeb together form a system to cast
              geocentric spacecraft location information into a framework of
              (empirical) geophysical regions and mappings of spacecraft
              locations along lines of the Earth's magnetic field.{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>
                Solar System Dynamics and Center for Near-Earth Object Studies
              </strong>
              : Does stuff <em>Not available yet.</em>
            </li>
            <li>
              <strong>Techport</strong>: Resource for collecting and sharing
              information about NASA-funded technology development.{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>Two-Line Element Set</strong>: A list of orbital elements
              of an Earth-orbiting object for a given point in time.{" "}
              <em>Not available yet.</em>
            </li>
            <li>
              <strong>Web Map Tiles</strong>: Web-based portals for exploration{" "}
              <em>Not available yet.</em>
            </li>
          </ul>
        </section>
      </Row>
    </Container>
  );
};

export default Dashboard;
