import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Bestsellingproducts(){
  const [categories, setCategories] = useState([]); // Initialize categories as an array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://technxt.in/demo_api/fetch_product_categoeies.php");
        
        console.log("API Response:", response.data);
        
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else if (Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.error("Unexpected API response format");
          setError("Unexpected API response format");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  

return(
        <div>
 {/* section */}
 <section className="mb-lg-14 my-8">
            <div className="container">
              {/* row */}
              <div className="row align-items-center mb-6">
                <div className="col-lg-10 col-9">
                  <div className="d-xl-flex justify-content-between align-items-center">
                    {/* heading */}
                    <div className="d-flex">
                      <div className="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag text-primary">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h3 className="mb-0">Best Selling Products</h3>
                        <p className="mb-0">Find the bestseller products in your area with discount.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-3">
                  <div className="slider-arrow" id="slider-third-arrows" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="slider-8-columns d-flex justify-content-around" id="slider-8-columnsss">
                    {/* item */}
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            <div className="position-absolute top-0 start-0">
                              <span className="badge bg-danger">Sale</span>
                            </div>
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
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
                              <span className="text-danger">$18</span>
                              <span className="text-decoration-line-through text-muted">$24</span>
                            </div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"  title="Quick View"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none text-truncate" style={{maxWidth: '80px'}}>Britannia NutriChoice Digestive Biscuits</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.4(3,149)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div><span className="text-dark">$15</span></div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Cadbury 5 star chocolate</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.7(1,130)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div><span className="text-dark">$32</span></div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Onion Flavour Potato</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.5(140)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <span className="text-danger">$12</span>
                              <span className="text-muted text-decoration-line-through ms-1">$18</span>
                            </div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            <div className="position-absolute top-0 start-0">
                              <span className="badge bg-warning text-dark">14%</span>
                            </div>
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Salted Instant Popcorn</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.5(212)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <span className="text-danger">$40</span>
                              <span className="text-decoration-line-through text-muted">$65</span>
                            </div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none text-truncate" style={{maxWidth: '80px'}}>Epigamia Blueberry Greek Yogurt, 90g</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.4(694)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div><span className="text-dark">$17</span></div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-8.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Kellogg's Special K Original Cereal</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.7(1,130)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <span className="text-danger">$25</span>
                              <span className="text-muted text-decoration-line-through ms-1">$28</span>
                            </div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                            <a href="#!"><img src="src/assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none text-truncate" style={{maxWidth: '80px'}}>Slurrp Farm No Maida Millet Pancake Mix</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.5(212)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <span className="text-danger">$34</span>
                              <span className="text-muted text-decoration-line-through ms-1">$38</span>
                            </div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      {/* card */}
                      <div className="card card-product h-100 mb-4">
                        <div className="card-body position-relative">
                          {/* badge */}
                          <div className="text-center position-relative">
                            {/* img */}
                           <a href="#!"><img src="src/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            {/* action btn */}
                            <div className="product-action-btn">
                              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" /></a>
                              <Link to="/Shopwish" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></Link>
                              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
                            </div>
                          </div>
                          {/* title */}
                          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none text-truncate" style={{maxWidth: '80px'}}>Britannia NutriChoice Digestive Biscuits</a></h2>
                          <div>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="text-muted small">4.4(3,149)</span>
                          </div>
                          {/* price */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div><span className="text-dark">$15</span></div>
                            <div><span className="text-uppercase small text-primary">In Stock</span></div>
                          </div>
                          {/* btn */}
                          <div className="d-grid mt-4">
                            <Link to="/Shopcart" className="btn btn-primary rounded-pill">Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}


export default Bestsellingproducts;
