import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shopsingle2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const appleimages = ['apple-1', 'apple-2', 'apple-3', 'apple-4'];
  const banannaimages = ['bananna-1', 'bananna-2', 'bananna-3', 'bananna-4'];
  const [zoomStyle, setZoomStyle] = useState({});

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  const handleThumbnailClick1 = (index1 ) => {
    setActiveIndex1(index1);
}
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? appleimages.length - 1 : prevIndex - 1));
    setActiveIndex1((prevIndex) => (prevIndex === 0 ? banannaimages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === appleimages.length - 1 ? 0 : prevIndex + 1));
    setActiveIndex1((prevIndex) => (prevIndex === banannaimages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex,activeIndex1]);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / target.offsetWidth) * 100;
    const yPercent = (y / target.offsetHeight) * 100;

    setZoomStyle({
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      transform: 'scale(1.5)',
      transition: 'transform 0.3s ease, background-position 0.3s ease',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: 'scale(1)', backgroundPosition: 'center', transition: 'transform 0.3s ease' });
  };

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
        <div id="appleInfoContainer" className="container mt-4">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><a href="#">Bakery Biscuits</a></li>
                <li className="breadcrumb-item active" aria-current="page">Napolitanke Ljesnjak</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <section className="mt-8" id="appleStore" tabIndex={-1} aria-hidden="true">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-xl-6">
        <div className="carousel">
          <div className="carousel-inner">
            {appleimages.map((img, index) => (
              <div
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                key={index}
              >
                <div
                  className="zoom"
                  style={{
                    backgroundImage: `url(src/assets/images/homeproducts/${img}.jpg)`,
                    height: '400px',
                    backgroundSize: 'cover',
                    ...zoomStyle,
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={`src/assets/images/homeproducts/${img}.jpg`}
                    alt="Product"
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" onClick={goToPrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="red"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={goToNext}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="red"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 0 .708L10.293 8 4.646 13.646a.5.5 0 0 1-.708.708l6-6a.5.5 0 0 1 0-.708l-6-6a.5.5 0 0 1-.708 0"
              />
            </svg>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Thumbnail images */}
        <div className="slider slider-nav mt-4">
          <div className="row g-3">
            {appleimages.map((img, index) => (
              <div className="col-3" key={index}>
                <img
                  src={`src/assets/images/homeproducts/${img}.jpg`}
                  alt=""
                  className="w-100 rounded"
                  onClick={() => handleThumbnailClick(index)}
                  style={{
                    cursor: 'pointer',
                    height: '80px',
                    objectFit: 'cover',
                    border: activeIndex === index ? '3px solid blue' : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="col-md-7 col-xl-6">
        <div className="ps-lg-10 mt-6 mt-md-0">
          <a href="#!" className="mb-4 d-block">Bakery Biscuits</a>
          <h1 className="mb-1">Napolitanke Ljesnjak</h1>
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
          <div className="mb-5">
            <button type="button" className="btn btn-outline-secondary">250g</button>
            <button type="button" className="btn btn-outline-secondary">500g</button>
            <button type="button" className="btn btn-outline-secondary">1kg</button>
          </div>
          <div>
            <div className="input-group input-spinner">
              <input type="button" defaultValue="-" className="button-minus btn btn-sm" />
              <input type="number" step={1} max={10} defaultValue={1} className="quantity-field form-control-sm form-input" />
              <input type="button" defaultValue="+" className="button-plus btn btn-sm" />
            </div>
          </div>
          <div className="mt-3 row justify-content-start g-2 align-items-center">
            <div className="col-lg-4 col-md-5 col-6 d-grid">
              <button type="button" className="btn btn-primary">
                <i className="feather-icon icon-shopping-bag me-2" />
                Add to cart
              </button>
            </div>
            <div className="col-md-4 col-5">
              <a className="btn btn-light" href="#" data-bs-toggle="tooltip" aria-label="Compare">
                <i className="bi bi-arrow-left-right" />
              </a>
              <Link className="btn btn-light" to="/Shopwish" data-bs-toggle="tooltip" aria-label="Wishlist">
                <i className="feather-icon icon-heart" />
              </Link>
            </div>
          </div>
          <hr className="my-6" />
          <table className="table table-borderless mb-0">
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
                    01 day shipping. <span className="text-muted">( Free pickup today)</span>
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-8">
            <div className="dropdown">
              <a
                className="btn btn-outline-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Share
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"><i className="bi bi-facebook me-2" />Facebook</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-twitter me-2" />Twitter</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-instagram me-2" />Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          <section className="mt-lg-14 mt-8">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                      {/* btn */}
                      <button className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">
                        Product Details
                      </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                      {/* btn */}
                      <button className="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="false">
                        Information
                      </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                      {/* btn */}
                      <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">
                        Reviews
                      </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                      {/* btn */}
                      <button className="nav-link" id="sellerInfo-tab" data-bs-toggle="tab" data-bs-target="#sellerInfo-tab-pane" type="button" role="tab" aria-controls="sellerInfo-tab-pane" aria-selected="false" disabled>
                        Seller Info
                      </button>
                    </li>
                  </ul>
                  {/* tab content */}
                  <div className="tab-content" id="myTabContent">
                    {/* tab pane */}
                    <div className="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabIndex={0}>
                      <div className="my-8">
                        <div className="mb-5">
                          {/* text */}
                          <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc
                            sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </p>
                        </div>
                        <div className="mb-5">
                          <h5 className="mb-1">Storage Tips</h5>
                          <p className="mb-0">
                            Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus
                            facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        {/* content */}
                        <div className="mb-5">
                          <h5 className="mb-1">Unit</h5>
                          <p className="mb-0">3 units</p>
                        </div>
                        <div className="mb-5">
                          <h5 className="mb-1">Seller</h5>
                          <p className="mb-0">DMart Pvt. LTD</p>
                        </div>
                        <div>
                          <h5 className="mb-1">Disclaimer</h5>
                          <p className="mb-0">
                            Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* tab pane */}
                    <div className="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabIndex={0}>
                      <div className="my-8">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="mb-4">Details</h4>
                          </div>
                          <div className="col-12 col-lg-6">
                            <table className="table table-striped">
                              {/* table */}
                              <tbody>
                                <tr>
                                  <th>Weight</th>
                                  <td>1000 Grams</td>
                                </tr>
                                <tr>
                                  <th>Ingredient Type</th>
                                  <td>Vegetarian</td>
                                </tr>
                                <tr>
                                  <th>Brand</th>
                                  <td>Dmart</td>
                                </tr>
                                <tr>
                                  <th>Item Package Quantity</th>
                                  <td>1</td>
                                </tr>
                                <tr>
                                  <th>Form</th>
                                  <td>Larry the Bird</td>
                                </tr>
                                <tr>
                                  <th>Manufacturer</th>
                                  <td>Dmart</td>
                                </tr>
                                <tr>
                                  <th>Net Quantity</th>
                                  <td>340.0 Gram</td>
                                </tr>
                                <tr>
                                  <th>Product Dimensions</th>
                                  <td>9.6 x 7.49 x 18.49 cm</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-12 col-lg-6">
                            <table className="table table-striped">
                              {/* table */}
                              <tbody>
                                <tr>
                                  <th>ASIN</th>
                                  <td>SB0025UJ75W</td>
                                </tr>
                                <tr>
                                  <th>Best Sellers Rank</th>
                                  <td>#2 in Fruits</td>
                                </tr>
                                <tr>
                                  <th>Date First Available</th>
                                  <td>30 April 2022</td>
                                </tr>
                                <tr>
                                  <th>Item Weight</th>
                                  <td>500g</td>
                                </tr>
                                <tr>
                                  <th>Generic Name</th>
                                  <td>Banana Robusta</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* tab pane */}
                    <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabIndex={0}>
                      <div className="my-8">
                        {/* row */}
                        <div className="row">
                          <div className="col-md-4">
                            <div className="me-lg-12 mb-6 mb-md-0">
                              <div className="mb-5">
                                {/* title */}
                                <h4 className="mb-3">Customer reviews</h4>
                                <span>
                                  {/* rating */}
                                  <small className="text-warning">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                  </small>
                                  <span className="ms-3">4.1 out of 5</span>
                                  <small className="ms-3">11,130 global ratings</small>
                                </span>
                              </div>
                              <div className="mb-8">
                                {/* progress */}
                                <div className="d-flex align-items-center mb-2">
                                  <div className="text-nowrap me-3 text-muted">
                                    <span className="d-inline-block align-middle text-muted">5</span>
                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                  </div>
                                  <div className="w-100">
                                    <div className="progress" style={{height: '6px'}}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </div>
                                  <span className="text-muted ms-3">53%</span>
                                </div>
                                {/* progress */}
                                <div className="d-flex align-items-center mb-2">
                                  <div className="text-nowrap me-3 text-muted">
                                    <span className="d-inline-block align-middle text-muted">4</span>
                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                  </div>
                                  <div className="w-100">
                                    <div className="progress" style={{height: '6px'}}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={50} />
                                    </div>
                                  </div>
                                  <span className="text-muted ms-3">22%</span>
                                </div>
                                {/* progress */}
                                <div className="d-flex align-items-center mb-2">
                                  <div className="text-nowrap me-3 text-muted">
                                    <span className="d-inline-block align-middle text-muted">3</span>
                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                  </div>
                                  <div className="w-100">
                                    <div className="progress" style={{height: '6px'}}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={35} />
                                    </div>
                                  </div>
                                  <span className="text-muted ms-3">14%</span>
                                </div>
                                {/* progress */}
                                <div className="d-flex align-items-center mb-2">
                                  <div className="text-nowrap me-3 text-muted">
                                    <span className="d-inline-block align-middle text-muted">2</span>
                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                  </div>
                                  <div className="w-100">
                                    <div className="progress" style={{height: '6px'}}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '22%'}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={22} />
                                    </div>
                                  </div>
                                  <span className="text-muted ms-3">5%</span>
                                </div>
                                {/* progress */}
                                <div className="d-flex align-items-center mb-2">
                                  <div className="text-nowrap me-3 text-muted">
                                    <span className="d-inline-block align-middle text-muted">1</span>
                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                  </div>
                                  <div className="w-100">
                                    <div className="progress" style={{height: '6px'}}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '14%'}} aria-valuenow={14} aria-valuemin={0} aria-valuemax={14} />
                                    </div>
                                  </div>
                                  <span className="text-muted ms-3">7%</span>
                                </div>
                              </div>
                              <div className="d-grid">
                                <h4>Review this product</h4>
                                <p className="mb-0">Share your thoughts with other customers.</p>
                                <a href="#" className="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
                              </div>
                            </div>
                          </div>
                          {/* col */}
                          <div className="col-md-8">
                            <div className="mb-10">
                              <div className="d-flex justify-content-between align-items-center mb-8">
                                <div>
                                  {/* heading */}
                                  <h4>Reviews</h4>
                                </div>
                                <div>
                                  <select className="form-select">
                                    <option selected>Top Reviews</option>
                                    <option value="Most Recent">Most Recent</option>
                                  </select>
                                </div>
                              </div>
                              <div className="d-flex border-bottom pb-6 mb-6">
                                {/* img */}
                                {/* img */}
                                <img src="src/assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-lg" />
                                <div className="ms-5">
                                  <h6 className="mb-1">Shankar Subbaraman</h6>
                                  {/* select option */}
                                  {/* content */}
                                  <p className="small">
                                    <span className="text-muted">30 December 2022</span>
                                    <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                                  </p>
                                  {/* rating */}
                                  <div className="mb-2">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                  </div>
                                  {/* text*/}
                                  <p>
                                    Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                                    FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
                                  </p>
                                  <div>
                                    <div className="border icon-shape icon-lg border-2">
                                      {/* img */}
                                      <img src="src/assets/images/products/product-img-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="border icon-shape icon-lg border-2 ms-1">
                                      {/* img */}
                                      <img src="src/assets/images/products/product-img-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="border icon-shape icon-lg border-2 ms-1">
                                      {/* img */}
                                      <img src="src/assets/images/products/product-img-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                  </div>
                                  {/* icon */}
                                  <div className="d-flex justify-content-end mt-4">
                                    <a href="#" className="text-muted">
                                      <i className="feather-icon icon-thumbs-up me-1" />
                                      Helpful
                                    </a>
                                    <a href="#" className="text-muted ms-4">
                                      <i className="feather-icon icon-flag me-2" />
                                      Report abuse
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                {/* img */}
                                <img src="src/assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-lg" />
                                <div className="ms-5">
                                  <h6 className="mb-1">Robert Thomas</h6>
                                  {/* content */}
                                  <p className="small">
                                    <span className="text-muted">29 December 2022</span>
                                    <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                                  </p>
                                  {/* rating */}
                                  <div className="mb-2">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star text-warning" />
                                    <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                  </div>
                                  <p>
                                    Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                                    FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc..
                                  </p>
                                  {/* icon */}
                                  <div className="d-flex justify-content-end mt-4">
                                    <a href="#" className="text-muted">
                                      <i className="feather-icon icon-thumbs-up me-1" />
                                      Helpful
                                    </a>
                                    <a href="#" className="text-muted ms-4">
                                      <i className="feather-icon icon-flag me-2" />
                                      Report abuse
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                {/* img */}
                                <img src="src/assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-lg" />
                                <div className="ms-5">
                                  <h6 className="mb-1">Barbara Tay</h6>
                                  {/* content */}
                                  <p className="small">
                                    <span className="text-muted">28 December 2022</span>
                                    <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
                                  </p>
                                  {/* rating */}
                                  <div className="mb-2">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star text-warning" />
                                    <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                  </div>
                                  <p>Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.</p>
                                  {/* icon */}
                                  <div className="d-flex justify-content-end mt-4">
                                    <a href="#" className="text-muted">
                                      <i className="feather-icon icon-thumbs-up me-1" />
                                      Helpful
                                    </a>
                                    <a href="#" className="text-muted ms-4">
                                      <i className="feather-icon icon-flag me-2" />
                                      Report abuse
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                {/* img */}
                                <img src="src/assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-lg" />
                                <div className="ms-5 flex-grow-1">
                                  <h6 className="mb-1">Sandra Langevin</h6>
                                  {/* content */}
                                  <p className="small">
                                    <span className="text-muted">8 December 2022</span>
                                    <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
                                  </p>
                                  {/* rating */}
                                  <div className="mb-2">
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star-fill text-warning" />
                                    <i className="bi bi-star text-warning" />
                                    <span className="ms-3 text-dark fw-bold">Great product</span>
                                  </div>
                                  <p>Great product &amp; package. Delivery can be expedited.</p>
                                  {/* icon */}
                                  <div className="d-flex justify-content-end mt-4">
                                    <a href="#" className="text-muted">
                                      <i className="feather-icon icon-thumbs-up me-1" />
                                      Helpful
                                    </a>
                                    <a href="#" className="text-muted ms-4">
                                      <i className="feather-icon icon-flag me-2" />
                                      Report abuse
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <a href="#" className="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
                              </div>
                            </div>
                            <div>
                              {/* rating */}
                              <h3 className="mb-5">Create Review</h3>
                              <div className="border-bottom py-4 mb-4">
                                <h4 className="mb-3">Overall rating</h4>
                                <div className="rater" />
                              </div>
                              <div className="border-bottom py-4 mb-4">
                                <h4 className="mb-0">Rate Features</h4>
                                <div className="my-5">
                                  <h5>Flavor</h5>
                                  <div className="rater" />
                                </div>
                                <div className="my-5">
                                  <h5>Value for money</h5>
                                  <div className="rater" />
                                </div>
                                <div className="my-5">
                                  <h5>Scent</h5>
                                  <div className="rater" />
                                </div>
                              </div>
                              {/* form control */}
                              <div className="border-bottom py-4 mb-4">
                                <h5>Add a headline</h5>
                                <input type="text" className="form-control" placeholder="What’s most important to know" />
                              </div>
                              <div className="border-bottom py-4 mb-4">
                                <h5>Add a photo or video</h5>
                                <p>Shoppers find images and videos more helpful than text alone.</p>
                                {/* form */}
                                <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0" />
                              </div>
                              <div className="py-4 mb-4">
                                {/* heading */}
                                <h5>Add a written review</h5>
                                <textarea className="form-control" rows={3} placeholder="What did you like or dislike? What did you use this product for?" defaultValue={""} />
                              </div>
                              {/* button */}
                              <div className="d-flex justify-content-end">
                                <a href="#" className="btn btn-primary">Submit Review</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* tab pane */}
                    <div className="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab" tabIndex={0}>...</div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* section */}
          <section className="my-lg-14 my-14">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-12">
                  {/* heading */}
                  <h3>Related Items</h3>
                </div>
              </div>
              {/* row */}
              <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                {/* col */}
                <div className="col">
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        <a href="#!">
                          {/* img */}
                          <img src="src/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        </a>
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
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</a></h2>
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
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <a href="#!"><img src="src/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
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
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">NutriChoice Digestive</a></h2>
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
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <a href="#!"><img src="src/assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
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
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</a></h2>
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
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <a href="#!"><img src="src/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
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
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Onion Flavour Potato</a></h2>
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
                  <div className="card card-product">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <a href="#!"><img src="src/assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
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
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</a></h2>
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
                          <span className="text-dark">$6</span>
                          <span className="text-decoration-line-through text-muted">$10</span>
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
            </div>
          </section>
        </main>

                  {/* footer */}
      <footer className="footer">
        <div className="container">
          <div className="row g-4 py-4">
            <div className="col-12 col-md-12 col-lg-4">
              <h6 className="mb-4">Categories</h6>
              <div className="row">
                <div className="col-6">
                  {/* list */}
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Vegetables &amp; Fruits</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Breakfast &amp; instant food</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Bakery &amp; Biscuits</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Atta, rice &amp; dal</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Sauces &amp; spreads</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Organic &amp; gourmet</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Baby care</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Cleaning essentials</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Personal care</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  {/* list */}
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Dairy, bread &amp; eggs</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Cold drinks &amp; juices</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Tea, coffee &amp; drinks</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Masala, oil &amp; more</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Chicken, meat &amp; fish</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Paan corner</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Pharma &amp; wellness</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Home &amp; office</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Pet care</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <div className="row g-4">
                <div className="col-6 col-sm-6 col-md-3">
                  <h6 className="mb-4">Get to know us</h6>
                  {/* list */}
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Company</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">About</a></li>
                    <li className="nav-item mb-2"><a href="#1" className="nav-link">Blog</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Help Center</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Our Value</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <h6 className="mb-4">For Consumers</h6>
                  <ul className="nav flex-column">
                    {/* list */}
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Payments</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Shipping</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Product Returns</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">FAQ</a></li>
                    <li className="nav-item mb-2"><Link to="/Shopcheck" className="nav-link">Shop Checkout</Link>
</li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <h6 className="mb-4">Become a Shopper</h6>
                  <ul className="nav flex-column">
                    {/* list */}
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Shopper Opportunities</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Become a Shopper</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Earnings</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Ideas &amp; Guides</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">New Retailers</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <h6 className="mb-4">Freshcart programs</h6>
                  <ul className="nav flex-column">
                    {/* list */}
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart programs</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Gift Cards</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Promos &amp; Coupons</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart Ads</a></li>
                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Careers</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top py-4">
            <div className="row align-items-center">
              <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item text-dark">Payment Partners</li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/payment/amazonpay.svg" alt="" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/payment/american-express.svg" alt="" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/payment//mastercard.svg" alt="" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/payment/paypal.svg" alt="" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/payment/visa.svg" alt="" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 mt-4 mt-md-0">
                <ul className="list-inline mb-0 text-lg-end text-center">
                  <li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</li>
                  <li className="list-inline-item ms-4">
                    <a href="#!"><img src=" assets/images/appbutton/appstore-btn.svg" alt="" style={{width: '140px'}} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!"><img src=" assets/images/appbutton/googleplay-btn.svg" alt="" style={{width: '140px'}} /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-top py-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <span className="small text-muted">
                  © 2022
                  <span id="copyright">
                    -
                  </span>
                  FreshCart eCommerce HTML Template. All rights reserved. Powered by
                  <a href="https:// Virtue wireless pvt ltd.com/"> Virtue wireless pvt ltd</a>
                  .
                </span>
              </div>
              <div className="col-md-6">
                <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
                  <li className="list-inline-item text-muted">Follow us on</li>
                  <li className="list-inline-item me-1">
                    <a href="#!" className="btn btn-xs btn-social btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item me-1">
                    <a href="#!" className="btn btn-xs btn-social btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn btn-xs btn-social btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </> 
  );
};



export default Shopsingle2;




// import { Link, useParams } from 'react-router-dom';


// const images = [
//     { id: 1, src: '/src/image1.jpg', alt: 'Image 1', description: 'Details about Image 1' },
//     { id: 2, src: '/src/image2.jpg', alt: 'Image 2', description: 'Details about Image 2' },
//     { id: 3, src: '/src/image3.jpg', alt: 'Image 3', description: 'Details about Image 3' },
//   ];
// const Shopsingle2 = () => {
//     const { id } = useParams();
//     const image = images.find((img) => img.id === parseInt(id, 10));
  
//     if (!image) {
//       return <div>Image not found</div>;
//     }

//   return (
// <>

//     {/* navbar */}
//     <div className="border-bottom">
//         <div className="bg-light py-1">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 col-12 text-center text-md-start"><span>Super Value Deals - Save more with coupons</span></div>
//               <div className="col-6 text-end d-none d-md-block">
//                 <div className="dropdown selectBox">
//                   <a className="dropdown-toggle selectValue text-reset" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
//                     <span className="me-2">
//                       <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clipPath="url(#selectedlang)">
//                           <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
//                           <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
//                           <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
//                           <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
//                           <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
//                         </g>
//                         <defs>
//                           <clipPath id="selectedlang">
//                             <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
//                           </clipPath>
//                         </defs>
//                       </svg>
//                     </span>
//                     English
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <a className="dropdown-item" href="javascript:void(0)">
//                         <span className="me-2">
//                           <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clipPath="url(#selectedlang)">
//                               <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
//                               <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
//                               <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
//                               <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
//                               <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
//                             </g>
//                             <defs>
//                               <clipPath id="selectedlang">
//                                 <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </span>
//                         English
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="javascript:void(0)">
//                         <span className="me-2">
//                           <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clipPath="url(#clip0_5543_19751)">
//                               <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
//                               <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
//                               <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_5543_19751">
//                                 <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </span>
//                         Deutsch
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="py-5">
//           <div className="container">
//             <div className="row w-100 align-items-center gx-lg-2 gx-0">
//               <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
//                 <Link className="navbar-brand d-none d-lg-block" to="/">
//                   <img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" />
//                 </Link>
//                 <div className="d-flex justify-content-between w-100 d-lg-none">
//                   <Link className="navbar-brand" to="/">
//                     <img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
//                 <form action="#">
//                   <div className="input-group">
//                     <input className="form-control rounded" type="search" placeholder="Search for products" />
//                     <span className="input-group-append">
//                       <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
//                           <circle cx={11} cy={11} r={8} />
//                           <line x1={21} y1={21} x2="16.65" y2="16.65" />
//                         </svg>
//                       </button>
//                     </span>
//                   </div>
//                 </form>
//               </div>
//               <div className="col-md-2 col-xxl-3 d-none d-lg-block">
//                 {/* Button trigger modal */}
//                 <button type="button" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#locationModal">
//                   <i className="feather-icon icon-map-pin me-2" />
//                   Location
//                 </button>
//               </div>
//               <div className="col-lg-2 col-xxl-2 text-end col-md-6 col-7">
//                 <div className="list-inline">
//                   <div className="list-inline-item me-5">
//                   <Link to="/Shopwish" className="text-muted position-relative">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
//                         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                       </svg>
//                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
//                         5
//                         <span className="visually-hidden">unread messages</span>
//                       </span>
//                     </Link>
//                   </div>
//                   <div className="list-inline-item me-5">
//                     <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                         <circle cx={12} cy={7} r={4} />
//                       </svg>
//                     </a>
//                   </div>
//                   <div className="list-inline-item me-5 me-lg-0">
//                     <a className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
//                         <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
//                         <line x1={3} y1={6} x2={21} y2={6} />
//                         <path d="M16 10a4 4 0 0 1-8 0" />
//                       </svg>
//                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
//                         1
//                         <span className="visually-hidden">unread messages</span>
//                       </span>
//                     </a>
//                   </div>
//                   <div className="list-inline-item d-inline-block d-lg-none">
//                     {/* Button */}
//                     <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
//                         <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4" aria-label="Offcanvas navbar large">
//           <div className="container">
//             <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
//               <div className="offcanvas-header pb-1">
//                 <Link to="/"><img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" /></Link>
//                 <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//               </div>
//               <div className="offcanvas-body">
//                 <div className="d-block d-lg-none mb-4">
//                   <form action="#">
//                     <div className="input-group">
//                       <input className="form-control rounded" type="search" placeholder="Search for products" />
//                       <span className="input-group-append">
//                         <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
//                           <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
//                             <circle cx={11} cy={11} r={8} />
//                             <line x1={21} y1={21} x2="16.65" y2="16.65" />
//                           </svg>
//                         </button>
//                       </span>
//                     </div>
//                   </form>
//                   <div className="mt-2">
//                     <button type="button" className="btn btn-outline-gray-400 text-muted w-100" data-bs-toggle="modal" data-bs-target="#locationModal">
//                       <i className="feather-icon icon-map-pin me-2" />
//                       Pick Location
//                     </button>
//                   </div>
//                 </div>
//                 <div className="d-block d-lg-none mb-4">
//                   <a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
//                     <span className="me-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
//                         <rect x={3} y={3} width={7} height={7} />
//                         <rect x={14} y={3} width={7} height={7} />
//                         <rect x={14} y={14} width={7} height={7} />
//                         <rect x={3} y={14} width={7} height={7} />
//                       </svg>
//                     </span>
//                     All Departments
//                   </a>
//                   <div className="collapse mt-2" id="collapseExample">
//                     <div className="card card-body">
//                       <ul className="mb-0 list-unstyled">
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Dairy, Bread &amp; Eggs</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Snacks &amp; Munchies</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Fruits &amp; Vegetables</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Cold Drinks &amp; Juices</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Breakfast &amp; Instant Food</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Bakery &amp; Biscuits</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Chicken, Meat &amp; Fish</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="dropdown me-3 d-none d-lg-block">
//                   <button className="btn btn-primary px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                     <span className="me-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
//                         <rect x={3} y={3} width={7} height={7} />
//                         <rect x={14} y={3} width={7} height={7} />
//                         <rect x={14} y={14} width={7} height={7} />
//                         <rect x={3} y={14} width={7} height={7} />
//                       </svg>
//                     </span>
//                     All Departments
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Dairy, Bread &amp; Eggs</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Snacks &amp; Munchies</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Fruits &amp; Vegetables</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Cold Drinks &amp; Juices</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Breakfast &amp; Instant Food</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Bakery &amp; Biscuits</Link></li>
//                         <li><Link className="dropdown-item" to="/ShopgridFil">Chicken, Meat &amp; Fish</Link></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <ul className="navbar-nav align-items-center">
//                     <li className="nav-item dropdown w-100 w-lg-auto">
//                     </li><li className="nav-item dropdown">
//                       <Link className="nav-link" to="/" role="button" data-bs-toggle aria-expanded="false">Home</Link>      
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto">
//                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
//                       <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="/ShopgridFil">Shop Grid - Filter</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopcol">Shop Grid - 3 column</Link></li>
//                               <li><Link className="dropdown-item" to="/ShoplistFil">Shop List - Filter</Link></li>
//                               <li><Link className="dropdown-item" to="/ShopFil">Shop - Filter</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopwide">Shop Wide</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopsingle">Shop Single</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopsingv2">Shop Single v2</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopwish">Shop Wishlist</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopcart">Shop Cart</Link></li>
//                               <li><Link className="dropdown-item" to="/Shopcheck">Shop Checkout</Link></li>
//                       </ul>
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto">
//                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Stores</a>
//                       <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="/StoreList">Store List</Link></li>
//                                 <li><Link className="dropdown-item" to="/StoreGrid">Store Grid</Link></li>
//                                 <li><Link className="dropdown-item" to="/StoreSingle">Store Single</Link></li>
//                       </ul>
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
//                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mega menu</a>
//                       <div className="dropdown-menu pb-0">
//                         <div className="row p-2 p-lg-4">
//                           <div className="col-lg-3 col-12 mb-4 mb-lg-0">
//                           <h6 className="text-primary ps-3">Dairy, Bread & Eggs</h6>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Butter</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Milk Drinks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Curd & Yogurt</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Eggs</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Buns & Bakery</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Cheese</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Condensed Milk</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Dairy Products</Link>
//                                    </div>
//                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
//                                       <h6 className="text-primary ps-3">Breakfast & Instant Food</h6>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Breakfast Cereal</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Noodles, Pasta & Soup</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Frozen Veg Snacks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Frozen Non-Veg Snacks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Vermicelli</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Instant Mixes</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Batter</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Fruit and Juices</Link>
//                                    </div>

//                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
//                                       <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Soft Drinks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Fruit Juices</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Coldpress</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Water & Ice Cubes</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Soda & Mixers</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Health Drinks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Herbal Drinks</Link>
//                                       <Link className="dropdown-item" to="/ShopgridFil">Milk Drinks</Link>
//                                    </div>
//                           <div className="col-lg-3 col-12 mb-4 mb-lg-0">
//                             <div className="card border-0">
//                               <img src="src/assets/images/banner/menu-banner.jpg" alt="eCommerce HTML Template" className="img-fluid" />
//                               <div className="position-absolute ps-6 mt-8">
//                                 <h5 className="mb-0">
//                                   Dont miss this
//                                   <br />
//                                   offer today.
//                                 </h5>
//                                 <a href="#" className="btn btn-primary btn-sm mt-3">Shop Now</a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto">
//                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
//                       <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="/Blog">Blog</Link></li>
//                         <li><Link className="dropdown-item" to="/BlogSingle">Blog Single</Link></li>
//                         <li><Link className="dropdown-item" to="/BlogCategory">Blog Category</Link></li>
//                         <li><Link className="dropdown-item" to="/Aboutus">About us</Link></li>
//                         <li><Link className="dropdown-item" to="/Error">404 Error</Link></li>
//                         <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
//                       </ul>
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto">
//                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
//                       <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="/Signin">Sign in</Link></li>
//                       <li><Link className="dropdown-item" to="/Signup">Signup</Link></li>
//                       <li><Link className="dropdown-item" to="/ForgotPass">Forgot Password</Link></li>
//                       <li className="dropdown-submenu dropend">
//                         <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">My Account</a>
//                         <ul className="dropdown-menu">
//                           <li><Link className="dropdown-item" to="/Orders">Orders</Link></li>
//                           <li><Link className="dropdown-item" to="/Settings">Settings</Link></li>
//                           <li><Link className="dropdown-item" to="/Address">Address</Link></li>
//                           <li><Link className="dropdown-item" to="/Payment">Payment Method</Link></li>
//                           <li><Link className="dropdown-item" to="/Notification">Notification</Link></li>
//                         </ul>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="nav-item w-100 w-lg-auto">
//                       <Link className="nav-link" to="/Dashindex">Dashboard</Link>
//                     </li>
//                     <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
//                       <a className="nav-link" href="#" id="navbarDropdownDocs" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
//                       <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarDropdownDocs">
//                         <a className="dropdown-item align-items-start" href=" docs/index.html">
//                           <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-file-text text-primary" viewBox="0 0 16 16">
//                               <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
//                               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//                             </svg>
//                           </div>
//                           <div className="ms-3 lh-1">
//                             <h6 className="mb-1">Documentations</h6>
//                             <p className="mb-0 small">Browse the all documentation</p>
//                           </div>
//                         </a>
//                         <a className="dropdown-item align-items-start" href=" docs/changelog.html">
//                           <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-layers text-primary" viewBox="0 0 16 16">
//                               <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
//                             </svg>
//                           </div>
//                           <div className="ms-3 lh-1">
//                             <h6 className="mb-1">
//                               Changelog
//                               <span className="text-primary ms-1">v1.3.0</span>
//                             </h6>
//                             <p className="mb-0 small">See whats new</p>
//                           </div>
//                         </a>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//         {/* Modal */}
//         <div className="modal fade" id="userModal" tabIndex={-1} aria-labelledby="userModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content p-4">
//               <div className="modal-header border-0">
//                 <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//               </div>
//               <div className="modal-body">
//                 <form className="needs-validation" noValidate>
//                   <div className="mb-3">
//                     <label htmlFor="fullName" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" required />
//                     <div className="invalid-feedback">Please enter name.</div>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="email" placeholder="Enter Email address" required />
//                     <div className="invalid-feedback">Please enter email.</div>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
//                     <div className="invalid-feedback">Please enter password.</div>
//                     <small className="form-text">
//                       By Signup, you agree to our
//                       <a href="#!">Terms of Service</a>
//                       &amp;
//                       <a href="#!">Privacy Policy</a>
//                     </small>
//                   </div>
//                   <button type="submit" className="btn btn-primary">Sign Up</button>
//                 </form>
//               </div>
//               <div className="modal-footer border-0 justify-content-center">
//                 Already have an account?
//                 <a href="#">Sign in</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Shop Cart */}
//         <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
//           <div className="offcanvas-header border-bottom">
//             <div className="text-start">
//               <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shop Cart</h5>
//               <small>Location in 382480</small>
//             </div>
//             <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
//           </div>
//           <div className="offcanvas-body">
//             <div>
//               {/* alert */}
//               <div className="alert alert-danger p-2" role="alert">
//                 You’ve got FREE delivery. Start
//                 <a href="#!" className="alert-link">checkout now!</a>
//               </div>
//               <ul className="list-group list-group-flush">
//                 {/* list group */}
//                 <li className="list-group-item py-3 ps-0 border-top">
//                   {/* row */}
//                   <div className="row align-items-center">
//                     <div className="col-6 col-md-6 col-lg-7">
//                       <div className="d-flex">
//                         <img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
//                         <div className="ms-3">
//                           {/* title */}
//                           <Link to="/Shopsingle" className="text-inherit">
//                         <h6 className="mb-0">Haldirams Sev Bhujia</h6>
//                       </Link>
//                           <span><small className="text-muted">.98 / lb</small></span>
//                           {/* text */}
//                           <div className="mt-2 small lh-1">
//                             <a href="#!" className="text-decoration-none text-inherit">
//                               <span className="me-1 align-text-bottom">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
//                                   <polyline points="3 6 5 6 21 6" />
//                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//                                   <line x1={10} y1={11} x2={10} y2={17} />
//                                   <line x1={14} y1={11} x2={14} y2={17} />
//                                 </svg>
//                               </span>
//                               <span className="text-muted">Remove</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* input group */}
//                     <div className="col-4 col-md-3 col-lg-3">
//                       {/* input */}
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     {/* price */}
//                     <div className="col-2 text-lg-end text-start text-md-end col-md-2">
//                       <span className="fw-bold">$5.00</span>
//                     </div>
//                   </div>
//                 </li>
//                 {/* list group */}
//                 <li className="list-group-item py-3 ps-0">
//                   {/* row */}
//                   <div className="row align-items-center">
//                     <div className="col-6 col-md-6 col-lg-7">
//                       <div className="d-flex">
//                         <img src="src/assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
//                         <div className="ms-3">
//                         <Link to="/Shopsingle" className="text-inherit">
//                         <h6 className="mb-0">NutriChoice Digestive</h6>
//                       </Link>
//                           <span><small className="text-muted">250g</small></span>
//                           {/* text */}
//                           <div className="mt-2 small lh-1">
//                             <a href="#!" className="text-decoration-none text-inherit">
//                               <span className="me-1 align-text-bottom">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
//                                   <polyline points="3 6 5 6 21 6" />
//                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//                                   <line x1={10} y1={11} x2={10} y2={17} />
//                                   <line x1={14} y1={11} x2={14} y2={17} />
//                                 </svg>
//                               </span>
//                               <span className="text-muted">Remove</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* input group */}
//                     <div className="col-4 col-md-3 col-lg-3">
//                       {/* input */}
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     {/* price */}
//                     <div className="col-2 text-lg-end text-start text-md-end col-md-2">
//                       <span className="fw-bold text-danger">$20.00</span>
//                       <div className="text-decoration-line-through text-muted small">$26.00</div>
//                     </div>
//                   </div>
//                 </li>
//                 {/* list group */}
//                 <li className="list-group-item py-3 ps-0">
//                   {/* row */}
//                   <div className="row align-items-center">
//                     <div className="col-6 col-md-6 col-lg-7">
//                       <div className="d-flex">
//                         <img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
//                         <div className="ms-3">
//                           {/* title */}
//                           <Link to="/Shopsingle" className="text-inherit">
//                         <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
//                       </Link>
//                           <span><small className="text-muted">1 kg</small></span>
//                           {/* text */}
//                           <div className="mt-2 small lh-1">
//                             <a href="#!" className="text-decoration-none text-inherit">
//                               <span className="me-1 align-text-bottom">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
//                                   <polyline points="3 6 5 6 21 6" />
//                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//                                   <line x1={10} y1={11} x2={10} y2={17} />
//                                   <line x1={14} y1={11} x2={14} y2={17} />
//                                 </svg>
//                               </span>
//                               <span className="text-muted">Remove</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* input group */}
//                     <div className="col-4 col-md-3 col-lg-3">
//                       {/* input */}
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     {/* price */}
//                     <div className="col-2 text-lg-end text-start text-md-end col-md-2">
//                       <span className="fw-bold">$15.00</span>
//                       <div className="text-decoration-line-through text-muted small">$20.00</div>
//                     </div>
//                   </div>
//                 </li>
//                 {/* list group */}
//                 <li className="list-group-item py-3 ps-0">
//                   {/* row */}
//                   <div className="row align-items-center">
//                     <div className="col-6 col-md-6 col-lg-7">
//                       <div className="d-flex">
//                         <img src="src/assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
//                         <div className="ms-3">
//                           {/* title */}
//                           {/* title */}
//                           <Link to="/Shopsingle" className="text-inherit">
//                         <h6 className="mb-0">Onion Flavour Potato</h6>
//                       </Link>
//                           <span><small className="text-muted">250g</small></span>
//                           {/* text */}
//                           <div className="mt-2 small lh-1">
//                             <a href="#!" className="text-decoration-none text-inherit">
//                               <span className="me-1 align-text-bottom">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
//                                   <polyline points="3 6 5 6 21 6" />
//                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//                                   <line x1={10} y1={11} x2={10} y2={17} />
//                                   <line x1={14} y1={11} x2={14} y2={17} />
//                                 </svg>
//                               </span>
//                               <span className="text-muted">Remove</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* input group */}
//                     <div className="col-4 col-md-3 col-lg-3">
//                       {/* input */}
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     {/* price */}
//                     <div className="col-2 text-lg-end text-start text-md-end col-md-2">
//                       <span className="fw-bold">$15.00</span>
//                       <div className="text-decoration-line-through text-muted small">$20.00</div>
//                     </div>
//                   </div>
//                 </li>
//                 {/* list group */}
//                 <li className="list-group-item py-3 ps-0 border-bottom">
//                   {/* row */}
//                   <div className="row align-items-center">
//                     <div className="col-6 col-md-6 col-lg-7">
//                       <div className="d-flex">
//                         <img src="src/assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
//                         <div className="ms-3">
//                           {/* title */}
//                           <Link to="/Shopsingle" className="text-inherit">
//                         <h6 className="mb-0">Salted Instant Popcorn</h6>
//                       </Link>
//                           <span><small className="text-muted">100g</small></span>
//                           {/* text */}
//                           <div className="mt-2 small lh-1">
//                             <a href="#!" className="text-decoration-none text-inherit">
//                               <span className="me-1 align-text-bottom">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
//                                   <polyline points="3 6 5 6 21 6" />
//                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//                                   <line x1={10} y1={11} x2={10} y2={17} />
//                                   <line x1={14} y1={11} x2={14} y2={17} />
//                                 </svg>
//                               </span>
//                               <span className="text-muted">Remove</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* input group */}
//                     <div className="col-4 col-md-3 col-lg-3">
//                       {/* input */}
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     {/* price */}
//                     <div className="col-2 text-lg-end text-start text-md-end col-md-2">
//                       <span className="fw-bold">$15.00</span>
//                       <div className="text-decoration-line-through text-muted small">$25.00</div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//               {/* btn */}
//               <div className="d-flex justify-content-between mt-4">
//                 <a href="#!" className="btn btn-primary">Continue Shopping</a>
//                 <a href="#!" className="btn btn-dark">Update Cart</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Modal */}
//         <div className="modal fade" id="locationModal" tabIndex={-1} aria-labelledby="locationModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-sm modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-body p-6">
//                 <div className="d-flex justify-content-between align-items-start">
//                   <div>
//                     <h5 className="mb-1" id="locationModalLabel">Choose your Delivery Location</h5>
//                     <p className="mb-0 small">Enter your address and we will specify the offer you area.</p>
//                   </div>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//                 </div>
//                 <div className="my-5">
//                   <input type="search" className="form-control" placeholder="Search your area" />
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <h6 className="mb-0">Select Location</h6>
//                   <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Clear All</a>
//                 </div>
//                 <div>
//                   <div data-simplebar style={{height: '300px'}}>
//                     <div className="list-group list-group-flush">
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active">
//                         <span>Alabama</span>
//                         <span>Min:$20</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Alaska</span>
//                         <span>Min:$30</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Arizona</span>
//                         <span>Min:$50</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>California</span>
//                         <span>Min:$29</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Colorado</span>
//                         <span>Min:$80</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Florida</span>
//                         <span>Min:$90</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Arizona</span>
//                         <span>Min:$50</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>California</span>
//                         <span>Min:$29</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Colorado</span>
//                         <span>Min:$80</span>
//                       </a>
//                       <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
//                         <span>Florida</span>
//                         <span>Min:$90</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <main>
//           <div className="mt-4">
//             <div className="container">
//               {/* row */}
//               <div className="row">
//                 {/* col */}
//                 <div className="col-12">
//                   {/* breadcrumb */}
//                   <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb mb-0">
//                       <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
//                       <li className="breadcrumb-item"><a href="#">Bakery Biscuits</a></li>
//                       <li className="breadcrumb-item active" aria-current="page">Napolitanke Ljesnjak</li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <section className="mt-8">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-5 col-xl-6">
//                   <div className="slider slider-for">
//                     <div>
//                       <div className="zoom" onMouseMove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-1.jpg)'}}>
//                         {/* img */}
//                         {/* img */}
//                         <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
//                       </div>
//                     </div>
//                     <div className="slider slider-for" >
//                       <div className="zoom" onMouseMove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-2.jpg)'}}>
//                         {/* img */}
//                         {/* img */}
//                         <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="zoom" onMouseMove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-3.jpg)'}}>
//                         {/* img */}
//                         {/* img */}
//                         <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="zoom" onMouseMove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-1.jpg)'}}>
//                         {/* img */}
//                         {/* img */}
//                         <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="zoom" onMouseMove="zoom(event)" style={{backgroundImage: 'url(src/assets/images/products/product-single-img-4.jpg)'}}>
//                         {/* img */}
//                         {/* img */}
//                         <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="slider slider-nav mt-4">
//                     <div>
//                       <img src="src/assets/images/products/product-single-img-1.jpg" alt="" className="w-100 rounded" />
//                     </div>
//                     <div>
//                       <img src="src/assets/images/products/product-single-img-2.jpg" alt="" className="w-100 rounded" />
//                     </div>
//                     <div>
//                       <img src="src/assets/images/products/product-single-img-3.jpg" alt="" className="w-100 rounded" />
//                     </div>
//                     <div>
//                       <img src="src/assets/images/products/product-single-img-1.jpg" alt="" className="w-100 rounded" />
//                     </div>
//                     <div>
//                       <img src="src/assets/images/products/product-single-img-4.jpg" alt="" className="w-100 rounded" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-7 col-xl-6">
//                   <div className="ps-lg-10 mt-6 mt-md-0">
//                     {/* content */}
//                     <a href="#!" className="mb-4 d-block">Bakery Biscuits</a>
//                     {/* heading */}
//                     <h1 className="mb-1">Napolitanke Ljesnjak</h1>
//                     <div className="mb-4">
//                       {/* rating */}
//                       {/* rating */}
//                       <small className="text-warning">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-half" />
//                       </small>
//                       <a href="#" className="ms-2">(30 reviews)</a>
//                     </div>
//                     <div className="fs-4">
//                       {/* price */}
//                       <span className="fw-bold text-dark">$32</span>
//                       <span className="text-decoration-line-through text-muted">$35</span>
//                       <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
//                     </div>
//                     {/* hr */}
//                     <hr className="my-6" />
//                     <div className="mb-5">
//                       <button type="button" className="btn btn-outline-secondary">250g</button>
//                       {/* btn */}
//                       <button type="button" className="btn btn-outline-secondary">500g</button>
//                       {/* btn */}
//                       <button type="button" className="btn btn-outline-secondary">1kg</button>
//                     </div>
//                     <div>
//                       {/* input */}
//                       <div className="input-group input-spinner">
//                         <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
//                         <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
//                         <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
//                       </div>
//                     </div>
//                     <div className="mt-3 row justify-content-start g-2 align-items-center">
//                       <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
//                         {/* button */}
//                         {/* btn */}
//                         <button type="button" className="btn btn-primary">
//                           <i className="feather-icon icon-shopping-bag me-2" />
//                           Add to cart
//                         </button>
//                       </div>
//                       <div className="col-md-4 col-4">
//                         {/* btn */}
//                         <a className="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         <Link className="btn btn-light" to="/Shopwish" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i className="feather-icon icon-heart" /></Link>
//                       </div>
//                     </div>
//                     {/* hr */}
//                     <hr className="my-6" />
//                     <div>
//                       {/* table */}
//                       <table className="table table-borderless mb-0">
//                         <tbody>
//                           <tr>
//                             <td>Product Code:</td>
//                             <td>FBB00255</td>
//                           </tr>
//                           <tr>
//                             <td>Availability:</td>
//                             <td>In Stock</td>
//                           </tr>
//                           <tr>
//                             <td>Type:</td>
//                             <td>Fruits</td>
//                           </tr>
//                           <tr>
//                             <td>Shipping:</td>
//                             <td>
//                               <small>
//                                 01 day shipping.
//                                 <span className="text-muted">( Free pickup today)</span>
//                               </small>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="mt-8">
//                       {/* dropdown */}
//                       <div className="dropdown">
//                         <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Share</a>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <a className="dropdown-item" href="#">
//                               <i className="bi bi-facebook me-2" />
//                               Facebook
//                             </a>
//                           </li>
//                           <li>
//                             <a className="dropdown-item" href="#">
//                               <i className="bi bi-twitter me-2" />
//                               Twitter
//                             </a>
//                           </li>
//                           <li>
//                             <a className="dropdown-item" href="#">
//                               <i className="bi bi-instagram me-2" />
//                               Instagram
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="mt-lg-14 mt-8">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-12">
//                   <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
//                     {/* nav item */}
//                     <li className="nav-item" role="presentation">
//                       {/* btn */}
//                       <button className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">
//                         Product Details
//                       </button>
//                     </li>
//                     {/* nav item */}
//                     <li className="nav-item" role="presentation">
//                       {/* btn */}
//                       <button className="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="false">
//                         Information
//                       </button>
//                     </li>
//                     {/* nav item */}
//                     <li className="nav-item" role="presentation">
//                       {/* btn */}
//                       <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">
//                         Reviews
//                       </button>
//                     </li>
//                     {/* nav item */}
//                     <li className="nav-item" role="presentation">
//                       {/* btn */}
//                       <button className="nav-link" id="sellerInfo-tab" data-bs-toggle="tab" data-bs-target="#sellerInfo-tab-pane" type="button" role="tab" aria-controls="sellerInfo-tab-pane" aria-selected="false" disabled>
//                         Seller Info
//                       </button>
//                     </li>
//                   </ul>
//                   {/* tab content */}
//                   <div className="tab-content" id="myTabContent">
//                     {/* tab pane */}
//                     <div className="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabIndex={0}>
//                       <div className="my-8">
//                         <div className="mb-5">
//                           {/* text */}
//                           <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
//                           <p className="mb-0">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc
//                             sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur
//                             adipiscing elit.
//                           </p>
//                         </div>
//                         <div className="mb-5">
//                           <h5 className="mb-1">Storage Tips</h5>
//                           <p className="mb-0">
//                             Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus
//                             facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           </p>
//                         </div>
//                         {/* content */}
//                         <div className="mb-5">
//                           <h5 className="mb-1">Unit</h5>
//                           <p className="mb-0">3 units</p>
//                         </div>
//                         <div className="mb-5">
//                           <h5 className="mb-1">Seller</h5>
//                           <p className="mb-0">DMart Pvt. LTD</p>
//                         </div>
//                         <div>
//                           <h5 className="mb-1">Disclaimer</h5>
//                           <p className="mb-0">
//                             Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     {/* tab pane */}
//                     <div className="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabIndex={0}>
//                       <div className="my-8">
//                         <div className="row">
//                           <div className="col-12">
//                             <h4 className="mb-4">Details</h4>
//                           </div>
//                           <div className="col-12 col-lg-6">
//                             <table className="table table-striped">
//                               {/* table */}
//                               <tbody>
//                                 <tr>
//                                   <th>Weight</th>
//                                   <td>1000 Grams</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Ingredient Type</th>
//                                   <td>Vegetarian</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Brand</th>
//                                   <td>Dmart</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Item Package Quantity</th>
//                                   <td>1</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Form</th>
//                                   <td>Larry the Bird</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Manufacturer</th>
//                                   <td>Dmart</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Net Quantity</th>
//                                   <td>340.0 Gram</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Product Dimensions</th>
//                                   <td>9.6 x 7.49 x 18.49 cm</td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                           </div>
//                           <div className="col-12 col-lg-6">
//                             <table className="table table-striped">
//                               {/* table */}
//                               <tbody>
//                                 <tr>
//                                   <th>ASIN</th>
//                                   <td>SB0025UJ75W</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Best Sellers Rank</th>
//                                   <td>#2 in Fruits</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Date First Available</th>
//                                   <td>30 April 2022</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Item Weight</th>
//                                   <td>500g</td>
//                                 </tr>
//                                 <tr>
//                                   <th>Generic Name</th>
//                                   <td>Banana Robusta</td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* tab pane */}
//                     <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabIndex={0}>
//                       <div className="my-8">
//                         {/* row */}
//                         <div className="row">
//                           <div className="col-md-4">
//                             <div className="me-lg-12 mb-6 mb-md-0">
//                               <div className="mb-5">
//                                 {/* title */}
//                                 <h4 className="mb-3">Customer reviews</h4>
//                                 <span>
//                                   {/* rating */}
//                                   <small className="text-warning">
//                                     <i className="bi bi-star-fill" />
//                                     <i className="bi bi-star-fill" />
//                                     <i className="bi bi-star-fill" />
//                                     <i className="bi bi-star-fill" />
//                                     <i className="bi bi-star-half" />
//                                   </small>
//                                   <span className="ms-3">4.1 out of 5</span>
//                                   <small className="ms-3">11,130 global ratings</small>
//                                 </span>
//                               </div>
//                               <div className="mb-8">
//                                 {/* progress */}
//                                 <div className="d-flex align-items-center mb-2">
//                                   <div className="text-nowrap me-3 text-muted">
//                                     <span className="d-inline-block align-middle text-muted">5</span>
//                                     <i className="bi bi-star-fill ms-1 small text-warning" />
//                                   </div>
//                                   <div className="w-100">
//                                     <div className="progress" style={{height: '6px'}}>
//                                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
//                                     </div>
//                                   </div>
//                                   <span className="text-muted ms-3">53%</span>
//                                 </div>
//                                 {/* progress */}
//                                 <div className="d-flex align-items-center mb-2">
//                                   <div className="text-nowrap me-3 text-muted">
//                                     <span className="d-inline-block align-middle text-muted">4</span>
//                                     <i className="bi bi-star-fill ms-1 small text-warning" />
//                                   </div>
//                                   <div className="w-100">
//                                     <div className="progress" style={{height: '6px'}}>
//                                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={50} />
//                                     </div>
//                                   </div>
//                                   <span className="text-muted ms-3">22%</span>
//                                 </div>
//                                 {/* progress */}
//                                 <div className="d-flex align-items-center mb-2">
//                                   <div className="text-nowrap me-3 text-muted">
//                                     <span className="d-inline-block align-middle text-muted">3</span>
//                                     <i className="bi bi-star-fill ms-1 small text-warning" />
//                                   </div>
//                                   <div className="w-100">
//                                     <div className="progress" style={{height: '6px'}}>
//                                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={35} />
//                                     </div>
//                                   </div>
//                                   <span className="text-muted ms-3">14%</span>
//                                 </div>
//                                 {/* progress */}
//                                 <div className="d-flex align-items-center mb-2">
//                                   <div className="text-nowrap me-3 text-muted">
//                                     <span className="d-inline-block align-middle text-muted">2</span>
//                                     <i className="bi bi-star-fill ms-1 small text-warning" />
//                                   </div>
//                                   <div className="w-100">
//                                     <div className="progress" style={{height: '6px'}}>
//                                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '22%'}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={22} />
//                                     </div>
//                                   </div>
//                                   <span className="text-muted ms-3">5%</span>
//                                 </div>
//                                 {/* progress */}
//                                 <div className="d-flex align-items-center mb-2">
//                                   <div className="text-nowrap me-3 text-muted">
//                                     <span className="d-inline-block align-middle text-muted">1</span>
//                                     <i className="bi bi-star-fill ms-1 small text-warning" />
//                                   </div>
//                                   <div className="w-100">
//                                     <div className="progress" style={{height: '6px'}}>
//                                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '14%'}} aria-valuenow={14} aria-valuemin={0} aria-valuemax={14} />
//                                     </div>
//                                   </div>
//                                   <span className="text-muted ms-3">7%</span>
//                                 </div>
//                               </div>
//                               <div className="d-grid">
//                                 <h4>Review this product</h4>
//                                 <p className="mb-0">Share your thoughts with other customers.</p>
//                                 <a href="#" className="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
//                               </div>
//                             </div>
//                           </div>
//                           {/* col */}
//                           <div className="col-md-8">
//                             <div className="mb-10">
//                               <div className="d-flex justify-content-between align-items-center mb-8">
//                                 <div>
//                                   {/* heading */}
//                                   <h4>Reviews</h4>
//                                 </div>
//                                 <div>
//                                   <select className="form-select">
//                                     <option selected>Top Reviews</option>
//                                     <option value="Most Recent">Most Recent</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="d-flex border-bottom pb-6 mb-6">
//                                 {/* img */}
//                                 {/* img */}
//                                 <img src="src/assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-lg" />
//                                 <div className="ms-5">
//                                   <h6 className="mb-1">Shankar Subbaraman</h6>
//                                   {/* select option */}
//                                   {/* content */}
//                                   <p className="small">
//                                     <span className="text-muted">30 December 2022</span>
//                                     <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
//                                   </p>
//                                   {/* rating */}
//                                   <div className="mb-2">
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
//                                   </div>
//                                   {/* text*/}
//                                   <p>
//                                     Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
//                                     FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
//                                   </p>
//                                   <div>
//                                     <div className="border icon-shape icon-lg border-2">
//                                       {/* img */}
//                                       <img src="src/assets/images/products/product-img-1.jpg" alt="" className="img-fluid" />
//                                     </div>
//                                     <div className="border icon-shape icon-lg border-2 ms-1">
//                                       {/* img */}
//                                       <img src="src/assets/images/products/product-img-2.jpg" alt="" className="img-fluid" />
//                                     </div>
//                                     <div className="border icon-shape icon-lg border-2 ms-1">
//                                       {/* img */}
//                                       <img src="src/assets/images/products/product-img-3.jpg" alt="" className="img-fluid" />
//                                     </div>
//                                   </div>
//                                   {/* icon */}
//                                   <div className="d-flex justify-content-end mt-4">
//                                     <a href="#" className="text-muted">
//                                       <i className="feather-icon icon-thumbs-up me-1" />
//                                       Helpful
//                                     </a>
//                                     <a href="#" className="text-muted ms-4">
//                                       <i className="feather-icon icon-flag me-2" />
//                                       Report abuse
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="d-flex border-bottom pb-6 mb-6 pt-4">
//                                 {/* img */}
//                                 <img src="src/assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-lg" />
//                                 <div className="ms-5">
//                                   <h6 className="mb-1">Robert Thomas</h6>
//                                   {/* content */}
//                                   <p className="small">
//                                     <span className="text-muted">29 December 2022</span>
//                                     <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
//                                   </p>
//                                   {/* rating */}
//                                   <div className="mb-2">
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star text-warning" />
//                                     <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
//                                   </div>
//                                   <p>
//                                     Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
//                                     FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc..
//                                   </p>
//                                   {/* icon */}
//                                   <div className="d-flex justify-content-end mt-4">
//                                     <a href="#" className="text-muted">
//                                       <i className="feather-icon icon-thumbs-up me-1" />
//                                       Helpful
//                                     </a>
//                                     <a href="#" className="text-muted ms-4">
//                                       <i className="feather-icon icon-flag me-2" />
//                                       Report abuse
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="d-flex border-bottom pb-6 mb-6 pt-4">
//                                 {/* img */}
//                                 <img src="src/assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-lg" />
//                                 <div className="ms-5">
//                                   <h6 className="mb-1">Barbara Tay</h6>
//                                   {/* content */}
//                                   <p className="small">
//                                     <span className="text-muted">28 December 2022</span>
//                                     <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
//                                   </p>
//                                   {/* rating */}
//                                   <div className="mb-2">
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star text-warning" />
//                                     <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
//                                   </div>
//                                   <p>Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.</p>
//                                   {/* icon */}
//                                   <div className="d-flex justify-content-end mt-4">
//                                     <a href="#" className="text-muted">
//                                       <i className="feather-icon icon-thumbs-up me-1" />
//                                       Helpful
//                                     </a>
//                                     <a href="#" className="text-muted ms-4">
//                                       <i className="feather-icon icon-flag me-2" />
//                                       Report abuse
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="d-flex border-bottom pb-6 mb-6 pt-4">
//                                 {/* img */}
//                                 <img src="src/assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-lg" />
//                                 <div className="ms-5 flex-grow-1">
//                                   <h6 className="mb-1">Sandra Langevin</h6>
//                                   {/* content */}
//                                   <p className="small">
//                                     <span className="text-muted">8 December 2022</span>
//                                     <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
//                                   </p>
//                                   {/* rating */}
//                                   <div className="mb-2">
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star-fill text-warning" />
//                                     <i className="bi bi-star text-warning" />
//                                     <span className="ms-3 text-dark fw-bold">Great product</span>
//                                   </div>
//                                   <p>Great product &amp; package. Delivery can be expedited.</p>
//                                   {/* icon */}
//                                   <div className="d-flex justify-content-end mt-4">
//                                     <a href="#" className="text-muted">
//                                       <i className="feather-icon icon-thumbs-up me-1" />
//                                       Helpful
//                                     </a>
//                                     <a href="#" className="text-muted ms-4">
//                                       <i className="feather-icon icon-flag me-2" />
//                                       Report abuse
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div>
//                                 <a href="#" className="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
//                               </div>
//                             </div>
//                             <div>
//                               {/* rating */}
//                               <h3 className="mb-5">Create Review</h3>
//                               <div className="border-bottom py-4 mb-4">
//                                 <h4 className="mb-3">Overall rating</h4>
//                                 <div className="rater" />
//                               </div>
//                               <div className="border-bottom py-4 mb-4">
//                                 <h4 className="mb-0">Rate Features</h4>
//                                 <div className="my-5">
//                                   <h5>Flavor</h5>
//                                   <div className="rater" />
//                                 </div>
//                                 <div className="my-5">
//                                   <h5>Value for money</h5>
//                                   <div className="rater" />
//                                 </div>
//                                 <div className="my-5">
//                                   <h5>Scent</h5>
//                                   <div className="rater" />
//                                 </div>
//                               </div>
//                               {/* form control */}
//                               <div className="border-bottom py-4 mb-4">
//                                 <h5>Add a headline</h5>
//                                 <input type="text" className="form-control" placeholder="What’s most important to know" />
//                               </div>
//                               <div className="border-bottom py-4 mb-4">
//                                 <h5>Add a photo or video</h5>
//                                 <p>Shoppers find images and videos more helpful than text alone.</p>
//                                 {/* form */}
//                                 <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0" />
//                               </div>
//                               <div className="py-4 mb-4">
//                                 {/* heading */}
//                                 <h5>Add a written review</h5>
//                                 <textarea className="form-control" rows={3} placeholder="What did you like or dislike? What did you use this product for?" defaultValue={""} />
//                               </div>
//                               {/* button */}
//                               <div className="d-flex justify-content-end">
//                                 <a href="#" className="btn btn-primary">Submit Review</a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* tab pane */}
//                     <div className="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab" tabIndex={0}>...</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* section */}
//           <section className="my-lg-14 my-14">
//             <div className="container">
//               {/* row */}
//               <div className="row">
//                 <div className="col-12">
//                   {/* heading */}
//                   <h3>Related Items</h3>
//                 </div>
//               </div>
//               {/* row */}
//               <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
//                 {/* col */}
//                 <div className="col">
//                   <div className="card card-product">
//                     <div className="card-body">
//                       {/* badge */}
//                       <div className="text-center position-relative">
//                         <div className="position-absolute top-0 start-0">
//                           <span className="badge bg-danger">Sale</span>
//                         </div>
//                         <a href="#!">
//                           {/* img */}
//                           <img src="src/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
//                         </a>
//                         {/* action btn */}
//                         <div className="card-product-action">
//                           <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
//                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
//                           </a>
//                           <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
//                           <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         </div>
//                       </div>
//                       {/* heading */}
//                       <div className="text-small mb-1">
//                         <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
//                       </div>
//                       <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Haldirams Sev Bhujia</a></h2>
//                       <div>
//                         {/* rating */}
//                         <small className="text-warning">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-half" />
//                         </small>
//                         <span className="text-muted small">4.5(149)</span>
//                       </div>
//                       {/* price */}
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div>
//                           <span className="text-dark">$18</span>
//                           <span className="text-decoration-line-through text-muted">$24</span>
//                         </div>
//                         {/* btn */}
//                         <div>
//                           <a href="#!" className="btn btn-primary btn-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                               <line x1={12} y1={5} x2={12} y2={19} />
//                               <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg>
//                             Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* col */}
//                 <div className="col">
//                   <div className="card card-product">
//                     <div className="card-body">
//                       {/* badge */}
//                       <div className="text-center position-relative">
//                         <a href="#!"><img src="src/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
//                         {/* action btn */}
//                         <div className="card-product-action">
//                           <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
//                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
//                           </a>
//                           <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
//                           <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         </div>
//                       </div>
//                       {/* heading */}
//                       <div className="text-small mb-1">
//                         <a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp; Biscuits</small></a>
//                       </div>
//                       <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">NutriChoice Digestive</a></h2>
//                       <div className="text-warning">
//                         <small>
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-half" />
//                         </small>
//                         <span className="text-muted small">4.5 (25)</span>
//                       </div>
//                       {/* price */}
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div><span className="text-dark">$24</span></div>
//                         {/* btn */}
//                         <div>
//                           <a href="#!" className="btn btn-primary btn-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                               <line x1={12} y1={5} x2={12} y2={19} />
//                               <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg>
//                             Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* col */}
//                 <div className="col">
//                   <div className="card card-product">
//                     <div className="card-body">
//                       {/* badge */}
//                       <div className="text-center position-relative">
//                         <a href="#!"><img src="src/assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
//                         {/* action btn */}
//                         <div className="card-product-action">
//                           <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
//                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
//                           </a>
//                           <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
//                           <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         </div>
//                       </div>
//                       {/* heading */}
//                       <div className="text-small mb-1">
//                         <a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp; Biscuits</small></a>
//                       </div>
//                       <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</a></h2>
//                       <div className="text-warning">
//                         <small>
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </small>
//                         <span className="text-muted small">5 (469)</span>
//                       </div>
//                       {/* price */}
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div>
//                           <span className="text-dark">$32</span>
//                           <span className="text-decoration-line-through text-muted">$35</span>
//                         </div>
//                         {/* btn */}
//                         <div>
//                           <a href="#!" className="btn btn-primary btn-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                               <line x1={12} y1={5} x2={12} y2={19} />
//                               <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg>
//                             Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* col */}
//                 <div className="col">
//                   <div className="card card-product">
//                     <div className="card-body">
//                       {/* badge */}
//                       <div className="text-center position-relative">
//                         <a href="#!"><img src="src/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
//                         {/* action btn */}
//                         <div className="card-product-action">
//                           <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
//                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
//                           </a>
//                           <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
//                           <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         </div>
//                       </div>
//                       {/* heading */}
//                       <div className="text-small mb-1">
//                         <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
//                       </div>
//                       <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Onion Flavour Potato</a></h2>
//                       <div className="text-warning">
//                         <small>
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-half" />
//                           <i className="bi bi-star" />
//                         </small>
//                         <span className="text-muted small">3.5 (456)</span>
//                       </div>
//                       {/* price */}
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div>
//                           <span className="text-dark">$3</span>
//                           <span className="text-decoration-line-through text-muted">$5</span>
//                         </div>
//                         {/* btn */}
//                         <div>
//                           <a href="#!" className="btn btn-primary btn-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                               <line x1={12} y1={5} x2={12} y2={19} />
//                               <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg>
//                             Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* col */}
//                 <div className="col">
//                   <div className="card card-product">
//                     <div className="card-body">
//                       {/* badge */}
//                       <div className="text-center position-relative">
//                         <a href="#!"><img src="src/assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
//                         {/* action btn */}
//                         <div className="card-product-action">
//                           <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
//                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
//                           </a>
//                           <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
//                           <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
//                         </div>
//                       </div>
//                       {/* heading */}
//                       <div className="text-small mb-1">
//                         <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
//                       </div>
//                       <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</a></h2>
//                       <div className="text-warning">
//                         <small>
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-half" />
//                         </small>
//                         <span className="text-muted small">4.5 (67)</span>
//                       </div>
//                       {/* price */}
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div>
//                           <span className="text-dark">$6</span>
//                           <span className="text-decoration-line-through text-muted">$10</span>
//                         </div>
//                         {/* btn */}
//                         <div>
//                           <a href="#!" className="btn btn-primary btn-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                               <line x1={12} y1={5} x2={12} y2={19} />
//                               <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg>
//                             Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>

//                   {/* footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="row g-4 py-4">
//             <div className="col-12 col-md-12 col-lg-4">
//               <h6 className="mb-4">Categories</h6>
//               <div className="row">
//                 <div className="col-6">
//                   {/* list */}
//                   <ul className="nav flex-column">
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Vegetables &amp; Fruits</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Breakfast &amp; instant food</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Bakery &amp; Biscuits</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Atta, rice &amp; dal</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Sauces &amp; spreads</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Organic &amp; gourmet</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Baby care</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Cleaning essentials</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Personal care</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-6">
//                   {/* list */}
//                   <ul className="nav flex-column">
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Dairy, bread &amp; eggs</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Cold drinks &amp; juices</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Tea, coffee &amp; drinks</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Masala, oil &amp; more</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Chicken, meat &amp; fish</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Paan corner</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Pharma &amp; wellness</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Home &amp; office</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Pet care</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-md-12 col-lg-8">
//               <div className="row g-4">
//                 <div className="col-6 col-sm-6 col-md-3">
//                   <h6 className="mb-4">Get to know us</h6>
//                   {/* list */}
//                   <ul className="nav flex-column">
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Company</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">About</a></li>
//                     <li className="nav-item mb-2"><a href="#1" className="nav-link">Blog</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Help Center</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Our Value</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-sm-6 col-md-3">
//                   <h6 className="mb-4">For Consumers</h6>
//                   <ul className="nav flex-column">
//                     {/* list */}
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Payments</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Shipping</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Product Returns</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">FAQ</a></li>
//                     <li className="nav-item mb-2"><Link to="/Shopcheck" className="nav-link">Shop Checkout</Link>
// </li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-sm-6 col-md-3">
//                   <h6 className="mb-4">Become a Shopper</h6>
//                   <ul className="nav flex-column">
//                     {/* list */}
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Shopper Opportunities</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Become a Shopper</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Earnings</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Ideas &amp; Guides</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">New Retailers</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-sm-6 col-md-3">
//                   <h6 className="mb-4">Freshcart programs</h6>
//                   <ul className="nav flex-column">
//                     {/* list */}
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart programs</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Gift Cards</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Promos &amp; Coupons</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart Ads</a></li>
//                     <li className="nav-item mb-2"><a href="#!" className="nav-link">Careers</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="border-top py-4">
//             <div className="row align-items-center">
//               <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
//                 <ul className="list-inline mb-0">
//                   <li className="list-inline-item text-dark">Payment Partners</li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/payment/amazonpay.svg" alt="" /></a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/payment/american-express.svg" alt="" /></a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/payment//mastercard.svg" alt="" /></a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/payment/paypal.svg" alt="" /></a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/payment/visa.svg" alt="" /></a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-lg-7 mt-4 mt-md-0">
//                 <ul className="list-inline mb-0 text-lg-end text-center">
//                   <li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</li>
//                   <li className="list-inline-item ms-4">
//                     <a href="#!"><img src=" assets/images/appbutton/appstore-btn.svg" alt="" style={{width: '140px'}} /></a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!"><img src=" assets/images/appbutton/googleplay-btn.svg" alt="" style={{width: '140px'}} /></a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="border-top py-4">
//             <div className="row align-items-center">
//               <div className="col-md-6">
//                 <span className="small text-muted">
//                   © 2022
//                   <span id="copyright">
//                     -
//                   </span>
//                   FreshCart eCommerce HTML Template. All rights reserved. Powered by
//                   <a href="https:// Virtue wireless pvt ltd.com/"> Virtue wireless pvt ltd</a>
//                   .
//                 </span>
//               </div>
//               <div className="col-md-6">
//                 <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
//                   <li className="list-inline-item text-muted">Follow us on</li>
//                   <li className="list-inline-item me-1">
//                     <a href="#!" className="btn btn-xs btn-social btn-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
//                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li className="list-inline-item me-1">
//                     <a href="#!" className="btn btn-xs btn-social btn-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
//                         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#!" className="btn btn-xs btn-social btn-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
//                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//                       </svg>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       </> 
//   );
// };



// export default Shopsingle2;

