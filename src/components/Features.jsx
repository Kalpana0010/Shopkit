
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
    return (
        <Container className="my-5" id="features">
            <div className="text-center mb-5">
                <h2>Why Choose ShopKit?</h2>
                <p className="text-secondary">
                    We make your shopping experience simple and enjoyable.
                </p>
            </div>

            <Row>
                <Col md={4} className="mb-3">
                    <Card className="text-center p-3">
                        <Card.Body>
                            <div className="feature-icon">🚚</div>
                            <Card.Title>Fast Delivery</Card.Title>
                            <Card.Text>
                                Get your favorite products delivered to your doorstep.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-3">
                    <Card className="text-center p-3">
                        <Card.Body>
                            <div className="feature-icon">⭐</div>
                            <Card.Title>Quality Products</Card.Title>
                            <Card.Text>
                                Shop confidently with our carefully selected products.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-3">
                    <Card className="text-center p-3">
                        <Card.Body>
                            <div className="feature-icon">💳</div>
                            <Card.Title>Easy Shopping</Card.Title>
                            <Card.Text>
                                Enjoy a simple and convenient shopping experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Features;
