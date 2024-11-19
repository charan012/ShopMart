import React from "react";
import { Link } from "react-router-dom";

function Popularproducts(){
  
  return(
    <div>
        {/* section */}
        <section className="my-lg-14 my-8">
            <div className="container">
              {/* row */}
              <div className="row align-items-center mb-6">
                <div className="col-lg-10 col-10">
                  {/* heading */}
                  <h3 className="align-items-center d-flex mb-0 h4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-primary">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ms-3"> Popular Products</span>
                  </h3>
                </div>
                <div className="col-lg-2 col-2">
                <div className="slider-arrow slider-8-columns-arrow" id="slider-8-columns-arrows">
                </div>

                </div>
              </div>
              {/* slider */}
              {/* <div className="product-slider-second" id="slider-second"> */}
              <div className="slider-8-columns d-flex justify-content-around" id="slider-8-columnss">
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      {/* badge */}
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        {/* img */}
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-15.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Apple</a></h2>
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
                          <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* badge */}
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-success">14%</span>
                        </div>
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-16.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      {/* title */}
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
                      {/* rating */}
                      <div className="text-warning">
                        {/* rating */}
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
                         <Link to="/#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-17.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Kiwi</a></h2>
                      {/* rating */}
                      <div className="text-warning">
                        {/* rating */}
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </small>
                        <span className="text-muted small">5 (469)</span>
                      </div>
                      {/* rating */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$32</span>
                          <span className="text-decoration-line-through text-muted">$35</span>
                        </div>
                        {/* btn */}
                        <div>
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* badge */}
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Hot</span>
                        </div>
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-18.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* action btn */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Banana</a></h2>
                      {/* rating */}
                      <div className="text-warning">
                        {/* rating */}
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
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-19.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Beatroot</a></h2>
                      {/* rating */}
                      <div className="text-warning">
                        {/* rating */}
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (39)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">$18</span>
                        </div>
                        {/*  btn */}
                        <div>
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* badge */}
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Sale</span>
                        </div>
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-15.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></a>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Apple</a></h2>
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
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* badge */}
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-success">14%</span>
                        </div>
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-16.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
                      <div className="text-warning">
                        {/* rating */}
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
                         <Link to="#!" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-17.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Kiwi</a></h2>
                      {/* rating*/}
                      <div className="text-warning">
                        {/* rating */}
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
                        {/*  btn */}
                        <div>
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* badge */}
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">Hot</span>
                        </div>
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-18.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Banana</a></h2>
                      <div className="text-warning">
                        {/* rating */}
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
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* item */}
                  <div className="card card-product mb-lg-4">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        {/* img */}
                        <a href="#!"><img src="src/assets/images/products/product-img-19.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                        {/* action btn */}
                        <div className="card-product-action">
                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
                          </a>
                          <Link to="/Shopwish" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                        </div>
                      </div>
                      {/* title */}
                      <div className="text-small mb-1">
                        <a href="#!" className="text-decoration-none text-muted"><small>Fruits &amp; Vegetables</small></a>
                      </div>
                      <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Beatroot</a></h2>
                      <div className="text-warning">
                        {/* rating */}
                        <small>
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </small>
                        <span className="text-muted small">4.5 (39)</span>
                      </div>
                      {/* price */}
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <span className="text-dark">$13</span>
                          <span className="text-decoration-line-through text-muted">$18</span>
                        </div>
                        {/* btn */}
                        <div>
                         <Link to="/Shopcart" className="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}
export default Popularproducts;
