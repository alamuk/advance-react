import './SignUpForm.css';

import { useState } from 'react';
import { validateEmail } from './formUtil.js';

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

export function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    value: ' ',
    isTouched: false,
  });
  const [role, setRole] = useState('role');

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== 'role'
    );
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({
      value: ' ',
      isTouched: false,
    });
    setRole('role');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created!');
    clearForm();
  };
  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1> Sign Up</h1>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">
              Last name <sup>*</sup>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
            />
            {password.isTouched && password.value.length <= 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role: <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            CREATE ACCOUNT
          </button>
        </fieldset>
      </form>
    </div>
  );
}
