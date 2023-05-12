import '../css/page/home.css'
import {Container, Row, Col, Card} from 'react-bootstrap';


function Home() {
  return (
    
   <>
  
    <Container>
        <Row>
          <Col>
            <h2>Welcome to Registrar Dashboard</h2>
            <Card className="card-stats text-left">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col>
                    <div className="numbers">
                      <p className="card-category"></p>
                      <Card.Title as="h4"></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  
                </div>
              </Card.Footer>
              {/* <Card.Img>
                <img src="images/KINMATECH LOGO 2.png" alt="" />
              </Card.Img> */}
            </Card>
            </Col>
        </Row>
      </Container>
     
       </>
    
  );
}

export default Home;