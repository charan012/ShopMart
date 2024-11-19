import React from "react";

function Alllatestproducts(){
    return(
        <div>
 {/* section */}
 <section className="my-lg-14 my-8">
            <div className="container">
              <div className="row align-items-center mb-8">
                {/* store */}
                <div className="col-md-8 col-12">
                  <div className="d-flex">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-shop text-primary" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0">All Latest Products</h3>
                      <p className="mb-0">Find the best store products in your area with discount.</p>
                    </div>
                    <div />
                  </div>
                </div>
                {/* all store */}
                <div className="col-md-4 text-end col-12 d-none d-md-block">
                  <a href="#">
                    All stores
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* row */}
              <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 g-4 g-lg-4">
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
                      <img src=" src/assets/images/stores-logo/stores-logo-2.svg" alt="" className="rounded-circle icon-shape icon-xl" />
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
                      <img src=" src/assets/images/stores-logo/stores-logo-3.svg" alt="" className="rounded-circle icon-shape icon-xl" />
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
              </div>
            </div>
          </section>
        </div>
    )
}
export default Alllatestproducts;