import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./neowsCard.css";

const NeowsCard = (neowsInfo) => {
  let neo = [];
  let dates = [];
  let stuff;

  async function loadSite() {
    if (neowsInfo) {
      for (let [key, value] of Object.entries(neowsInfo)) {
        neo.push(value.near_earth_objects);
      }
      stuff = neo[0];
      await dates.push(Object.keys(stuff));
    }
  }
  loadSite();
  return (
    <>
      <Container>
        <Row className="row">
          <Col>
            <table>
              {(neowsInfo &&
                dates.map((date) => {
                  return date.map((i) => {
                    if (stuff[i]) {
                      return stuff[i].map((item) => {
                        let miles;
                        let bool;
                        let sentBool;
                        let time;
                        let relative;
                        let relativeVelocity;
                        let missDis;
                        let orbitingBody;

                        if (item.is_potentially_hazardous_asteroid) {
                          bool = "true";
                        } else if (!item.is_potentially_hazardous_asteroid) {
                          bool = "false";
                        }
                        if (item.is_sentry_object) {
                          sentBool = "true";
                        } else {
                          sentBool = "false";
                        }
                        for (let [key, value] of Object.entries(
                          item.close_approach_data
                        )) {
                          relativeVelocity = value;
                          orbitingBody = relativeVelocity.orbiting_body;
                          time = value.close_approach_date_full.split(" ")[1];
                          for (let [key, value] of Object.entries(
                            relativeVelocity.miss_distance
                          )) {
                            missDis = value;
                          }
                          for (let [key, value] of Object.entries(
                            relativeVelocity.relative_velocity
                          )) {
                            relative = value;
                          }
                        }
                        for (let [key, value] of Object.entries(
                          item.estimated_diameter
                        )) {
                          miles = value;
                        }
                        return (
                          <>
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <strong>Name</strong>: {item.name}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <table>
                                    <tr>
                                      <th>date</th>
                                      <th>id</th>
                                      <th>
                                        Near Earth Object Reference Number
                                      </th>
                                      <th>Absolute Magnitude</th>
                                      <th>
                                        Minimum Estimated Diameter (in feet)
                                      </th>
                                      <th>
                                        Maximum Estimated Diameter (in feet)
                                      </th>
                                      <th>Potentially Hazardous</th>
                                      <th>Sentry Objecy</th>
                                    </tr>
                                    <tr>
                                      <td>{i}</td>
                                      <td>{item.id}</td>
                                      <td>{item.neo_reference_id}</td>
                                      <td>{item.absolute_magnitude_h}</td>
                                      <td>{miles.estimated_diameter_min}</td>
                                      <td>{miles.estimated_diameter_max}</td>
                                      <td>{bool}</td>
                                      <td>{sentBool}</td>
                                    </tr>
                                  </table>
                                  <p>
                                    <strong>Close Approach Data</strong>
                                    <br />
                                    Time in Military at Closest Approach: {time}
                                    <br />
                                    Miss Distance in Miles: {missDis}
                                    <br />
                                    Relative Velocity (Kilometers/Seconds):{" "}
                                    {relative}
                                    <br />
                                    Orbiting Body: {orbitingBody}
                                  </p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </>
                        );
                      });
                    }
                  });
                })) || <p>Loading..</p>}
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NeowsCard;
