import { useEffect, useState } from 'react';

export function AwaitAsync() {
  const [user, setUser] = useState([]);

  const dataFetching = async () => {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const data = await response.json();
    setUser(data);
    // console.log(data);

    // fetch('https://randomuser.me/api/?results=1')
    //   .then((respond) => respond.json())
    //   .then((data) => setUser(data));
  };

  console.log(user);

  useEffect(() => {
    dataFetching();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data return</h1>
      <h2>Title: {user.results[0].name.title}</h2>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>last Name: {user.results[0].name.last}</h2>
      <h2>last Name: {user.results[0].gender}</h2>
      <h2>Seed: {user.info.seed}</h2>
    </div>
  ) : (
    <h1>Data pending ... </h1>
  );
}

export default AwaitAsync;
