import React from 'react';
import { Link } from 'react-router-dom';

const BlogCategory = () => {
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
          {/* section */}
          <div className="mt-4">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* col */}
                <div className="col-12">
                  {/* breadcrumb */}
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                      <li className="breadcrumb-item"><a href="#!">Blog</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog Category</li>
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
                <div className="col-12 mb-4">
                  {/* heading */}
                  <h1 className="fw-bold">Recipes</h1>
                </div>
              </div>
            </div>
          </section>
          {/* section */}
          <section className="mb-lg-14 mb-8">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* col */}
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-1.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  {/* text */}
                  <div>
                    <h2 className="h5"><a href="#!" className="text-inherit">Harissa Chickpeas with Whipped Feta</a></h2>
                    <p>In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec sed nisi gravida, molestie dolor molestie, congue sapien.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>22 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">12min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      <div className="img-zoom">
                        {/* img */}
                        <img src="src/assets/images/blog/blog-img-2.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">Almond Butter Chocolate Chip Zucchini Bars</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>20 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">8min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-3.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Company</a></div>
                  {/* text */}
                  <div>
                    <h2 className="h5"><a href="#!" className="text-inherit">Spicy Shrimp Tacos Garlic Cilantro Lime Slaw</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>18 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">5min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-4.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">Red Chile Chicken Tacos with Creamy Corn</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>16 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">9min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-5.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Retailer</a></div>
                  {/* text */}
                  <div>
                    <h2 className="h5"><a href="#!" className="text-inherit">Basic + Awesome Broccoli Cheese Soup</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>12 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">12min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-6.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">No-Boil Baked Penne with Meatballs</a></h2>
                    <p>Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin, turpis sit amet sollicitudin tristique, metus eros euismod tortor</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>14 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">6min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-7.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">Red Chile Chicken Tacos with Creamy Corn</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>16 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">9min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-8.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Retailer</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">Basic + Awesome Broccoli Cheese Soup</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>12 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">12min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-10">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-9.jpg" alt="" className="img-fluid w-100" />
                      </div>
                    </a>
                  </div>
                  <div className="mb-3"><a href="#!">Recipes</a></div>
                  <div>
                    {/* text */}
                    <h2 className="h5"><a href="#!" className="text-inherit">No-Boil Baked Penne with Meatballs</a></h2>
                    <p>Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin, turpis sit amet sollicitudin tristique, metus eros euismod tortor</p>
                    <div className="d-flex justify-content-between text-muted mt-4">
                      <span><small>14 April 2023</small></span>
                      <span>
                        <small>
                          Read time:
                          <span className="text-dark fw-bold">6min</span>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
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
          </section>
        </main>
      
      
   </>
  );
};

export default BlogCategory;
