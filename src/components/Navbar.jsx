
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <BsNavbar.Brand href="#home">
                    ShopKit
                </BsNavbar.Brand>

                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;
