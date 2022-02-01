import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const Detail = ({ match, dataDetail }) => {

    const item = dataDetail.find(el => el.id == match.params.id)

    return <div className='card-detail'>

        
                    <Card style={{ width: '19rem', height: '40rem' }}>
                        <Card.Img variant="top" src={item.imageSrc} />
                        <Card.Body>
                            <Card.Title> {item.name} </Card.Title>
                            <Card.Text>
                                <StarRating rating={item.rating} />
                                <h3> {item.date} </h3>
                            </Card.Text>
                            <Link to="/" ><Button className='up up-1' >Back</Button></Link>
                        </Card.Body>
                    </Card>
                


    </div>;
};

export default Detail;
