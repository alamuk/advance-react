import { useState } from 'react';

export default function FormComponent() {
  const [value, setValue] = useState('');

  function formHandler(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={ha}>
      <input type="text" value={value} onChange={formHandler} />
    </form>
  );
}
