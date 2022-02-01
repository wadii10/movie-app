import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import StarRating from './StarRating';

const Search = ({ text, handleChange, handleChangeRating, rating }) => {
  return <div  >
    <Container>

      <Row>
        <Col xs={6} md={3}>
        </Col>
        <Col xs={6} md={6}>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>'Search'</Form.Label> */}
              <Form.Control type="text" placeholder='search' value={text} onChange={(e) => handleChange(e.target.value)} />
            </Form.Group>
            <StarRating handleRating={handleChangeRating} rating={rating} />
          </Form>
        </Col>
        <Col xs={6} md={3}>
        </Col>
      </Row>

    </Container>


  </div>;
};

export default Search;
