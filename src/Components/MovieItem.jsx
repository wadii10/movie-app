import React from 'react';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';

const MovieItem = ({ item }) => {
    return <div>
        <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={item.imageSrc} />
            <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <Card.Text>
                    <StarRating rating={item.rating} />
                    <h3> {item.date} </h3>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>;
};

export default MovieItem;
