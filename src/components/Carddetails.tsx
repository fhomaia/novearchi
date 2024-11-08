import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface CardDetailsProp {
  title: string;
  tag: string;
  show: boolean;
  pictures: any[];
  onClose: () => void;
}

const CardDetail: React.FC<CardDetailsProp> = ({ title, tag, pictures, show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className='fs-5'>{title}</h1>
          <small className='fs-6 text-muted'>{tag}</small>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex flex-wrap'>
      {pictures.length > 0 ? (
          <div>
            {pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`imagem-${index}`} className="img-fluid mb-3 w-100" />
            ))}
          </div>
        ) : (
          <p>Em breve mais imagens</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardDetail;
