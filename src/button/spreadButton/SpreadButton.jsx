const Button = ({ type, children, ...buttonProps }) => {
  const className = type === 'primary' ? 'PrimaryButton' : 'SecondaryButton';

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps} /// position of this spread operator will give a different result. like overwritten option.
      onClick={() => {
        alert('Logging in!');
      }}
    >
      {children}
    </Button>
  );
};

export function SpreadButton() {
  return (
    <div>
      <h1> Little Lemon Restaurant</h1>
      <Button type="primary" onClick={() => alert('sign up')}>
        Sign up
      </Button>
      {/*onClick overwrite. it was writen already in log in button*/}
      <LoginButton type="secondary" onClick={() => alert('sign up!')}>
        Login
      </LoginButton>
    </div>
  );
}

export default SpreadButton;
