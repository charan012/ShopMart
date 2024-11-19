import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Address = () => {


  return (
    <div>
    {/* Modal */}
    <div className="modal fade" id="userModal" tabIndex={-1} aria-labelledby="userModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" required />
                <div className="invalid-feedback">Please enter name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email address" required />
                <div className="invalid-feedback">Please enter email.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
                <div className="invalid-feedback">Please enter password.</div>
                <small className="form-text">
                  By Signup, you agree to our
                  <a href="#!">Terms of Service</a>
                  &amp;
                  <a href="#!">Privacy Policy</a>
                </small>
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            Already have an account?
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </div>
    {/* Shop Cart */}
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shop Cart</h5>
          <small>Location in 382480</small>
        </div>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div>
          {/* alert */}
          <div className="alert alert-danger p-2" role="alert">
            You’ve got FREE delivery. Start
            <a href="#!" className="alert-link">checkout now!</a>
          </div>
          <ul className="list-group list-group-flush">
            {/* list group */}
            <li className="list-group-item py-3 ps-0 border-top">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                    <div className="ms-3">
                      {/* title */}
                      <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                      </Link>
                      <span><small className="text-muted">.98 / lb</small></span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        <a href="#!" className="text-decoration-none text-inherit">
                          <span className="me-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner">
                    <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                    <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                    <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$5.00</span>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img src="assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                    <div className="ms-3">
                      <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">NutriChoice Digestive</h6>
                      </Link>
                      <span><small className="text-muted">250g</small></span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        <a href="#!" className="text-decoration-none text-inherit">
                          <span className="me-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner">
                    <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                    <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                    <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold text-danger">$20.00</span>
                  <div className="text-decoration-line-through text-muted small">$26.00</div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                    <div className="ms-3">
                      {/* title */}
                      <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                      </Link>
                      <span><small className="text-muted">1 kg</small></span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        <a href="#!" className="text-decoration-none text-inherit">
                          <span className="me-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner">
                    <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                    <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                    <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">$20.00</div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img src="src/assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                    <div className="ms-3">
                      {/* title */}
                      {/* title */}
                      <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Onion Flavour Potato</h6>
                      </Link>
                      <span><small className="text-muted">250g</small></span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        <a href="#!" className="text-decoration-none text-inherit">
                          <span className="me-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner">
                    <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                    <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                    <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">$20.00</div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0 border-bottom">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img src="src/assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                    <div className="ms-3">
                      {/* title */}
                      <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Salted Instant Popcorn</h6>
                      </Link>
                      <span><small className="text-muted">100g</small></span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        <a href="#!" className="text-decoration-none text-inherit">
                          <span className="me-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner">
                    <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                    <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                    <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">$25.00</div>
                </div>
              </div>
            </li>
          </ul>
          {/* btn */}
          <div className="d-flex justify-content-between mt-4">
            <a href="#!" className="btn btn-primary">Continue Shopping</a>
            <a href="#!" className="btn btn-dark">Update Cart</a>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="locationModal" tabIndex={-1} aria-labelledby="locationModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-1" id="locationModalLabel">Choose your Delivery Location</h5>
                <p className="mb-0 small">Enter your address and we will specify the offer you area.</p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="my-5">
              <input type="search" className="form-control" placeholder="Search your area" />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Select Location</h6>
              <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Clear All</a>
            </div>
            <div>
              <div data-simplebar style={{height: '300px'}}>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active">
                    <span>Alabama</span>
                    <span>Min:$20</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Alaska</span>
                    <span>Min:$30</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Arizona</span>
                    <span>Min:$50</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>California</span>
                    <span>Min:$29</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Colorado</span>
                    <span>Min:$80</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Florida</span>
                    <span>Min:$90</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Arizona</span>
                    <span>Min:$50</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>California</span>
                    <span>Min:$29</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Colorado</span>
                    <span>Min:$80</span>
                  </a>
                  <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                    <span>Florida</span>
                    <span>Min:$90</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      {/* section */}
      <section>
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center d-md-none py-4">
                {/* heading */}
                <h3 className="fs-5 mb-0">Account Setting</h3>
                {/* button */}
                <button className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAccount" aria-controls="offcanvasAccount">
                  <i className="bi bi-text-indent-left fs-3" />
                </button>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
              <div className="pt-10 pe-lg-10">
                {/* nav */}
                <ul className="nav flex-column nav-pills nav-pills-dark">
                  {/* nav item */}
                  <li className="nav-item">
                    {/* nav link */}
                    <Link to="/Orders" className="nav-link" aria-current="page" >
                      <i className="feather-icon icon-shopping-bag me-2" />
                      Your Orders
                    </Link>
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                  <Link to="/Settings" className="nav-link" >
                      <i className="feather-icon icon-settings me-2" />
                      Settings
                    </Link>
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                  <Link to ="/Address" className="nav-link">
                      <i className="feather-icon icon-map-pin me-2" />
                      Address
                    </Link>
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                  <Link to="/Payment"className="nav-link">
                      <i className="feather-icon icon-credit-card me-2" />
                      Payment Method
                    </Link>
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                  <Link to="/Notification"className="nav-link" >
                      <i className="feather-icon icon-bell me-2" />
                      Notification
                    </Link>
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                    <hr />
                  </li>
                  {/* nav item */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="feather-icon icon-log-out me-2" />
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                <div className="d-flex justify-content-between mb-6">
                  {/* heading */}
                  <h2 className="mb-0">Address</h2>
                  {/* button */}
                  <a href="#" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addAddressModal">Add a new address</a>
                </div>
                <div className="row">
                  {/* col */}
                  <div className="col-xl-5 col-lg-6 col-xxl-4 col-12 mb-4">
                    {/* form */}
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" defaultChecked />
                          <label className="form-check-label text-dark fw-semibold" htmlFor="homeRadio">Home</label>
                        </div>
                        {/* address */}
                        <p className="mb-6">
                          Jitu Chauhan
                          <br />
                          4450 North Avenue Oakland,
                          <br />
                          Nebraska, United States,
                          <br />
                          402-776-1106
                        </p>
                        {/* btn */}
                        <a href="#" className="btn btn-info btn-sm">Default address</a>
                        <div className="mt-4">
                          <a href="#" className="text-inherit">Edit</a>
                          <a href="#" className="text-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xk-5 col-lg-6 col-xxl-4 col-12 mb-4">
                    {/* input */}
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="officeRadio" />
                          <label className="form-check-label text-dark fw-semibold" htmlFor="officeRadio">Office</label>
                        </div>
                        {/* nav item */}
                        <p className="mb-6">
                          Nitu Chauhan
                          <br />
                          3853 Coal Road
                          <br />
                          Tannersville, Pennsylvania, 18372, United States
                          <br />
                          402-776-1106
                        </p>
                        {/* link */}
                        <a href="#" className="link-primary">Set as Default</a>
                        <div className="mt-4">
                          <a href="#" className="text-inherit">Edit</a>
                          {/* btn */}
                          <a href="#" className="text-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* Modal */}
    <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        {/* modal content */}
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">Delete address</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {/* modal body */}
          <div className="modal-body">
            <h6>Are you sure you want to delete this address?</h6>
            <p className="mb-6">
              Jitu Chauhan
              <br />
              4450 North Avenue Oakland,
              <br />
              Nebraska, United States,
              <br />
              402-776-1106
            </p>
          </div>
          {/* modal footer */}
          <div className="modal-footer">
            {/* btn */}
            <button type="button" className="btn btn-outline-gray-400" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="addAddressModal" tabIndex={-1} aria-labelledby="addAddressModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        {/* modal content */}
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                {/* heading */}
                <h5 className="mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                <p className="small mb-0">Add new shipping address for your order delivery.</p>
              </div>
              <div>
                {/* button */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
            {/* row */}
            <div className="row g-3">
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="Address Line 1" />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="Address Line 2" />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="City" />
              </div>
              {/* col */}
              <div className="col-12">
                {/* form select */}
                <select className="form-select">
                  <option selected>India</option>
                  <option value={1}>UK</option>
                  <option value={2}>USA</option>
                  <option value={3}>UAE</option>
                </select>
              </div>
              {/* col */}
              <div className="col-12">
                {/* form select */}
                <select className="form-select">
                  <option selected>Gujarat</option>
                  <option value={1}>Northern Ireland</option>
                  <option value={2}>Alaska</option>
                  <option value={3}>Abu Dhabi</option>
                </select>
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="Zip Code" />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input type="text" className="form-control" placeholder="Business Name" />
              </div>
              {/* col */}
              <div className="col-12">
                {/* form check */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">Set as Default</label>
                </div>
              </div>
              {/* col */}
              <div className="col-12 text-end">
                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-primary" type="button">Save Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasAccount" aria-labelledby="offcanvasAccountLabel">
      {/* offcanvac header */}
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasAccountLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      {/* offcanvac body */}
      <div className="offcanvas-body">
        {/* nav */}
        <ul className="nav flex-column nav-pills nav-pills-dark">
          {/* nav item */}
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Orders">
              <i className="feather-icon icon-shopping-bag me-2" />
              Your Orders
            </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
            <Link className="nav-link" to="/Settings">
              <i className="feather-icon icon-settings me-2" />
              Settings
            </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
            <Link className="nav-link active" to="/Address">
              <i className="feather-icon icon-map-pin me-2" />
              Address
            </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
            <Link className="nav-link" to="/Payment">
              <i className="feather-icon icon-credit-card me-2" />
              Payment Method
            </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
            <Link className="nav-link" to="/Notification">
              <i className="feather-icon icon-bell me-2" />
              Notification
            </Link>
          </li>
        </ul>
        <hr className="my-6" />
        <div>
          {/* nav */}
          <ul className="nav flex-column nav-pills nav-pills-dark">
            {/* nav item */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="feather-icon icon-log-out me-2" />
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
};

export default Address;