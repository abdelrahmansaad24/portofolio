import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { listAllFiles } from "../firebase";

const ImagesSlider = ({title, handleClose, isModalOpen, path, footerHeight }) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Current image index

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };

    useEffect(() => {
        const fetchImages = async () => {
            const urls = await listAllFiles(path);
            setImageUrls(urls);
        };
        fetchImages();
    }, [path]);

    return (
        <Modal
            show={isModalOpen}
            onHide={handleClose}
            size="lg"
            centered
            style={{ ...styles.modal, maxHeight: `calc(100vh - ${footerHeight}px)` }} // Dynamically adjust height
        >
            <Modal.Header className="modal-body-bg" >
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-bg" style={styles.modalBody}>
                <div style={styles.imageContainer}>
                    {imageUrls.length > 0 && (
                        <img
                            src={imageUrls[currentIndex]} // Always show the first image
                            alt={`Slide 0`}
                            style={styles.image} // Adjust image size
                        />
                    )}
                    <div className="navigation-arrows" style={styles.navigationArrows}>
                        <button onClick={goToPrev} style={styles.arrowButton}>
                            &#9664; {/* Left arrow */}
                        </button>
                        <button onClick={goToNext} style={styles.arrowButton}>
                            &#9654; {/* Right arrow */}
                        </button>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-body-bg">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const styles = {
    modal: {
        maxWidth: '80vw',  // Set modal width to 80% of the viewport width
        maxHeight: '80vh', // Set modal height (adjusted dynamically)
        top: '5vh',       // Move the modal down by 10% of the viewport height
    },
    modalBody: {
        padding: 0, // Remove extra padding from the modal body
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: '100%',  // Ensure the image fits within the width
        maxHeight: '70vh', // Ensure the image fits within the height of the modal
        objectFit: 'contain', // Maintain aspect ratio and fit the image within bounds
    },
    navigationArrows: {
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        backgroundImage: 'url("./assets/img/banner-bg.png")', // Set background image
    },
    arrowButton: {
        backgroundColor: 'transparent',
        border: '2px solid white', // Add border
        borderRadius: '50%',       // Optional: make the button round
        padding: '10px',
        fontSize: '2rem',
        cursor: 'pointer',
        color: 'white',
        backgroundImage: 'url("./assets/img/banner-bg.png")', // Set background image
        backgroundSize: 'cover', // Ensures the background image covers the entire button
        width: '60px', // Set width and height to maintain button size
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default ImagesSlider;
