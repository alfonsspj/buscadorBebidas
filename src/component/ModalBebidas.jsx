import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebidas = () => {

    const { modal, handleModalClick } = useBebidas()

    // cambia de true a false el valor del modal
    // const handleModalClick = () => {}


  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo del modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebidas