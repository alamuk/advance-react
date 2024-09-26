import FullyCustomButton from './FullyCustomButton.jsx';
import { useState } from 'react';

export function FullyCustomButtonUse() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Action Completed!');
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="App">
      <FullyCustomButton
        text="Submit"
        backgroundColor="#ff4757"
        textColor="#fff"
        icon="fas fa-check"
        isLoading={loading}
        onClick={handleClick}
        width="200px"
        height="50px"
        borderRadius="12px"
        fontSize="18px"
      />
    </div>
  );
}

export default FullyCustomButtonUse;
