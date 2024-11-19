import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentMethod = () => {


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
                              <img src="assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
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
                              <img src="assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
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
                      <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
                        <div className="pt-10 pe-lg-10">
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
                            <Link to="/Payment" className="nav-link">
                      <i className="feather-icon icon-credit-card me-2" />
                      Payment Method
                    </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                            <Link to="/Notification" className="nav-link" >
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
                          {/* heading */}
                          <div className="d-flex justify-content-between mb-6 align-items-center">
                            <h2 className="mb-0">Payment Methods</h2>
                            <a href="#" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">Add Payment</a>
                          </div>
                          <ul className="list-group list-group-flush">
                            {/* List group item */}
                            <li className="list-group-item py-5 px-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src=" assets/images/svg-graphics/visa.svg" alt="" />
                                  {/* text */}
                                  <div className="ms-4">
                                    <h5 className="mb-0 h6 h6">**** 1234</h5>
                                    <p className="mb-0 small">Expires in 10/2023</p>
                                  </div>
                                </div>
                                <div>
                                  {/* button */}
                                  <a href="#" className="btn btn-outline-gray-400 disabled btn-sm">Remove</a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src=" assets/images/svg-graphics/mastercard.svg" alt="" className="me-3" />
                                  <div>
                                    <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
                                    <p className="mb-0 small">Expires in 03/2026</p>
                                  </div>
                                </div>
                                <div>
                                  {/* button*/}
                                  <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Remove</a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src=" assets/images/svg-graphics/discover.svg" alt="" className="me-3" />
                                  <div>
                                    {/* text */}
                                    <h5 className="mb-0 h6">Discover ending in 1234</h5>
                                    <p className="mb-0 small">
                                      Expires in 07/2020
                                      <span className="badge bg-warning text-dark">This card is expired.</span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Remove</a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src=" assets/images/svg-graphics/americanexpress.svg" alt="" className="me-3" />
                                  {/* text */}
                                  <div>
                                    <h5 className="mb-0 h6">American Express ending in 1234</h5>
                                    <p className="mb-0 small">Expires in 12/2021</p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Remove</a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 py-5 border-bottom">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  {/* img */}
                                  <img src=" assets/images/svg-graphics/paypal.svg" alt="" className="me-3" />
                                  <div>
                                    {/* text */}
                                    <h5 className="mb-0 h6">Paypal Express ending in 1234</h5>
                                    <p className="mb-0 small">Expires in 10/2021</p>
                                  </div>
                                </div>
                                <div>
                                  {/* btn */}
                                  <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Remove</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              {/* modal */}
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasAccount" aria-labelledby="offcanvasAccountLabel">
                {/* offcanvas header */}
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasAccountLabel">Offcanvas</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                {/* offcanvas body */}
                <div className="offcanvas-body">
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
                      <Link className="nav-link" to="/Address">
                        <i className="feather-icon icon-map-pin me-2" />
                        Address
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link active" to="Payment">
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
                    {/* navs */}
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
              {/* Payment Modal */}
              <div className="modal fade" id="paymentModal" tabIndex={-1} role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                  {/* modal content */}
                  <div className="modal-content">
                    {/* modal header */}
                    <div className="modal-header align-items-center d-flex">
                      <h5 className="modal-title" id="paymentModalLabel">Add New Payment Method</h5>
                      {/* button */}
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <div>
                        {/* Form */}
                        <form className="row mb-4 needs-validation" noValidate>
                          <div className="mb-3 col-12 col-md-12 mb-4">
                            <h5 className="mb-3">Credit / Debit card</h5>
                            {/* Radio button */}
                            <div className="d-inline-flex">
                              <div className="form-check me-2">
                                <input type="radio" className="form-check-input" id="paymentRadioOne" name="paymentRadioOne" required />
                                <label className="form-check-label" htmlFor="paymentRadioOne"><img src=" assets/images/payment/american-express.svg" alt="" /></label>
                              </div>
                              {/* Radio button */}
                              <div className="form-check me-2">
                                <input type="radio" id="paymentRadioTwo" name="paymentRadioOne" className="form-check-input" />
                                <label className="form-check-label" htmlFor="paymentRadioTwo"><img src=" assets/images/payment/mastercard.svg" alt="" /></label>
                              </div>
                              {/* Radio button */}
                              <div className="form-check">
                                <input type="radio" id="paymentRadioFour" name="paymentRadioOne" className="form-check-input" />
                                <label className="form-check-label" htmlFor="paymentRadioFour"><img src=" assets/images/payment/visa.svg" alt="" /></label>
                              </div>
                            </div>
                          </div>
                          {/* Name on card */}
                          <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="nameoncard" className="form-label">Name on card</label>
                            <input id="nameoncard" type="text" className="form-control" name="nameoncard" placeholder="Name" required />
                            <div className="invalid-feedback">Please enter name.</div>
                          </div>
                          {/* Month */}
                          <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="validationCustomMonth" className="form-label">Month</label>
                            <select className="form-select" id="validationCustomMonth" required>
                              <option value>Month</option>
                              <option value="Jan">Jan</option>
                              <option value="Feb">Feb</option>
                              <option value="Mar">Mar</option>
                              <option value="Apr">Apr</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="Aug">Aug</option>
                              <option value="Sep">Sep</option>
                              <option value="Oct">Oct</option>
                              <option value="Nov">Nov</option>
                              <option value="Dec">Dec</option>
                            </select>
                            <div className="invalid-feedback">Please select month.</div>
                          </div>
                          {/* Year */}
                          <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="validationCustomYear" className="form-label">Year</label>
                            <select className="form-select" id="validationCustomYear" required>
                              <option value>Year</option>
                              <option value="June">2022</option>
                              <option value="July">2023</option>
                              <option value="August">2024</option>
                              <option value="Sep">2025</option>
                              <option value="Oct">2026</option>
                            </select>
                            <div className="invalid-feedback">Please select year.</div>
                          </div>
                          {/* Card number */}
                          <div className="mb-3 col-md-8 col-12">
                            <label htmlFor="card-mask" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="card-mask" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                            <div className="invalid-feedback">Please enter card number.</div>
                          </div>
                          {/* CVV */}
                          <div className="mb-3 col-md-4 col-12">
                            <div className="mb-3">
                              <label htmlFor="digit-mask" className="form-label">
                                CVV Code
                                <i className="fe fe-help-circle ms-1" data-bs-toggle="tooltip" data-placement="top" title="A 3 - digit number, typically printed on the back of a card." />
                              </label>
                              <input type="password" className="form-control" name="cvv" id="digit-mask" placeholder="xxx" maxLength={3} required />
                              <div className="invalid-feedback">Please enter cvv.</div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="col-md-6 col-12">
                            <button className="btn btn-primary" type="submit">Add New Card</button>
                            <button className="btn btn-outline-gray-400 text-muted" type="submit" data-bs-dismiss="modal">Close</button>
                          </div>
                        </form>
                        <span>
                          <strong>Note:</strong>
                          that you can later remove your card at the account setting page.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        export default PaymentMethod;   