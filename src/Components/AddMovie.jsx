import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddMovie = ({ add }) => {

    const [name, setName] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(1);

    //change the rating
    const handleRating = (x) => {
        setRating(x);
    };

    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.random(), name, imageSrc, date, rating
        }
        add(newMovie);
        setName("");
        setImageSrc("");
        setDate("");
        setRating("");
        closeModal();
    };

    // modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');

    return <div>
        <Button className='up up-1' onClick={openModal}>Add Movie</Button>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>'Movie Title'</Form.Label> */}
                    <Form.Control type="text" placeholder='Movie Title' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>'Movie Poster'</Form.Label> */}
                    <Form.Control type="text" placeholder='Movie Poster' value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} />
                </Form.Group>

                <StarRating rating={rating} handleRating={handleRating} />

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>'Movie Date'</Form.Label> */}
                    <Form.Control type="date"  value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <div className='btn-add' >
                    <Button variant="primary" type="submit" > Add </Button>
                    <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
                </div>
            </Form>
        </Modal>
    </div>;
};

export default AddMovie;
