import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, Form } from 'react-bootstrap';
import StarRating from './StarRating';

const UpdateMovie = ({ item, update }) => {

    const [name, setName] = useState(item.name);
    const [imageSrc, setImageSrc] = useState(item.imageSrc);
    const [date, setDate] = useState(item.date);
    const [rating, setRating] = useState(item.rating);

    //update the rating
    const handleRating = (x) => {
        setRating(x);
    };

    //handle update
    const handleUpdate = (e) => {
        e.preventDefault();

        const updateMovie = {
            id: item.id,
            name,
            imageSrc,
            date,
            rating
        }
        update(updateMovie);
        closeModal();
    }


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
        <Button variant="secondary" onClick={openModal}> Update </Button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Form onSubmit={handleUpdate}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Movie Title</Form.Label> */}
                    <Form.Control type="text" placeholder='Movie Title'  value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>'Movie Poster'</Form.Label> */}
                    <Form.Control type="text" placeholder='Movie Poster' value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} />
                </Form.Group>

                <StarRating rating={rating} handleRating={handleRating} />

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>date</Form.Label> */}
                    <Form.Control type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <div className='btn-update' >
                    <Button variant="primary" type="submit" > Update </Button>
                    <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
                </div>

            </Form>
        </Modal>
    </div>;
};

export default UpdateMovie;
