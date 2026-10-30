
import { Card, Button } from 'react-bootstrap';

function ProductCard(props) {
    return (
        <Card className="product-card">
            <div className="product-image">
                {props.image}
            </div>

            <Card.Body className="text-center">
                <Card.Title>{props.name}</Card.Title>

                <Card.Text className="product-price">
                    {props.price}
                </Card.Text>

                <Button variant="primary" className="w-100">
                    Buy Now
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
