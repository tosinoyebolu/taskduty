import { Container, Form } from "react-bootstrap";

export default function Login() {
  return (
    <Container fluid="xl" className="p-4">
      <div className="d-flex flex-colum justify-content-center align-items-center min-vh-100">
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label control="username">Username </Form.Label>
            <Form.Control type="text " placeholder="username" size="lg" />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}
