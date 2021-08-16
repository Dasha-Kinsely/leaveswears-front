import SigninForm from "../components/SigninForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const SigninPage = () => {
  return (
    <Row className="justify-content-md-center">
      <Col sm={2} xs={1}></Col>
      <Col sm={8} xs={10}>
        <Card>
          <Card.Body className="text-center">Sign In</Card.Body>
          <SigninForm />
        </Card>
      </Col>
      <Col sm={2} xs={1}></Col>
    </Row>
  );
};

export default SigninPage;
