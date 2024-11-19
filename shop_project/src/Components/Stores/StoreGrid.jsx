import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StoreGrid = () => {

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
        {/* section*/}
        <main>
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
                      <li className="breadcrumb-item"><Link to="/Stores">Stores</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Store Grid</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <section className="mt-8">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-12">
                  {/* heading */}
                  <div className="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
                    <div className="d-flex align-items-center">
                      <h1 className="mb-0 fw-bold">Stores</h1>
                    </div>
                    <div className="py-6">
                      {/* img */}
                      {/* img */}
                      <img src="src/assets/images/svg-graphics/store-graphics.svg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section */}
          <section className="mt-8 mb-lg-14 mb-8">
            <div className="container">
              {/* row */}
              <div className="row">
                {/* col */}
                <div className="col-12">
                  <div className="mb-3">
                    {/* text */}
                    <h6>
                      We have
                      <span className="text-primary">36</span>
                      vendors now
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
                {/* col */}
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-1.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">E-Grocery Super Market</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Organic</span>
                        <span className="me-2">Groceries</span>
                        <span>Butcher Shop</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">7.5 mi away</div>
                        {/* badge */}
                        <div className="badge text-bg-light border">In-store prices</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-2.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">DealShare Mart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Alcohol</span>
                        <span className="me-2">Groceries</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">7.2 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-3.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">DMart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Bakery</span>
                        <span>Deli</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 10:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">9.3 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-4.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">Blinkit Store</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Meal Kits</span>
                        <span className="me-2">Prepared Meals</span>
                        <span>Organic</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">40.5 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-5.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">StoreFront Super Market</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Bakery</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 11:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">28.1 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-6.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">BigBasket</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Deli</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 10:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">7.5 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-7.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">Swiggy Instamart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Meal Kits</span>
                        <span className="me-2">Prepared Meals</span>
                        <span>Organic</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">40.5 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-8.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">Online Grocery Mart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Bakery</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 11:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">28.1 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-9.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">Spencers</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Deli</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 10:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">7.5 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-2.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">DealShare Mart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Alcohol</span>
                        <span className="me-2">Groceries</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">7.2 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-3.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">DMart</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Groceries</span>
                        <span className="me-2">Bakery</span>
                        <span>Deli</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li><span className="text-primary">Delivery by 10:30pm</span></li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">9.3 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* card */}
                  <div className="card p-6 card-product">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/stores-logo/stores-logo-4.svg" alt="" className="rounded-circle icon-shape icon-xl" />
                    </div>
                    <div className="mt-4">
                      {/* content */}
                      <h2 className="mb-1 h5"><a href="#!" className="text-inherit">Blinkit Store</a></h2>
                      <div className="small text-muted">
                        <span className="me-2">Meal Kits</span>
                        <span className="me-2">Prepared Meals</span>
                        <span>Organic</span>
                      </div>
                      <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                          <li>Delivery</li>
                          <li>Pickup available</li>
                        </ul>
                      </div>
                      <div>
                        {/* badge */}
                        <div className="badge text-bg-light border">40.5 mi away</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

  
    </>
  );
};



export default StoreGrid;
