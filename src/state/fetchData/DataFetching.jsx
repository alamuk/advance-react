import { useEffect, useState } from 'react';

export function FetchData() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Custom Data</h1>
      <h1> Name: {user.results[0].name.first}</h1>
      <img src={user.results[0].picture.medium} alt="" />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default FetchData;
