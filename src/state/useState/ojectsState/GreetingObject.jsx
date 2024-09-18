import { useState } from 'react';

export function GreetingObject() {
  {
    const [greeting, setGreeting] = useState({ greet: 'Hello, World' });
    console.log(greeting, setGreeting);

    function updateGreeting() {
      const newGreeting = { ...greeting };
      newGreeting.greet = 'Hello, World-Wide Web';
      setGreeting(newGreeting);
    }

    return (
      <div>
        <h1>{greeting.greet}</h1>
        <button onClick={updateGreeting}>Update greeting</button>
      </div>
    );
  }
}

// ----------------------------------------

export function GreetingObject2() {
  const [greeting, setGreeting] = useState({
    greet: 'Hello',
    place: 'World',
  });

  function updateGreeting() {
    setGreeting(() => {
      return { ...greeting, place: 'London' };
    });
  }

  return (
    <div>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
