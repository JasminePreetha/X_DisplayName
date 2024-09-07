import React, { useState } from 'react';

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      setError('Please fill in both first and last names!');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(null);
    }
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
        <p>Full name: {fullName}</p>
      </form>
    </div>
  );
};

export default FullNameDisplay;