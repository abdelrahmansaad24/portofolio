import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { listAllFiles } from "../firebase";

const ImagesSlider = ({title, handleClose, isModalOpen, path }) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Current image index

    useEffect(() => {
        const fetchImages = async () => {
            const urls = await listAllFiles(path);
            setImageUrls(urls);
        };
        fetchImages();
    }, [path]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };

    return (
        <Modal show={isModalOpen} onHide={handleClose} size="lg" centered>
            <Modal.Header className="modal-body-bg" closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-bg">
                <div className="slider" style={{ position: 'relative' }}>
                    {imageUrls.length > 0 && (
                        <img
                            src={imageUrls[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            style={{ maxWidth: '100%' }}
                        />
                    )}
                    {/* Navigation arrows */}
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

// Custom styles for navigation arrows
const styles = {
    navigationArrows: {
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
    },
    arrowButton: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        color: 'white', // Change the color if necessary
    }
};

export default ImagesSlider;
