
import { Container, Row, Col, Card } from 'react-bootstrap';

function Category() {
    return (
        <Container className="my-5" id="categories">
            <div className="text-center mb-5">
                <h2>Shop by Category</h2>
                <p className="text-secondary">
                    Explore our wide range of shopping categories.
                </p>
            </div>

            <Row>
                <Col md={3} sm={6} className="mb-4">
                    <Card className="category-card text-center">
                        <Card.Body>
                            <div className="category-icon">💻</div>
                            <Card.Title>Electronics</Card.Title>
                            <Card.Text>
                                Explore the latest gadgets.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6} className="mb-4">
                    <Card className="category-card text-center">
                        <Card.Body>
                            <div className="category-icon">👕</div>
                            <Card.Title>Fashion</Card.Title>
                            <Card.Text>
                                Find your everyday style.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6} className="mb-4">
                    <Card className="category-card text-center">
                        <Card.Body>
                            <div className="category-icon">⌚</div>
                            <Card.Title>Accessories</Card.Title>
                            <Card.Text>
                                Discover stylish accessories.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6} className="mb-4">
                    <Card className="category-card text-center">
                        <Card.Body>
                            <div className="category-icon">🏠</div>
                            <Card.Title>Home & Living</Card.Title>
                            <Card.Text>
                                Make your home special.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Category;
