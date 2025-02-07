import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';

function Phone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handlePhone = (value) => {
    const input = event.target.value;
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <div>
      <div className="container phone">
        <label>
          Phone number:
          <PhoneInput
            value={phoneNumber}
            onChange={handlePhone}
            country={'us'}
            inputProps={{
              require: true,
            }}
          />
        </label>
        {!valid && <p>Please enter a valid 10-digit phone number.</p>}
      </div>
    </div>
  );
}

export default Phone;
