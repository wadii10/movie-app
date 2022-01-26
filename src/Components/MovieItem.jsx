import React from 'react';
import { Button, Card } from 'react-bootstrap';
import StarRating from './StarRating';

const MovieItem = ({ item, del }) => {
    return <div>
        <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={item.imageSrc} />
            <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <Card.Text>
                    <StarRating rating={item.rating} />
                    <h3> {item.date} </h3>
                </Card.Text>
                <Button variant="primary" onClick={() => del(item.id)} > Delete </Button>
            </Card.Body>
        </Card>
    </div>;
};

export default MovieItem;
