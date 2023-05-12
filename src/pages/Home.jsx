// import Chart from '../components/Chart';
import '../css/page/home.css'
// import { userData } from "../dummyData";
import {Container, Row, Col, Card} from 'react-bootstrap';

function Home() {
  return (
    
    // <div className='home'>
    //  <Card.Title> Welcome to Registrar Dashboard </Card.Title>
    // <Card.Body> This dashboard makes sharing of documents possible among 
    //   different units in Registrar's Office</Card.Body> 
    
      
    // </div>
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
            </Card>
            </Col>
        </Row>
      </Container>
       </>
    
  );
}

export default Home;