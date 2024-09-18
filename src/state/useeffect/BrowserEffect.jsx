import { useEffect, useState } from 'react';

export function BrowserEffect() {
  const [toggle, setToggle] = useState(false);

  function toggleOnClickHandler() {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle
      ? 'Welcome to Little Lemon'
      : 'Using the useEffect Hook';
  }, [toggle]);

  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={toggleOnClickHandler}> Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default BrowserEffect;
