import { useState } from 'react';

export default function FormFullControl() {
  const [name, setName] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    setName('');
    console.log('submitted');
  }

  function onChangeHandler(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Hello write your concern"
        value={name}
        onChange={onChangeHandler}
      />
      <h1>{name}</h1>
      <button type="submit" disabled={!name}>
        Submit
      </button>
    </form>
  );
}
