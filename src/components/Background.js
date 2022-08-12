import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
export const Background = () => {
  return (
    <section className="background" id="background">
        <Container>
            <Row>
                <Col>
                    <h2>Experiences</h2>
                    <div class="timeline">
                        <div class="timeline-wrapper">
                             <div class="timeline-yr">
                                  <span>2022</span>
                             </div>
                             <div class="timeline-info">
                                    <h4><span>Software Dev Intern</span><small>Wizy.io</small></h4>
                                  <p>Worked with a team in designing and developing an admin console. Built the logic for a streamlined administrative processes. Deployed cloud functions. Presented a deployed application to a team of QAs and Software Engineers</p>
                             </div>
                        </div>
                        <div class="timeline-wrapper">
                             <div class="timeline-yr">
                                  <span>2021</span>
                             </div>
                             <div class="timeline-info">
                                <h4><span>Web Dev Intern</span><small>Lamina Studios, LLC</small></h4>
                                  <p>Conceptualized and co-developed an E-Commerce website that attempts to assist small business owners in scaling up their operations by allowing them to do transactions online. The system was built primarily using Django for the backend and React for the frontend.</p>
                             </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h2>Education</h2>
                    <div class="timeline">
                        <div class="timeline-wrapper">
                             <div class="timeline-yr">
                                  <span>2022</span>
                             </div>
                             <div class="timeline-info">
                                <h4><span>BS Computer Engineering</span><small>PUP - Manila</small></h4>
                                  <p>
                                    Consistent Dean Lister and President Lister
                                  </p>
                             </div>
                        </div>

                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2018</span>
                            </div>
                            <div class="timeline-info">
                                <h4><span>Senior High</span><small>APEC Schools</small></h4>
                                <p>
                                  Accountancy, Business, and Management Track |
                                  Excellence Awardee | Merit Awardee
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
