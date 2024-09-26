import { useState } from 'react';
import Containment from './Containment.jsx';

export function DialogConfirmation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handaleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handaleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>Delete Account</h1>
      <button className="Button" onClick={handaleOpenModal}>
        Delete Account
      </button>
      <Containment showModal={isModalOpen} closeModal={handaleCloseModal} />
    </div>
  );
}

export default DialogConfirmation;
