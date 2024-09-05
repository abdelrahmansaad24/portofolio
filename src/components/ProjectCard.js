import { Col } from "react-bootstrap";
import React, { useState } from "react";
import ImagesSlider from "./Image";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
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
            <ImagesSlider
                handleClose={handleCloseModal}
                isModalOpen={isModalOpen}
                path={path}
                title={title}
            />
        </>
    );
};
