
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';

function Hero() {
    return (
        <Navbar expand="lg" className="shop-navbar">
            <Container>
                <Navbar.Brand href="#home" className="shop-logo">
                    ShopKit<span>.</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="shop-navbar-nav" />

                <Navbar.Collapse id="shop-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                    </Nav>

                    <Form className="d-flex search-form">
                        <Form.Control
                            type="search"
                            placeholder="Search products..."
                            aria-label="Search products"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>

                    <Button variant="outline-primary" className="cart-button">
                        🛒 Cart
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Hero;
