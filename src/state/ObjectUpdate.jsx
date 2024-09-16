import { useState } from 'react';

function ObjectUpdate() {
  const [personInfo, setPersonInfo] = useState({
    name: 'Md shah',
    age: 25,
    phoneNumber: '07983415267',
    email: 'shah@gmail.com',
  });

  function handlePersonInfoUpdate() {
    setPersonInfo({
      ...personInfo,
      name: 'Md ALAm',
      email: 'alm@gmail.com',
    });
  }

  return (
    <div>
      <h1>{personInfo.name}</h1>
      <p>{personInfo.age}</p>
      <p>{personInfo.phoneNumber}</p>
      <p>{personInfo.email}</p>
      <button onClick={handlePersonInfoUpdate}>Update the details</button>
    </div>
  );
}

export default ObjectUpdate;
