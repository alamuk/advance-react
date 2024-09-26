import './modal.css';

export function Containment({ showModal, closeModal }) {
  if (!showModal) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2> Delete Account</h2>
        <p>are you sure you want to delete your account?</p>
        <button className="Button" onClick={closeModal}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Containment;
