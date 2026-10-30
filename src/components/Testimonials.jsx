
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonials() {
    const reviews = [
        {
            name: 'Ali Khan',
            role: 'Verified Customer',
            review: 'Amazing shopping experience! The products were exactly what I expected.',
            rating: '★★★★★'
        },
        {
            name: 'Sara Ahmed',
            role: 'Verified Customer',
            review: 'Great product quality and a very easy shopping experience.',
            rating: '★★★★★'
        },
        {
            name: 'Ahmed Raza',
            role: 'Verified Customer',
            review: 'Good prices, excellent service and a smooth ordering experience.',
            rating: '★★★★☆'
        }
    ];

    return (
        <Container className="my-5">
            <div className="text-center mb-5">
                <h2>What Our Customers Say</h2>
                <p className="text-secondary">
                    Hear about the shopping experience at ShopKit.
                </p>
            </div>

            <Row>
                {reviews.map((item, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <div className="testimonial-rating">
                                    {item.rating}
                                </div>

                                <Card.Text>
                                    "{item.review}"
                                </Card.Text>

                                <h5>{item.name}</h5>
                                <small>{item.role}</small>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Testimonials;
