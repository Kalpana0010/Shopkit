
import { Container, Form, Button } from 'react-bootstrap';

function Newsletter() {
    return (
        <Container className="newsletter-section my-5">
            <div className="text-center">
                <h2>Subscribe to Our Newsletter</h2>

                <p>
                    Get the latest updates, special offers and new arrivals
                    directly in your inbox.
                </p>

                <Form className="newsletter-form">
                    <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                    />

                    <Button variant="primary" type="submit">
                        Subscribe
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Newsletter;
