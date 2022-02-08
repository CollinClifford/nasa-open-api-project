import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const image = require("../img/archives_raquarii.jpg");
const logo = require("../img/NASA_logo.svg");
const Dashboard = () => {
  return (
    <Container>
      <Row style={{ margin: "20px" }}>
        <Col>
          <header>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />
            <h1 className="m-4">NASA Open APIs Payground</h1>
          </header>
          <section>
            This website was created as a resource for users who would like to
            explore everything NASA Open APIs has to offer. Throughout these
            pages, you will be able to retrieve data from various portals hosted
            through NASA's website and play around with the content. Below is a
            quick explanation of what each page holds.
          </section>
          <br />
          <section>
            <ul>
              <li>
                <strong>Astronomy Picture of the Day</strong>: The most popular
                API, APOD generates a new photo from the solar system daily with
                accompanying description.
              </li>
              <li>
                <strong>Near Earth Web Object Service</strong>: A website that
                allows users to search for Astroids based on their closest
                approach date to Earth, as well as look up Astroids based on
                NASA JPL small body ID and browse overal data pertaining to
                NeoWs.
              </li>
              <li>
                <strong>
                  Space Weather Database Of Notifications, Knowledge,
                  Information
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
                browse the entire globe daily and look for natural events as
                they occur. Storms are regularly spotted in the tropics, dust
                storms over deserts, forest fires in the summers.
              </li>{" "}
              <em>Not available yet.</em>
              <li>
                <strong>Earth Polychromatic Imaging Camera</strong>: The EPIC
                API provides information on the daily imagery collected by
                DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.{" "}
                <em>Not available yet.</em>
              </li>
              <li>
                <strong>Exoplanet Archive</strong>: The Exoplanet Archive API
                allows programatic access to NASA's Exoplanet Archive database.{" "}
                <em>Not available yet.</em>
              </li>
              <li>
                <strong>GeneLab</strong>: Does stuff.{" "}
                <em>Not available yet.</em>
              </li>
              <li>
                <strong>Insight</strong>: NASA’s InSight Mars lander takes
                continuous weather measurements (temperature, wind, pressure) on
                the surface of Mars at Elysium Planitia, a flat, smooth plain
                near Mars’ equator. <em>Not available yet.</em>
              </li>
              <li>
                <strong>Mars Rover Photos</strong>: This API is designed to
                collect image data gathered by NASA's Curiosity, Opportunity,
                and Spirit rovers on Mars and make it more easily available to
                other developers, educators, and citizen scientists.
              </li>
              <li>
                <strong>NASA Image and Video Library</strong>: Provides access
                the NASA Image and Video Library site at images.nasa.gov{" "}
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
                <strong>Two-Line Element Set</strong>: A list of orbital
                elements of an Earth-orbiting object for a given point in time.{" "}
                <em>Not available yet.</em>
              </li>
              <li>
                <strong>Web Map Tiles</strong>: Web-based portals for
                exploration <em>Not available yet.</em>
              </li>
            </ul>
          </section>
        </Col>
        <Col>
          <Image
            src={`${image}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              // borderStyle: "solid",
              boxShadow: "5x 5px 5px"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
