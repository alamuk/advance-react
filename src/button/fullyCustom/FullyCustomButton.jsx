export function FullyCustomButton({
  text,
  backgroundColor,
  textColor,
  icon,
  onClick,
  isLoading,
  disabled,
  width,
  height,
  borderRadius,
  fontSize,
  children,
}) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled || isLoading}
      style={{
        backgroundColor: backgroundColor || '#007BFF',
        color: textColor || '#fff',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        width: width || 'auto',
        height: height || 'auto',
        padding: '12px 24px',
        borderRadius: borderRadius || '8px',
        fontSize: fontSize || '16px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      {isLoading ? (
        <span className="spinner"></span>
      ) : (
        <>
          {icon && <i className={icon} />} {/* Optional icon */}
          {text}
        </>
      )}
      {children}
    </button>
  );
}

export default FullyCustomButton;
