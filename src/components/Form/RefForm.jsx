import { useRef } from 'react';

export default function RefForm() {
  const inputRef = useRef(null);
  console.log(inputRef);

  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="file" placeholder="RefForm" />
      <button type="submit">Submit</button>
    </form>
  );
}

// const FormRef1 = () => {
//   const inputRef = useRef(null);
//
//   const handleSubmit = () => {
//     const inputValue = inputRef.current.value;
//     // Do something with the value
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={inputRef} type="text" />
//     </form>
//   );
// };
//
// const Form = () => {
//   const fileInput = useRef(null);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const files = fileInput.current.files;
//     // Do something with the files here
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={fileInput} type="file" />
//     </form>
//   );
// };
