import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductInfo = () => {
  const location = useLocation();
  const { productInfo } = location.state || {};
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productInfo.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + productInfo.images.length) % productInfo.images.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  if (!productInfo) {
    return <p>No product information available.</p>;
  }

  return (

    <main>
    <section className="mt-8" id="productInfo" tabIndex={-1} aria-hidden="true">
      <div className="container">
        <div className="row">
          {/* Carousel Section */}
          <div className="col-md-5 col-xl-6">
            <div className="carousel">
              <div className="carousel-inner">
                {productInfo.images.map((img, index) => (
                  <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                    <div
                      className="zoom"
                      style={{
                        backgroundImage: `url(${URL.createObjectURL(img)})`,
                        height: '400px',
                        backgroundSize: 'cover',
                      }}
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        alt={img.name}
                        style={{ display: 'none' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel controls */}
              <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="visually-hidden">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="red"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </button>
              <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="visually-hidden">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="red"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 0 .708L10.293 8 4.646 13.646a.5.5 0 0 1-.708.708l6-6a.5.5 0 0 1 0-.708l-6-6a.5.5 0 0 1-.708 0"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail images */}
            <div className="slider slider-nav mt-4">
              <div className="row g-3">
                {productInfo.images.map((img, index) => (
                  <div className="col-3" key={index}>
                    <img
                      src={URL.createObjectURL(img)}
                      alt={img.name}
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

          {/* Product Details Section */}
          <div className="col-md-7 col-xl-6">
            <div className="ps-lg-10 mt-6 mt-md-0">
            <div className= "fs-6 ms-1 text-danger">{productInfo.category}</div>                 
              <h1 className="mb-1">{productInfo.title}</h1>
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
                <span className="fw-bold text-dark">₹{productInfo.salePrice}</span>
                &nbsp;
                <span className="text-decoration-line-through text-muted"><small>₹{productInfo.price}</small></span>
                <span>
                  <small className="fs-6 ms-2 text-danger">(26% Off)</small>
                </span>
              </div>
              <hr className="my-6" />
					<div className="mb-5">
						{/* Display dynamically added weights */}
						{productInfo.weights.map((weight, index) => (
							<button key={index} type="button" className="btn btn-outline-secondary mx-1">
								{weight}
							</button>
						))}
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
					<button
						type="button"
						className="btn btn-primary"
						disabled={!productInfo.inStock} // Disable if out of stock
					>
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
						<td>{productInfo.inStock ? "In Stock" : "Out of Stock"}</td>
					</tr>
                    <tr>
                    <td>Delivered by 30 Oct.</td>
                  </tr>
                  <tr>
                    <td>COD Available.</td>
                  </tr>
                  <tr>
                    <td>No Return & Exchange available.</td>
                  </tr>
                </tbody>
              </table>
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
                    {/* Product Details */}
                    {productInfo.multipleMeta && productInfo.multipleMeta.length > 0 ? (
                      productInfo.multipleMeta.map((meta, index) => (
                        <div key={index} className="mb-5">
                          <h5 className="mb-1">{meta.title || `Title ${index + 1}`}</h5>
                          <p className="mb-0">{meta.description || `Description ${index + 1}`}</p>
                        </div>
                      ))
                    ) : (
                      <div className="mb-5">
                        <h4 className="mb-1">{productInfo.metaTitle}</h4>
                        <p className="mb-0">{productInfo.metaDescription}</p>
                      </div>
                    )}
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
                                  <th>Total Units</th>
                                  <td>{productInfo.units}</td>
                                </tr>
                                <tr>
                                  <th>Product Code</th>
                                  <td>{productInfo.productCode}</td>
                                </tr>
                                <tr>
                                  <th>Product SKU</th>
                                  <td>{productInfo.productSKU}</td>
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
</main>

  );
};

export default ProductInfo;
