import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://technxt.in/demo_api/admin.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response:', response.data);

      if (response.data.success) {
        sessionStorage.setItem('adminDetails', JSON.stringify(response.data.data));
        console.log('Admin Details:', response.data.data);
        window.location.href = '/adminDash'; // Redirect to the dashboard
      } else {
        setError('Login failed. Invalid credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container justify-content-center justify-content-lg-between">
            <Link className="navbar-brand" to="/adminDash">
              <img src='src/assets/images/logo/logo.png' alt="Logo" className="d-inline-block align-text-top" />
            </Link>
          </div>
        </nav>
      </div>

      <main>
        {/* Section */}
        <section className="my-lg-14 my-8">
          <div className="container">
            {/* Row */}
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-1 order-1">
                <div className="mb-lg-9 mb-5">
                  {/* <h1 className="mb-1 h2 fw-bold " >Admin Login</h1> */}
                  <h1 className="mb-1 h2 fw-bold" style={{ textAlign: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg></h1>
                  <h1 className="mb-1 h2 fw-bold" style={{ textAlign: 'center' }}>Admin Login</h1>

                </div>

                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="formSignupEmail" className="form-label visually-hidden">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="formSignupEmail"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="password-field position-relative">
                        <label htmlFor="formSignupPassword" className="form-label visually-hidden">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="formSignupPassword"
                          placeholder="Enter Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 d-grid">
                      <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
}

export default AdminLogin;