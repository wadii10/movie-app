import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import UpdateMovie from './UpdateMovie';



const MovieItem = ({ item, del, update }) => {

    return <div className='movie-card'>
        <Card style={{ width: '19rem' , height:'40rem' }}>
            <Card.Img variant="top" src={item.imageSrc} />
            <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <Card.Text>
                    <StarRating rating={item.rating} />
                    <h3> {item.date} </h3>
                </Card.Text>
                <div className="btn-card">
                <Button variant="primary" onClick={() => del(item.id)} > Delete </Button>
                <UpdateMovie item={item} update={update} />
                <Link to={`/detail/${item.id}`} ><Button variant="primary" > Detail </Button></Link>
                </div>
            </Card.Body>
        </Card>
    </div>;
};

export default MovieItem;
