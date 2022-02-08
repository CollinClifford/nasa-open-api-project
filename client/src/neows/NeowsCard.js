import { Container, Row, Col, Accordion } from "react-bootstrap";

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
        <Row style={{ margin: "20px" }}>
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
                                  <table
                                    style={{
                                      border: "1px solid black",
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <tr
                                      style={{
                                        border: "1px solid black",
                                        backgroundColor: "lightblue",
                                      }}
                                    >
                                      <th style={{ border: "1px solid black" }}>
                                        date
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        id
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Near Earth Object Reference Number
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Absolute Magnitude
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Minimum Estimated Diameter (in feet)
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Maximum Estimated Diameter (in feet)
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Potentially Hazardous
                                      </th>
                                      <th style={{ border: "1px solid black" }}>
                                        Sentry Objecy
                                      </th>
                                    </tr>
                                    <tr style={{ border: "1px solid black" }}>
                                      <td style={{ border: "1px solid black" }}>
                                        {i}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {item.id}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {item.neo_reference_id}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {item.absolute_magnitude_h}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {miles.estimated_diameter_min}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {miles.estimated_diameter_max}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {bool}
                                      </td>
                                      <td style={{ border: "1px solid black" }}>
                                        {sentBool}
                                      </td>
                                    </tr>
                                  </table>
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
