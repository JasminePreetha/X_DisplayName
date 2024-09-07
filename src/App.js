// import FullNameDisplay from "./Displayname";
// function App() {
//   return (
//     <>
//     <FullNameDisplay/>
//     </>
//   );
// }

// export default App;
// index.js
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && lastName) {
  //     setFullName(`Full Name: ${firstName} ${lastName}`);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    } else {
      setFullName(''); // Reset fullName state to empty string
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label for="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br /><br />
        <label for="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <div id="full-name-display">{fullName}</div>
    </div>
  );
}

export default App;
