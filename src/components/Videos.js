import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

export const VideosCard = ({ title, description, imgUrl, url }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Col size={12} sm={6} md={4} onClick={handleOpenModal}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>

            <Modal show={isModalOpen} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header className="modal-body-bg" closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-bg">
                    <ReactPlayer
                        url={url}
                        playing={true}
                        controls={true}
                        width="100%"
                    />
                </Modal.Body>
                <Modal.Footer className="modal-body-bg">
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

/*




 */