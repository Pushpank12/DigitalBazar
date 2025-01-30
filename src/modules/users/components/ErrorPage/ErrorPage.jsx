import { useRouteError } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function ErrorPage() {
  
  
    return (
      <div>
      <Container fluid>
      <Row className="p-5">
        <Col>
        <Card>
      <Card.Header className="fw-bold fs-5 p-3" >404</Card.Header>
      <Card.Body>
        <Card.Title>Something is not right...</Card.Title>
        <Card.Text>
        Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.
        </Card.Text>
        <Button variant="primary" href="/">Get back to Home page</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
      </div>
    );
  
  
}