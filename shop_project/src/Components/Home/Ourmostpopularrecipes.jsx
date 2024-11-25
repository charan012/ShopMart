import React from "react";
function Ourmostpopularrecipes(){
    return(
        <div>
             {/* section */}
          <section className="my-lg-14 my-8">
            <div className="container">
              <div className="row align-items-center mb-8">
                <div className="col-md-8 col-12">
                  {/* heading */}
                  <div className="d-flex">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-journal text-primary" viewBox="0 0 16 16">
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0">Our most popular recipes</h3>
                      <p className="mb-0">Check out most popular recipes of all time.</p>
                    </div>
                    <div />
                  </div>
                </div>
                {/* button */}
                <div className="col-md-4 text-end d-none d-md-block">
                  <a href="#" className="btn btn-primary">View all recipes</a>
                </div>
              </div>
              <div className="row">
                {/* col */}
                <div className="col-12 col-md-6 col-lg-3 mb-8">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-1.jpg" alt="" className="img-fluid rounded w-100" />
                      </div>
                    </a>
                  </div>
                  {/* text */}
                  <div>
                    <h4 className="h5"><a href="#!" className="text-inherit">Spaghetti with Crispy Zucchini</a></h4>
                    <p>Praesent vestibulum magna lacinia augue mollisvel aliquet massa posuere. Duis et mauris tortor.</p>
                    <div className="d-flex align-items-center lh-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-dark" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <small className="ms-1">
                        <span className="text-dark fw-bold">15</span>
                        min
                      </small>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-3 mb-8">
                  <div className="mb-4">
                    <a href="#!">
                      <div className="img-zoom">
                        {/* img */}
                        <img src="src/assets/images/blog/blog-img-2.jpg" alt="" className="img-fluid rounded w-100" />
                      </div>
                    </a>
                  </div>
                  {/* text */}
                  <div>
                    <h4 className="h5"><a href="#!" className="text-inherit">Almond Butter Chocolate Chip Zucchini Bars</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur sit amet tincidunt ellentesque aliquet ligula in ultrices congue.</p>
                    <div className="d-flex align-items-center lh-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-dark" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <small className="ms-1">
                        <span className="text-dark fw-bold">18</span>
                        min
                      </small>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-3 mb-8">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-3.jpg" alt="" className="img-fluid rounded w-100" />
                      </div>
                    </a>
                  </div>
                  {/* text */}
                  <div>
                    <h4 className="h5"><a href="#!" className="text-inherit">Spicy Shrimp Tacos Garlic Cilantro Lime Slaw</a></h4>
                    <p>Praesent vestibulum magna lacinia augue mollisvel aliquet massa posuere. Duis et mauris tortor.</p>
                    <div className="d-flex align-items-center lh-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-dark" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <small className="ms-1">
                        <span className="text-dark fw-bold">20</span>
                        min
                      </small>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-12 col-md-6 col-lg-3 mb-8">
                  <div className="mb-4">
                    <a href="#!">
                      {/* img */}
                      <div className="img-zoom">
                        <img src="src/assets/images/blog/blog-img-4.jpg" alt="" className="img-fluid rounded w-100" />
                      </div>
                    </a>
                  </div>
                  <div>
                    <h4 className="h5"><a href="#!" className="text-inherit">Simple Homemade Tomato Soup</a></h4>
                    <p>Aliquam tempus velit augue, sodales tincidunt augue ipsum primis in faucibus orci luctus et ultrices posuere cubilia</p>
                    <div className="d-flex align-items-center lh-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-dark" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      <small className="ms-1">
                        <span className="text-dark fw-bold">9</span>
                        min
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}
export default Ourmostpopularrecipes;