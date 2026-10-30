
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function BestSellers() {
    const products = [
        {
            name: 'Wireless Headphones',
            price: 'Rs. 5,000',
            rating: '4.8',
            reviews: '120',
            image: '🎧'
        },
        {
            name: 'Smart Watch',
            price: 'Rs. 8,500',
            rating: '4.7',
            reviews: '95',
            image: '⌚'
        },
        {
            name: 'Laptop',
            price: 'Rs. 100,000',
            rating: '4.9',
            reviews: '150',
            image: '💻'
        },
        {
            name: 'Smartphone',
            price: 'Rs. 50,000',
            rating: '4.6',
            reviews: '110',
            image: '📱'
        },
        {
            name: 'Camera',
            price: 'Rs. 35,000',
            rating: '4.8',
            reviews: '80',
            image: '📷'
        },
        {
            name: 'Sneakers',
            price: 'Rs. 7,000',
            rating: '4.7',
            reviews: '75',
            image: '👟'
        }
    ];

    return (
        <Container className="my-5">
            <div className="text-center mb-5">
                <h2>Our Best Sellers</h2>
                <p className="text-secondary">
                    Discover the products our customers love the most.
                </p>
            </div>

            <Row>
                {products.map((product, index) => (
                    <Col md={4} lg={4} sm={6} key={index} className="mb-4">
                        <Card className="best-seller-card">
                            <div className="best-seller-image">
                                {product.image}
                            </div>

                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>

                                <div className="product-rating">
                                    <span>★★★★★</span>
                                    <small>
                                        {product.rating} ({product.reviews} reviews)
                                    </small>
                                </div>

                                <h5 className="best-seller-price">
                                    {product.price}
                                </h5>

                                <Button variant="primary" className="w-100">
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BestSellers;
