import { useState } from 'react';

export function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function onChangeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>My Little Lemon Goals</h1>
      <input
        type="text"
        name="goal"
        placeholder="Goal"
        value={formData.goal}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="by"
        placeholder="By"
        value={formData.by}
        onChange={onChangeHandler}
      />
      <button>Submit</button>
    </form>
  );
}

export default GoalForm;
