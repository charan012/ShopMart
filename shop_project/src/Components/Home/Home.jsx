import React, { useEffect } from 'react';

import Anartisstjourney from './Anartistjourney';
import Allcategories from './Allcategories';
import Popularproducts from './Popularproducts';
import Bestsellingproducts from './Bestsellingproducts';
import Ourmostpopularrecipes from './Ourmostpopularrecipes';
import Chepeastbasket from './Chepeastbasket';
import Alllatestproducts from './Alllatestproducts';
import Areaswedeliverto from './Areaswedeliverto';

const Home = () => {
  useEffect(() => {
    const lastVisit = sessionStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    const threshold = 3000;

    if (!lastVisit || currentTime - lastVisit > threshold) {
      window.location.reload();
      sessionStorage.setItem("lastVisit", currentTime);
    }
  }, []);

  return (
    <div>
      {/* Location Modal */}
      <div className="modal fade" id="locationSecondModal" tabIndex={-1} aria-labelledby="locationSecondModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <h1 className="modal-title fs-5" id="locationSecondModalLabel">Add Your Location</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="w-100">
                <form action="#">
                  <div className="input-group">
                    <input type="text" aria-label="Last name" className="form-control w-45" placeholder="Search for area, location more.." />
                    <button className="input-group-text bg-transparent" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="my-10 text-center">
                <img src="src/assets/images/svg-graphics/delivery-boy.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Register Modal */}
      <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-light">
            <div className="modal-header bg-white">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Register via Phone Number</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                  <div className="py-6">
                    <h4 className="fs-6 mb-4">Enter your phone number to Signup or Register</h4>
                    <form>
                      <div className="input-phone mb-2">
                        <input type="tel" maxLength={10} className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Next</button>
                      </div>
                    </form>
                    <div className="mt-4">
                      <small>
                        <a href="#">Terms of Service</a>
                        <a href="#" className="ms-3">Privacy Policy</a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div>
          <Anartisstjourney/>
        </div>
        <div>
          <Allcategories/>
        </div>
        <div>
          <Popularproducts/>
        </div>
        <div>
          <Bestsellingproducts/>
        </div>
        <div className="container mb-10">
          <div className="row">
            <div className="col-12 d-grid">
              <a href="#!" className="btn btn-soft-warning btn-lg ls-xl text-uppercase rounded-pill text-truncate" style={{ maxWidth: '100%' }}>Save an extra 15% on Authorship order</a>
            </div>
          </div>
        </div>
        <div>
          <Alllatestproducts/>
        </div>
        <div>
          <Ourmostpopularrecipes/>
        </div>
        <div>
          <Chepeastbasket/>
        </div>
      </section>
      <div >
        <Areaswedeliverto/>
      </div>
      <main>
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
                      <div className="zoom" onMouseMove={zoom} style={{ backgroundImage: 'url(src/assets/images/products/product-single-img-1.jpg)' }}>
                        <img src="src/assets/images/products/product-single-img-1.jpg" alt="Product" />
                      </div>
                      <div>
                        <div className="zoom" onMouseMove={zoom} style={{ backgroundImage: 'url(src/assets/images/products/product-single-img-2.jpg)' }}>
                          <img src="src/assets/images/products/product-single-img-2.jpg" alt="Product" />
                        </div>
                      </div>
                      <div>
                        <div className="zoom" onMouseMove={zoom} style={{ backgroundImage: 'url(src/assets/images/products/product-single-img-3.jpg)' }}>
                          <img src="src/assets/images/products/product-single-img-3.jpg" alt="Product" />
                        </div>
                      </div>
                      <div>
                        <div className="zoom" onMouseMove={zoom} style={{ backgroundImage: 'url(src/assets/images/products/product-single-img-4.jpg)' }}>
                          <img src="src/assets/images/products/product-single-img-4.jpg" alt="Product" />
                        </div>
                      </div>
                    </div>
                    <div className="product-tools">
                      <div className="thumbnails row g-3" id="productModalThumbnails">
                        <div className="col-3">
                          <div className="thumbnails-img">
                            <img src="src/assets/images/products/product-single-img-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="thumbnails-img">
                            <img src="src/assets/images/products/product-single-img-2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="thumbnails-img">
                            <img src="src/assets/images/products/product-single-img-3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="thumbnails-img">
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
                        <small className="text-danger">26% Off</small>
                      </div>
                      <hr className="my-6" />
                      <div>
                        <button type="button" className="btn btn-outline-secondary">Add to Wishlist</button>
                        <button type="button" className="btn btn-outline-secondary">Add to Compare</button>
                      </div>
                      <hr className="my-6" />
                      <div>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                          <a href="#">Read More</a>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <span className="text-secondary">Type:</span> Organic
                          </li>
                          <li>
                            <span className="text-secondary">MFG:</span> Jun 4, 2022
                          </li>
                          <li>
                            <span className="text-secondary">LIFE:</span> 30 days
                          </li>
                        </ul>
                        <div className="row mt-4">
                          <div className="col-lg-4 col-6">
                            <input type="number" className="form-control" min={1} defaultValue={1} />
                          </div>
                          <div className="col-lg-8 col-6">
                            <button type="button" className="btn btn-primary">
                              <i className="feather feather-shopping-cart me-2" />Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mt-4">
                        <span className="text-dark me-2">Share:</span>
                        <a href="#!" className="text-muted me-2">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href="#!" className="text-muted me-2">
                          <i className="bi bi-twitter" />
                        </a>
                        <a href="#!" className="text-muted">
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
