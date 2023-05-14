import { Button } from '@mui/material';
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
                    <div className='pageleft'>
                      <p>This web app shares documents among all the units under
                      Registrar Office. Some of these documents include: Careers Documents, Admissions Documents,
                      Exams and Records e.tc.</p> <br/>
                                         </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
               <div>
                <Button className="btnstat"> Get Started </Button>              
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