
import { Container, Row, Col, Button } from 'react-bootstrap';

function SpecialOffers() {
    return (
        <Container className="my-5">
            <div className="offer-section">
                <Row className="align-items-center">
                    <Col md={8}>
                        <span className="offer-label">
                            LIMITED TIME OFFER
                        </span>

                        <h2>Special Deals Just for You!</h2>

                        <p>
                            Discover amazing products at great prices.
                            Don't miss our latest shopping offers.
                        </p>

                        <Button
                            variant="light"
                            href="#products"
                            className="offer-button"
                        >
                            Shop Now →
                        </Button>
                    </Col>

                    <Col md={4} className="text-center">
                        <div className="offer-emoji">
                            🛍️
                        </div>
                        <h3>Great Deals</h3>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default SpecialOffers;
