import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      setError('Please fill in both first and last names!');
      setFullName(''); // Reset fullName state to empty string
    } else {
      setError(null);
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        /><br /><br />
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          required
        /><br /><br />
        <button type="submit">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {fullName && <div id="full-name-display">{fullName}</div>}
    </div>
  );
}

export default App;