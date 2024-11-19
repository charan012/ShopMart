import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {


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
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </div>
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
          <div className="alert alert-danger p-2" role="alert">
            <a href="#!" className="alert-link">checkout now!</a>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-3 ps-0 border-top">
              class="row align-items-center"&gt;
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                  <div className="ms-3">
                    {/* title */}
                    <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                      </Link>
                    <span><small className="text-muted">.98 / lb</small></span>
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
              <div className="col-4 col-md-3 col-lg-3" />
              <div className="input-group input-spinner">
                <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
              </div>
            </li></ul></div>
        <div className="col-2 text-lg-end text-start text-md-end col-md-2">
          <span className="fw-bold">$5.00</span>
        </div>
      </div>
      <li className="list-group-item py-3 ps-0">
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
          <div className="col-4 col-md-3 col-lg-3">
            {/* input */}
            {/* input */}
            <div className="input-group input-spinner">
              <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
              <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
              <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
            </div>
          </div>
          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
            <span className="fw-bold text-danger">$20.00</span>
            <div className="text-decoration-line-through text-muted small">$26.00</div>
          </div>
        </div>
      </li>
      <li className="list-group-item py-3 ps-0">
        <div className="row align-items-center">
          <div className="col-6 col-md-6 col-lg-7">
            <div className="d-flex">
              <img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
              <div className="ms-3">
              <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                      </Link>
                <span><small className="text-muted">1 kg</small></span>
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
      <li className="list-group-item py-3 ps-0">
        <div className="row align-items-center">
          <div className="col-6 col-md-6 col-lg-7">
            <div className="d-flex">
              <img src="src/assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
              <div className="ms-3">
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
          <div className="col-4 col-md-3 col-lg-3">
            <div className="input-group input-spinner">
              <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
              <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
              <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
            </div>
          </div>
          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
            <span className="fw-bold">$15.00</span>
            <div className="text-decoration-line-through text-muted small">$20.00</div>
          </div>
        </div>
      </li>
      <li className="list-group-item py-3 ps-0 border-bottom">
        <div className="row align-items-center">
          <div className="col-6 col-md-6 col-lg-7">
            <div className="d-flex">
              <img src="src/assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
              <div className="ms-3">
              <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Salted Instant Popcorn</h6>
                      </Link>
                <span><small className="text-muted">100g</small></span>
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
      {/* btn */}

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
                    <Link className="nav-link active" aria-current="page" to="/Orders">
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
                {/* heading */}
                <h2 className="mb-6">Your Orders</h2>
                <div className="table-responsive-xxl border-0">
                  {/* Table */}
                  <table className="table mb-0 text-nowrap table-centered">
                    {/* Table Head */}
                    <thead className="bg-light">
                      <tr>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table body */}
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="fw-semibold text-inherit">
                            <h6 className="mb-0">Haldiram's Nagpur Aloo Bhujia</h6>
                          </a>
                          <span><small className="text-muted">400g</small></span>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#14899</a>
                        </td>
                        <td className="align-middle border-top-0">March 5, 2023</td>
                        <td className="align-middle border-top-0">1</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-warning">Processing</span>
                        </td>
                        <td className="align-middle border-top-0">$15.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="fw-semibold text-inherit">
                            <h6 className="mb-0">Nutri Choise Biscuit</h6>
                          </a>
                          <span><small className="text-muted">2 Pkt</small></span>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#14658</a>
                        </td>
                        <td className="align-middle border-top-0">July 9, 2023</td>
                        <td className="align-middle border-top-0">2</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-success">Completed</span>
                        </td>
                        <td className="align-middle border-top-0">$45.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">
                            <h6 className="mb-0">Cadbury Dairy Milk 5 Star Bites</h6>
                            <span><small className="text-muted">202 g</small></span>
                          </a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#13778</a>
                        </td>
                        <td className="align-middle border-top-0">Oct 03, 2023</td>
                        <td className="align-middle border-top-0">4</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-success">Completed</span>
                        </td>
                        <td className="align-middle border-top-0">$99.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="fw-semibold text-inherit">
                            <h6 className="mb-0">Onion Flavour Potato</h6>
                          </a>
                          <span><small className="text-muted">100 g</small></span>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#13746</a>
                        </td>
                        <td className="align-middle border-top-0">March 5, 2023</td>
                        <td className="align-middle border-top-0">1</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-success">Completed</span>
                        </td>
                        <td className="align-middle border-top-0">$12.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="fw-semibold text-inherit">
                            <h6 className="mb-0">Salted Instant Popcorn</h6>
                          </a>
                          <span><small className="text-muted">500 g</small></span>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#13566</a>
                        </td>
                        <td className="align-middle border-top-0">July 9, 2023</td>
                        <td className="align-middle border-top-0">2</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-danger">Cancel</span>
                        </td>
                        <td className="align-middle border-top-0">$6.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-top-0 w-0">
                          <a href="#"><img src="src/assets/images/products/product-img-6.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="fw-semibold text-inherit">
                            <h6 className="mb-0">Blueberry Greek Yogurt</h6>
                          </a>
                          <span><small className="text-muted">500 g</small></span>
                        </td>
                        <td className="align-middle border-top-0">
                          <a href="#" className="text-inherit">#12094</a>
                        </td>
                        <td className="align-middle border-top-0">Oct 03, 2023</td>
                        <td className="align-middle border-top-0">4</td>
                        <td className="align-middle border-top-0">
                          <span className="badge bg-success">Completed</span>
                        </td>
                        <td className="align-middle border-top-0">$18.00</td>
                        <td className="text-muted align-middle border-top-0">
                          <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            <Link className="nav-link active" aria-current="page" to="/Orders">
              <i className="feather-icon icon-shopping-bag me-2" />
              Your Orders
            </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
          <Link to="/Settings"className="nav-link active" aria-current="page" >
                      <i className="feather-icon icon-settings me-2" />
                      Settings
                    </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
          <Link to ="/Address" className="nav-link active" aria-current="page" >
                      <i className="feather-icon icon-map-pin me-2" />
                      Address
                    </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
          <Link to="/Payment" className="nav-link active" aria-current="page" >
                      <i className="feather-icon icon-credit-card me-2" />
                      Payment Method
                    </Link>
          </li>
          {/* nav item */}
          <li className="nav-item">
          <Link to="/Notification" className="nav-link active" aria-current="page" >
                      <i className="feather-icon icon-bell me-2" />
                      Notification
                    </Link>
          </li>
        </ul>
        <hr className="my-6" />
        <div>
          {/* nav  */}
          <ul className="nav flex-column nav-pills nav-pills-dark">
            {/* nav item */}
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page"  >
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

export default Order;