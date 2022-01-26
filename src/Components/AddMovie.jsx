import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddMovie = ({add}) => {

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
            id:Math.random(), name, imageSrc, date, rating
        }
        add(newMovie);
        closeModal();
    };

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
        <button onClick={openModal}>Add Movie</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <form onSubmit={handleSubmit}>
                <input placeholder='Movie Title' value={name} onChange={(e)=>setName(e.target.value)} />
                <input placeholder='Movie Poster' value={imageSrc} onChange={(e)=>setImageSrc(e.target.value)} />
                <StarRating rating={rating} handleRating={handleRating} />
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                <div>
                    <Button variant="primary" type="submit" > Add </Button>
                    <Button variant="secondary" onClick={()=>closeModal()}> Cancel </Button>
                </div>
            </form>
        </Modal>
    </div>;
};

export default AddMovie;
