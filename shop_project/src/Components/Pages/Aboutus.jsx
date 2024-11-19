import React, {useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css'; 
import { Link } from 'react-router-dom';


const Aboutus = () => {
  const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0; // Track the total scroll amount
        let scrollInterval = null;
        // Clone the items to make an infinite loop effect
        const cloneCards = () => {
            const sliderItems = slider.querySelectorAll('.item');
            sliderItems.forEach(item => {
                const clone = item.cloneNode(true); // Clone each card
                slider.appendChild(clone); // Append it to the end of the slider
            });
        };

        cloneCards(); // Call the clone function on mount

        const autoScroll = () => {
            scrollAmount = slider.clientWidth / 5;
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            if (slider.scrollLeft  >= slider.scrollWidth/2) {
                slider.scrollTo({ left: 0, behavior: 'instant' });
            } 
        };

         // Start auto-scrolling on an interval
    scrollInterval = setInterval(autoScroll, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(scrollInterval);
  }, []);
    // Add settings for the slider arrows
  const handlePrev = () => {
    const slider = sliderRef.current;
    const scrollAmount = slider.clientWidth / 5;
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = slider.scrollWidth / 2; // Jump to the end when scrolling left from the beginning
    }
    slider.scrollBy({
      left: -scrollAmount, // Scroll left by the width of the visible container
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    const scrollAmount = slider.clientWidth / 5;
    slider.scrollBy({
      left: scrollAmount, // Scroll right by the width of the visible container
      behavior: 'smooth',
    });
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollTo({ left: 0, behavior: 'instant' });
    }
  };
  return (
    <>        
       
       

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
                      <img src="src/src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
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
        <section className="mt-lg-14 mt-8">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="offset-lg-1 col-lg-10 col-12">
                <div className="row align-items-center mb-14">
                  <div className="col-md-6">
                    {/* text */}
                    <div className="ms-xxl-14 me-xxl-15 mb-8 mb-md-0 text-center text-md-start">
                      <h1 className="mb-6">The Future of Grocery Delivery:</h1>
                      <p className="mb-0 lead">By powering the future of grocery with our retail partners, we give everyone access to the food they love and more time to enjoy it together.</p>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col-md-6">
                    <div>
                      {/* img */}
                      <img src="src/assets/images/about/about-img.jpg" alt="" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row mb-12">
                  <div className="col-12">
                    <div className="mb-8">
                      {/* heading */}
                      <h2>Ready to get started?</h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* card */}
                    <div className="card bg-light mb-6 border-0">
                      {/* card body */}
                      <div className="card-body p-8">
                        <div className="mb-4">
                          {/* img */}
                          <img src=" src/assets/images/about/about-icons-1.svg" alt="" />
                        </div>
                        <h4>Grow my business with Freshcart</h4>
                        <p>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                        {/* btn */}
                        <a href="#" className="btn btn-dark mt-2">FreshCart Platform</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* card */}
                    <div className="card bg-light mb-6 border-0">
                      {/* card body */}
                      <div className="card-body p-8">
                        <div className="mb-4">
                          {/* img */}
                          <img src=" src/assets/images/about/about-icons-2.svg" alt="" />
                        </div>
                        <h4>Advertise my brand on Freshcart</h4>
                        <p>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                        {/* btn */}
                        <a href="#" className="btn btn-dark mt-2">FreshCart ads</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* card */}
                    <div className="card bg-light mb-6 border-0">
                      {/* card body */}
                      <div className="card-body p-8">
                        <div className="mb-4">
                          {/* img */}
                          <img src=" src/assets/images/about/about-icons-3.svg" alt="" />
                        </div>
                        <h4>Learn more about Freshcart</h4>
                        <p>Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.</p>
                        {/* btn */}
                        <a href="#" className="btn btn-dark mt-2">Learn More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {/* text */}
                    <p>
                      For assistance using Freshcart services, please visit our
                      <a href="#">Help Center</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section */}
        <section className="bg-success py-14">
          <div className="container">
            <div className="row">
              {/* col */}
              <div className="offset-lg-1 col-lg-10">
                <div className="row">
                  {/* col */}
                  <div className="col-xl-4 col-md-6">
                    <div className="text-white me-8 mb-12">
                      {/* text */}
                      <h2 className="text-white mb-4">Trusted by retailers. Loved by customers.</h2>
                      <p>We give everyone access to the food they love and more time to enjoy it together.</p>
                    </div>
                  </div>
                  <div className="row row-cols-2 row-cols-md-4">
                    {/* col */}
                    <div className="col mb-4 mb-md-0">
                      <h3 className="display-5 fw-bold text-white mb-0">500k</h3>
                      <span className="fs-6 text-white">Shoppers</span>
                    </div>
                    {/* col */}
                    <div className="col mb-4 mb-md-0">
                      <h3 className="display-5 fw-bold text-white mb-0">4,500+</h3>
                      <span className="fs-6 text-white">Cities</span>
                    </div>
                    {/* col */}
                    <div className="col mb-4 mb-md-0">
                      <h3 className="display-5 fw-bold text-white mb-0">40k+</h3>
                      <span className="fs-6 text-white">Stores</span>
                    </div>
                    {/* col */}
                    <div className="col mb-4 mb-md-0">
                      <h3 className="display-5 fw-bold text-white mb-0">650+</h3>
                      <span className="fs-6 text-white">Retail Brands</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* section */}
        <section className="mt-14">
                    {/* container */}
                    <div className="container">
                        <div className=" row ">
                            {/* col */}
                            <div className="  col-md-5 d-flex justify-content-center">
                                <div className="mb-11 text-center">
                                    {/* heading */}
                                    <h2>Our Leadership</h2>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex justify-content-end ">
                                <div className="slider-arrow slider-8-columns-arrow" id="slider-8-columns-arrows">
                                    <button className="slick-prev" onClick={handlePrev} style={{ marginRight: '10px' }}>&#10094;</button>
                                    <button className="slick-next" onClick={handleNext}>&#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        {/* style={{display:"flex", justifyContent:"start"}} */}

           {/* section */}

           <section className="mb-14">
                    {/* slider */}
                    <div className="team-slider mx-4" ref={sliderRef} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth'}}>
                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Chris Rogers</h5>
                                    <small>Vice President, Retail</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-1.png" alt="Chris Rogers" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Donna J. Shelton</h5>
                                    <small>Chief Financial Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-2.png" alt="Donna J. Shelton" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Daniel Leedom</h5>
                                    <small>Chief Communications Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-3.png" alt="Daniel Leedom" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Martha White</h5>
                                    <small>Chief Technology Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-4.png" alt="Martha White" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Victor Pugliese</h5>
                                    <small>Chief Human Resources Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-5.png" alt="Victor Pugliese" className="img-fluid" />
                            </div>
                        </div>



                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Donna J. Shelton</h5>
                                    <small>Chief Financial Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-2.png" alt="Donna J. Shelton" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Daniel Leedom</h5>
                                    <small>Chief Communications Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-3.png" alt="Daniel Leedom" className="img-fluid" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="item" style={{ flex: '0 0 20%', scrollSnapAlign: 'center' }}>
                            <div className="bg-light rounded">
                                {/* text */}
                                <div className="p-6">
                                    <h5 className="h6 mb-0">Martha White</h5>
                                    <small>Chief Technology Officer</small>
                                </div>
                                {/* img */}
                                <img src="src/assets/images/about/team-4.png" alt="Martha White" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
       </main>

      


    </>
  );
};



export default Aboutus;