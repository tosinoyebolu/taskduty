import { Container } from "react-bootstrap";
import { Form } from "react-router-dom";

export default function Login() {
  return (
    <Container fluid="xl" className="p-4">
<div className="d-flex flex-colum justify-content-center align-items-center min-vh-100">
<Form>

<Form.Group className="mb-3" controlId="username">
    <Form.label>Username </Form.label>
    <Form.control 
    type="text 
    placeholder="username"
    size="lg"
    />
</Form.Group>
</Form>
</div>
</Container>
);
}
