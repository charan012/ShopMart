import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shopfullwidth = () => {


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
                  <li className="breadcrumb-item"><a href="/Shopwide">Shop</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <section className="mt-8 mb-lg-14 mb-8">
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-lg-12">
              {/* page header */}
              <div className="card mb-4 bg-light border-0">
                {/* card body */}
                <div className="card-body p-9">
                  {/* title */}
                  <h2 className="mb-0 fs-1">Snacks &amp; Munchies</h2>
                </div>
              </div>
              {/* list icon */}
              <div className="d-lg-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-3 mb-md-0">
                    <span className="text-dark">24</span>
                    Products found
                  </p>
                </div>
                {/* icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <div>
                  <Link to="/ShoplistFil" className="text-muted me-3"><i className="bi bi-list-ul" /></Link>
                      <Link to="/ShopgridFil" className="me-3 active"><i className="bi bi-grid" /></Link>
                      <Link to="/Shopcol" className="me-3 text-muted"><i className="bi bi-grid-3x3-gap" /></Link>
                  </div>
                  <div className="d-flex mt-2 mt-lg-0">
                    <div className="me-2 flex-grow-1">
                      {/* select option */}
                      <select className="form-select">
                        <option selected>Show: 50</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                    <div>
                      {/* select option */}
                      <select className="form-select">
                        <option selected>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low">Price: High to Low</option>
                        <option value="Release Date">Release Date</option>
                        <option value="Avg. Rating">Avg. Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mt-2">
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</Link></h2>
                      <div>
                        {/* rating */}
                        <small className="text-warning">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5(149)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$18</span>
                          <span className="text-decoration-line-through text-muted">$24</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp; Biscuits</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">NutriChoice Digestive</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (25)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div><span className="text-dark">$24</span></div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp; Biscuits</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </small>
                        <span className="text-muted small">5 (469)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$32</span>
                          <span className="text-decoration-line-through text-muted">$35</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Onion Flavour Potato</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <i className="bi bi-star" />
                        </small>
                        <span className="text-muted small">3.5 (456)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$3</span>
                          <span className="text-decoration-line-through text-muted">$5</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Salted Instant Popcorn</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (39)</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">$18</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread &amp; Eggs</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Blueberry Greek Yogurt</Link></h2>
                      <div>
                        {/* rating */}
                        <small className="text-warning">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (189)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$18</span>
                          <span className="text-decoration-line-through text-muted">$24</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-7.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread &amp; Eggs</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Britannia Cheese Slices</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </small>
                        <span className="text-muted small">5 (345)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div><span className="text-dark">$24</span></div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-8.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Kellogg's Original Cereals</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4 (90)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$32</span>
                          <span className="text-decoration-line-through text-muted">$35</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (67)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$3</span>
                          <span className="text-decoration-line-through text-muted">$5</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col">
                  {/* card product */}
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <Link to="/Shopsingle">

                          {/* img */}
                          <img src="src/assets/images/products/product-img-10.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </Link>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* heading */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread &amp; Eggs</small></a>
                      </div>
                      <h2 className="fs-6"><Link to="/Shopsingle" className="text-inherit text-decoration-none">Amul Butter - 500 g</Link></h2>
                      {/* rating */}
                      <div className="text-warning">
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <i className="bi bi-star" />
                        </small>
                        <span className="text-muted small">3.5 (89)</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">$18</span>
                        </div>
                        {/* btn */}
                        <div>
                          <a href="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row mt-8">
                <div className="col">
                  {/* nav */}
                  <nav>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link mx-1" href="#" aria-label="Previous">
                          <i className="feather-icon icon-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link mx-1 active" href="#">1</a></li>
                      <li className="page-item"><a className="page-link mx-1" href="#">2</a></li>
                      <li className="page-item"><a className="page-link mx-1" href="#">...</a></li>
                      <li className="page-item"><a className="page-link mx-1" href="#">12</a></li>
                      <li className="page-item">
                        <a className="page-link mx-1" href="#" aria-label="Next">
                          <i className="feather-icon icon-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* modal */}
    {/* Modal */}
    <div className="modal fade" id="quickViewModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-8">
            <div className="position-absolute top-0 end-0 me-3 mt-3">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* img slide */}
                <div className="product productModal" id="productModal">
                  <div className="zoom" onmousemove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-1.jpg)'}}>
                    {/* img */}
                    <img src="src/assets/images/products/product-single-img-1.jpg" alt="" />
                  </div>
                  <div>
                    <div className="zoom" onmousemove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-2.jpg)'}}>
                      {/* img */}
                      <img src="src/assets/images/products/product-single-img-2.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="zoom" onmousemove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-3.jpg)'}}>
                      {/* img */}
                      <img src="src/assets/images/products/product-single-img-3.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="zoom" onmousemove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-4.jpg)'}}>
                      {/* img */}
                      <img src="src/assets/images/products/product-single-img-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                {/* product tools */}
                <div className="product-tools">
                  <div className="thumbnails row g-3" id="productModalThumbnails">
                    <div className="col-3">
                      <div className="thumbnails-img">
                        {/* img */}
                        <img src="src/assets/images/products/product-single-img-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="thumbnails-img">
                        {/* img */}
                        <img src="src/assets/images/products/product-single-img-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="thumbnails-img">
                        {/* img */}
                        <img src="src/assets/images/products/product-single-img-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="thumbnails-img">
                        {/* img */}
                        <img src="src/assets/images/products/product-single-img-4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-8 mt-6 mt-lg-0">
                  <a href="#!" className="mb-4 d-block">Bakery Biscuits</a>
                  <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                  <div className="mb-4">
                    <small className="text-warning">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </small>
                    <a href="#" className="ms-2">(30 reviews)</a>
                  </div>
                  <div className="fs-4">
                    <span className="fw-bold text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">$35</span>
                    <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
                  </div>
                  <hr className="my-6" />
                  <div className="mb-4">
                    <button type="button" className="btn btn-outline-secondary">250g</button>
                    <button type="button" className="btn btn-outline-secondary">500g</button>
                    <button type="button" className="btn btn-outline-secondary">1kg</button>
                  </div>
                  <div>
                    {/* input */}
                    {/* input */}
                    <div className="input-group input-spinner">
                      <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                      <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                      <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                    </div>
                  </div>
                  <div className="mt-3 row justify-content-start g-2 align-items-center">
                    <div className="col-lg-4 col-md-5 col-6 d-grid">
                      {/* button */}
                      {/* btn */}
                      <button type="button" className="btn btn-primary">
                        <i className="feather-icon icon-shopping-bag me-2" />
                        Add to cart
                      </button>
                    </div>
                    <div className="col-md-4 col-5">
                      {/* btn */}
                      <a className="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i className="bi bi-arrow-left-right" /></a>
                      <a className="btn btn-light" href="#!" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i className="feather-icon icon-heart" /></a>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div>
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td>Product Code:</td>
                          <td>FBB00255</td>
                        </tr>
                        <tr>
                          <td>Availability:</td>
                          <td>In Stock</td>
                        </tr>
                        <tr>
                          <td>Type:</td>
                          <td>Fruits</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>
                            <small>
                              01 day shipping.
                              <span className="text-muted">( Free pickup today)</span>
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

       
  </>
  );
};



export default Shopfullwidth;