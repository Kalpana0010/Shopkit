
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function Products() {
    return (
        <Container className="my-5" id="products">
            <div className="text-center mb-5">
                <h2>Our Featured Products</h2>
                <p className="text-secondary">
                    Explore our popular products.
                </p>
            </div>

            <Row>
                <Col md={4} className="mb-4">
                    <ProductCard
                        image="💻"
                        name="Laptop"
                        price="Rs. 100,000"
                    />
                </Col>

                <Col md={4} className="mb-4">
                    <ProductCard
                        image="📱"
                        name="Mobile Phone"
                        price="Rs. 50,000"
                    />
                </Col>

                <Col md={4} className="mb-4">
                    <ProductCard
                        image="🎧"
                        name="Headphones"
                        price="Rs. 5,000"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Products;
