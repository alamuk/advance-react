// Optional: You can use CSS for styling
// anything dynamic - we will use a prop with the component
import './customButton.css';

function CustomButton({
  children,
  backgroundColor,
  textColor,
  disabled,
  onClick,
}) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor || '#007BFF',
        color: textColor || '#fff',
        padding: '12px 24px',
        border: 'none',
        fontSize: '16px',
      }}
    >
      {children}
    </button>
  );
}

export function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
      <CustomButton onClick={handleClick} textColor="#fff">
        Hello Button
      </CustomButton>
    </div>
  );
}

export default Button;
