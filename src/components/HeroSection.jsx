import { Container, Button } from 'react-bootstrap';

function HeroSection() {
    return (
        <Container className="text-center my-5" id="home">
            <h1>Welcome to ShopKit</h1>

            <p>
                Discover quality products at affordable prices.
                Find everything you need in one place.
            </p>

            <Button variant="primary">
                Explore Products
            </Button>
        </Container>
    );
}

export default HeroSection;