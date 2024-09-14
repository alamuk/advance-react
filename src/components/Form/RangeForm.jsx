import { useState } from 'react';

export default function RangeForm() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment this experience you have');
      return;
    }

    setScore(10);
    setComment('');
  }

  function onChangeHandler(e) {
    setScore(e.target.value);
    console.log(e);
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <div>
            <h1>FeedBack Form</h1>
          </div>
          <label>Score: {score} ⭐ </label>
          <input
            type="range"
            id="range"
            min="0"
            max="10"
            value={score}
            onChange={onChangeHandler}
          />
          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              id="comment"
              type="textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {comment}
          </div>
          <button type="submit">Submit now</button>
        </fieldset>
      </form>
    </div>
  );
}
