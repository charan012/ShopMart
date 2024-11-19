import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shopcheckout= () => {


  return (
   <>
  
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
            <Link to="/Signin">Sign in</Link>
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
                    <img src="src/assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
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
      {/* section*/}
      <div className="mt-4">
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12">
              {/* breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                  <li className="breadcrumb-item"><a href="/Shopwide">Shop</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12">
              <div>
                <div className="mb-8">
                  {/* text */}
                  <h1 className="fw-bold mb-0">Checkout</h1>
                  <p className="mb-0">
                    Already have an account? Click here to
                    <Link to="/Signin">Sign in</Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* row */}
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-md-12">
                {/* accordion */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {/* accordion item */}
                  <div className="accordion-item py-4">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* heading one */}
                      <a href="#" className="fs-5 text-inherit collapsed h4" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        <i className="feather-icon icon-map-pin me-2 text-muted" />
                        Add delivery address
                      </a>
                      {/* btn */}
                      <a href="#" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addAddressModal">Add a new address</a>
                      {/* collapse */}
                    </div>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                      <div className="mt-5">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                            {/* form */}
                            <div className="card card-body p-6">
                              <div className="form-check mb-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" defaultChecked />
                                <label className="form-check-label text-dark" htmlFor="homeRadio">Home</label>
                              </div>
                              {/* address */}
                              <address>
                                <strong>Jitu Chauhan</strong>
                                <br />
                                4450 North Avenue Oakland,
                                <br />
                                Nebraska, United States,
                                <br />
                                <abbr title="Phone">P: 402-776-1106</abbr>
                              </address>
                              <span className="text-danger">Default address</span>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                            {/* input */}
                            <div className="card card-body p-6">
                              <div className="form-check mb-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="officeRadio" />
                                <label className="form-check-label text-dark" htmlFor="officeRadio">Office</label>
                              </div>
                              <address>
                                <strong>Nitu Chauhan</strong>
                                <br />
                                3853 Coal Road,
                                <br />
                                Tannersville, Pennsylvania, 18372, USA,
                                <br />
                                <abbr title="Phone">P: 402-776-1106</abbr>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion item */}
                  <div className="accordion-item py-4">
                    <a href="#" className="text-inherit collapsed h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <i className="feather-icon icon-clock me-2 text-muted" />
                      Delivery time
                    </a>
                    {/* collapse */}
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      {/* nav */}
                      <ul className="nav nav-pills nav-pills-light mb-3 nav-fill mt-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link active" id="pills-today-tab" data-bs-toggle="pill" data-bs-target="#pills-today" type="button" role="tab" aria-controls="pills-today" aria-selected="true">
                            Today
                            <br />
                            <small>Oct 3</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-monday-tab" data-bs-toggle="pill" data-bs-target="#pills-monday" type="button" role="tab" aria-controls="pills-monday" aria-selected="false">
                            Mon
                            <br />
                            <small>Oct 4</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-Tue-tab" data-bs-toggle="pill" data-bs-target="#pills-Tue" type="button" role="tab" aria-controls="pills-Tue" aria-selected="false">
                            Tue
                            <br />
                            <small>Oct 5</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-Wed-tab" data-bs-toggle="pill" data-bs-target="#pills-Wed" type="button" role="tab" aria-controls="pills-Wed" aria-selected="false">
                            Wed
                            <br />
                            <small>Oct 6</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-Thu-tab" data-bs-toggle="pill" data-bs-target="#pills-Thu" type="button" role="tab" aria-controls="pills-Thu" aria-selected="false">
                            Thu
                            <br />
                            <small>Oct 7</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-Fri-tab" data-bs-toggle="pill" data-bs-target="#pills-Fri" type="button" role="tab" aria-controls="pills-Fri" aria-selected="false">
                            Fri
                            <br />
                            <small>Oct 8</small>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          {/* button */}
                          <button className="nav-link" id="pills-Sat-tab" data-bs-toggle="pill" data-bs-target="#pills-Sat" type="button" role="tab" aria-controls="pills-Sat" aria-selected="false">
                            Sat
                            <br />
                            <small>Oct 9</small>
                          </button>
                        </li>
                      </ul>
                      {/* tab content */}
                      <div className="tab-content" id="pills-tabContent">
                        {/* tab pane */}
                        <div className="tab-pane fade show active" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab" tabIndex={0}>
                          {/* list group */}
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              {/* badge */}
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    <span>Within 3 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              {/* badge */}
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault5">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              {/* badge */}
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-monday" role="tabpanel" aria-labelledby="pills-monday-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault6">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault7">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault8">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault9">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault10">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-Tue" role="tabpanel" aria-labelledby="pills-Tue-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault11">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault12">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault13">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault14">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault15" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault15">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-Wed" role="tabpanel" aria-labelledby="pills-Wed-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault16">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault17">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault18" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault18">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault19">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault20" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault20">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-Thu" role="tabpanel" aria-labelledby="pills-Thu-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault21" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault21">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault22" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault22">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              {/* badge */}
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault23" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault23">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault24" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault24">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault25" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault25">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-Fri" role="tabpanel" aria-labelledby="pills-Fri-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault26" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault26">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault27" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault27">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault28" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault28">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault29" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault29">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault30" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault30">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-Sat" role="tabpanel" aria-labelledby="pills-Sat-tab" tabIndex={0}>
                          <ul className="list-group list-group-flush mt-4">
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault31" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault31">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault32" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault32">
                                    <span>Within 2 Hours</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault33" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault33">
                                    <span>1pm - 2pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$0.00</div>
                              <div className="col-3 text-center"><span className="badge bg-success">Free</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault34" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault34">
                                    <span>2pm - 3pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                              {/* col */}
                              <div className="col-4">
                                <div className="form-check">
                                  {/* form check input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault35" />
                                  {/* label */}
                                  <label className="form-check-label" htmlFor="flexRadioDefault35">
                                    <span>3pm - 4pm</span>
                                  </label>
                                </div>
                              </div>
                              {/* price */}
                              <div className="col-3 text-center">$3.99</div>
                              <div className="col-3 text-center"><span className="badge bg-danger">Paid</span></div>
                              {/* col */}
                              <div className="col-2 text-end"><a href="#" className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-5 d-flex justify-content-end">
                        <a href="#" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Prev
                        </a>
                        <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* accordion item */}
                  <div className="accordion-item py-4">
                    <a href="#" className="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <i className="feather-icon icon-shopping-bag me-2 text-muted" />
                      Delivery instructions
                      {/* collapse */}
                    </a>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="mt-5">
                        <label htmlFor="DeliveryInstructions" className="form-label sr-only">Delivery instructions</label>
                        <textarea className="form-control" id="DeliveryInstructions" rows={3} placeholder="Write delivery instructions " defaultValue={""} />
                        <p className="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                        <div className="mt-5 d-flex justify-content-end">
                          <a href="#" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Prev
                          </a>
                          <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion item */}
                  <div className="accordion-item py-4">
                    <a href="#" className="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      <i className="feather-icon icon-credit-card me-2 text-muted" />
                      Payment Method
                      {/* collapse */}
                    </a>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="mt-5">
                        <div>
                          <div className="card card-bordered shadow-none mb-2">
                            {/* card body */}
                            <div className="card-body p-6">
                              <div className="d-flex">
                                <div className="form-check">
                                  {/* checkbox */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="paypal" />
                                  <label className="form-check-label ms-2" htmlFor="paypal" />
                                </div>
                                <div>
                                  {/* title */}
                                  <h5 className="mb-1 h6">Payment with Paypal</h5>
                                  <p className="mb-0 small">You will be redirected to PayPal website to complete your purchase securely.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card card-bordered shadow-none mb-2">
                            {/* card body */}
                            <div className="card-body p-6">
                              <div className="d-flex mb-4">
                                <div className="form-check">
                                  {/* input */}
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="creditdebitcard" />
                                  <label className="form-check-label ms-2" htmlFor="creditdebitcard" />
                                </div>
                                <div>
                                  <h5 className="mb-1 h6">Credit / Debit Card</h5>
                                  <p className="mb-0 small">Safe money transfer using your bank accou k account. We support Mastercard tercard, Visa, Discover and Stripe.</p>
                                </div>
                              </div>
                              <div className="row g-2">
                                <div className="col-12">
                                  {/* input */}
                                  <div className="mb-3">
                                    <label htmlFor="card-mask" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="card-mask" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  {/* input */}
                                  <div className="mb-3 mb-lg-0">
                                    <label className="form-label" htmlFor="nameoncard">Name on card</label>
                                    <input type="text" className="form-control" placeholder="Enter name" id="nameoncard" />
                                  </div>
                                </div>
                                <div className="col-md-3 col-12">
                                  {/* input */}
                                  <div className="mb-3 mb-lg-0 position-relative">
                                    <label className="form-label" htmlFor="expirydate">Expiry date</label>
                                    <input type="text" className="form-control" id="expirydate" placeholder="MM/YY" />
                                  </div>
                                </div>
                                <div className="col-md-3 col-12">
                                  {/* input */}
                                  <div className="mb-3 mb-lg-0">
                                    <label htmlFor="digit-mask" className="form-label">
                                      CVV Code
                                      <i className="fe fe-help-circle ms-1" data-bs-toggle="tooltip" data-placement="top" title="A 3 - digit number, typically printed on the back of a card." />
                                    </label>
                                    <input type="password" className="form-control" name="digit-mask" id="digit-mask" placeholder="xxx" maxLength={3} inputMode="numeric" required />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card card-bordered shadow-none mb-2">
                            {/* card body */}
                            <div className="card-body p-6">
                              {/* check input */}
                              <div className="d-flex">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="payoneer" />
                                  <label className="form-check-label ms-2" htmlFor="payoneer" />
                                </div>
                                <div>
                                  {/* title */}
                                  <h5 className="mb-1 h6">Pay with Payoneer</h5>
                                  <p className="mb-0 small">You will be redirected to Payoneer website to complete your purchase securely.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card card-bordered shadow-none">
                            <div className="card-body p-6">
                              {/* check input */}
                              <div className="d-flex">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="cashonDelivery" />
                                  <label className="form-check-label ms-2" htmlFor="cashonDelivery" />
                                </div>
                                <div>
                                  {/* title */}
                                  <h5 className="mb-1 h6">Cash on Delivery</h5>
                                  <p className="mb-0 small">Pay with cash when your order is delivered.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="mt-5 d-flex justify-content-end">
                            <a href="#" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              Prev
                            </a>
                            <a href="#" className="btn btn-primary ms-2">Place Order</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 offset-xl-1 col-xl-4 col-lg-6">
                <div className="mt-4 mt-lg-0">
                  <div className="card shadow-sm">
                    <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                    <ul className="list-group list-group-flush">
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-2">
                            <img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="img-fluid" />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                            <span><small className="text-muted">.98 / lb</small></span>
                          </div>
                          <div className="col-2 col-md-2 text-center text-muted">
                            <span>1</span>
                          </div>
                          <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                            <span className="fw-bold">$5.00</span>
                          </div>
                        </div>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-2">
                            <img src="src/assets/images/products/product-img-2.jpg" alt="Ecommerce" className="img-fluid" />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">NutriChoice Digestive</h6>
                            <span><small className="text-muted">250g</small></span>
                          </div>
                          <div className="col-2 col-md-2 text-center text-muted">
                            <span>1</span>
                          </div>
                          <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                            <span className="fw-bold">$20.00</span>
                            <div className="text-decoration-line-through text-muted small">$26.00</div>
                          </div>
                        </div>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-2">
                            <img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="img-fluid" />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                            <span><small className="text-muted">1 kg</small></span>
                          </div>
                          <div className="col-2 col-md-2 text-center text-muted">
                            <span>1</span>
                          </div>
                          <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                            <span className="fw-bold">$15.00</span>
                            <div className="text-decoration-line-through text-muted small">$20.00</div>
                          </div>
                        </div>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-2">
                            <img src="src/assets/images/products/product-img-4.jpg" alt="Ecommerce" className="img-fluid" />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">Onion Flavour Potato</h6>
                            <span><small className="text-muted">250g</small></span>
                          </div>
                          <div className="col-2 col-md-2 text-center text-muted">
                            <span>1</span>
                          </div>
                          <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                            <span className="fw-bold">$15.00</span>
                            <div className="text-decoration-line-through text-muted small">$20.00</div>
                          </div>
                        </div>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div>Item Subtotal</div>
                          <div className="fw-bold">$70.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            Service Fee
                            <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" title="Default tooltip" />
                          </div>
                          <div className="fw-bold">$3.00</div>
                        </div>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item px-4 py-3">
                        <div className="d-flex align-items-center justify-content-between fw-bold">
                          <div>Subtotal</div>
                          <div>$73.00</div>
                        </div>
                      </li>
                    </ul>
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
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">Delete address</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
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
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-gray-400" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="addAddressModal" tabIndex={-1} aria-labelledby="addAddressModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              {/* heading */}
              <div>
                <h5 className="h6 mb-1" id="addAddressModalLabel">New Shipping Address</h5>
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
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
              </div>
              {/* col */}
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
              </div>
              {/* col */}
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Address Line 1" />
              </div>
              <div className="col-12">
                {/* button */}
                <input type="text" className="form-control" placeholder="Address Line 2" />
              </div>
              <div className="col-12">
                {/* button */}
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col-12">
                {/* button */}
                <select className="form-select">
                  <option selected>India</option>
                  <option value={1}>UK</option>
                  <option value={2}>USA</option>
                  <option value={3}>UAE</option>
                </select>
              </div>
              <div className="col-12">
                {/* button */}
                <select className="form-select">
                  <option selected>Gujarat</option>
                  <option value={1}>Northern Ireland</option>
                  <option value={2}>Alaska</option>
                  <option value={3}>Abu Dhabi</option>
                </select>
              </div>
              <div className="col-12">
                {/* button */}
                <input type="text" className="form-control" placeholder="Zip Code" />
              </div>
              <div className="col-12">
                {/* button */}
                <input type="text" className="form-control" placeholder="Business Name" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  {/* label */}
                  <label className="form-check-label" htmlFor="flexCheckDefault">Set as Default</label>
                </div>
              </div>
              {/* button */}
              <div className="col-12 text-end">
                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-primary" type="button">Save Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


       
  </>
  );
};



export default Shopcheckout;

