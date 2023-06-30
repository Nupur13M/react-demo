
import React, { useState } from 'react';



function Mail() {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (value) => {
        // Specify the allowed domain(s) for the company email
        const allowedDomains = ['yourcompany.com', 'example.com']; // Replace with your company's domains
    
        // Extract the domain from the email
        const domain = value.split('@')[1];
    
        // Check if the email format is valid and if the domain is allowed
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(value);
        const isDomainAllowed = allowedDomains.includes(domain);
    
        return isEmailValid && isDomainAllowed;
      };
    
      const handleChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setIsValid(validateEmail(value));
      };


  return (
    <div>
         <label htmlFor="email">Company Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleChange}
        className={isValid ? '' : 'invalid'}
      />
      {!isValid && <p className="error">Please enter a valid company email.</p>}
    </div>
  );
};

export default Mail