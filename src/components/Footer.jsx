
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="shop-footer">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h3>ShopKit<span>.</span></h3>
                        <p>
                            Your one-stop destination for quality products
                            at affordable prices.
                        </p>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#features">About</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@shopkit.com</p>
                        <p>Phone: +92 300 1234567</p>
                        <p>Location: Pakistan</p>
                    </Col>
                </Row>

                <hr />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 ShopKit. All Rights Reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
