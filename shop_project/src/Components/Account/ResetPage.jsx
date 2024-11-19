import React, { useState } from 'react';

const ResetPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Validating password match
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords Doesn't Match");
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  // Handle form submission
  const validateSignupForm = (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return false;
    }

    onSignup();
  };

  const onSignup = () => {
    setSubmitDisabled(true);

    // Simulating AJAX request
    setTimeout(() => {
      // Mocking successful response
      setSubmitDisabled(false);
      console.log('AJAX call succeeded!');
    }, 1000);
  };

  return (
    <div className="mainDiv">
      <div className="cardStyle">
        <form name="signupForm" id="signupForm" onSubmit={validateSignupForm}>
          <img src="src/assets/images/logo/logo.png" alt="Signup Logo" id="signupLogo" />

          <h2 className="formTitle">Reset Password</h2>

          <div className="inputDiv">
            <label className="inputLabel" htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="inputDiv">
            <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validatePassword();
              }}
            />
            
          </div>
          <div className="inputDiv"> {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>

          <div className="buttonWrapper">
            <button
              type="submit"
              id="submitButton"
              className="submitButton pure-button pure-button-primary"
              disabled={submitDisabled}
            >
              <span>Change Password</span>
              {submitDisabled && (
                <span id="loader" className="loader"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPage;
