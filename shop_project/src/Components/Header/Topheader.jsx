import React, { useState,  useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';




const Topheader = () => {
   const [userData, setUserData] = useState(null);

   useEffect(() => {
     const storedUserData = localStorage.getItem('userData');
     if (storedUserData) {
       setUserData(JSON.parse(storedUserData));
     }
   }, []);
 

   const defaultLogo = 'src/assets/images/logo/logo.png';
   const fileInputRef = useRef(null);
   const [imagePreview, setImagePreview] = useState(defaultLogo);

   useEffect(() => {
      const savedImage = localStorage.getItem('profileImage');
      if (savedImage) {
         setImagePreview(savedImage); 
      }
   }, []);

   const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            const imageUrl = reader.result;
            setImagePreview(imageUrl);
            localStorage.setItem('profileImage', imageUrl); 
         };
         reader.readAsDataURL(file);
      }
   };

   const handleImageClick = () => {
      fileInputRef.current && fileInputRef.current.click();
   };

  return (
    <>
    <div className="border-bottom">
        <div className="bg-light py-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-center text-md-start"><span>Super Value Deals - Save more with coupons</span></div>
              <div className="col-6 text-end d-none d-md-block">
                <div className="dropdown selectBox">
                  <a className="dropdown-toggle selectValue text-reset" href="#" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="me-2">
                      <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#selectedlang)">
                          <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                          <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
                          <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
                          <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
                          <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
                        </g>
                        <defs>
                          <clipPath id="selectedlang">
                            <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    English
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="me-2">
                          <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#selectedlang)">
                              <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                              <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
                              <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
                              <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
                              <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
                            </g>
                            <defs>
                              <clipPath id="selectedlang">
                                <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="me-2">
                          <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_5543_19751)">
                              <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
                              <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
                              <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
                            </g>
                            <defs>
                              <clipPath id="clip0_5543_19751">
                                <rect width={16} height={12} fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Deutsch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <header className="py-lg-5 py-4 border-bottom border-bottom-lg-0">
         <div className="container">
            <div className="row w-100 align-items-center gx-3">
               <div className="col-xl-7 col-lg-8">
                  <div className="d-flex align-items-center">
                       {/* <Link to="/">
                          <img src="src/assets/images/logo/logo.png" className="navbar-brand d-none d-lg-block" alt="eCommerce HTML Template" />
                       </Link> */}
                       <input
                           type="file"
                           id="profileImage"
                           ref={fileInputRef}
                           onChange={handleImageUpload}
                           accept="image/*"
                           style={{ display: 'none' }}
                        />
                        <img
                           src={imagePreview}
                           alt="eCommerce HTML Template"
                           onClick={handleImageClick}
                           style={{
                              width: '150px',
                              height: '80px',
                              borderRadius: '50%',
                              marginTop: '10px',
                              cursor: 'pointer',
                           }}
                        />
                     <div className="w-100 ms-4 d-none d-lg-block">
                        <form action="#">
                           <div className="input-group">
                              <input className="form-control rounded" type="search" placeholder="Search for products" />
                              <span className="input-group-append">
                                 <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-search">
                                       <circle cx="11" cy="11" r="8"></circle>
                                       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                 </button>
                              </span>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
                      {/* <Link to="/">
                          <img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" />
                       </Link> */}

                       
                     <div className="d-flex align-items-center lh-1">
                        <div className="list-inline me-4">
                           <div className="list-inline-item">
                             
                              <a href="#" className="text-reset d-none d-md-block" data-bs-toggle="modal" data-bs-target="#locationSecondModal">
                                 <i className="feather-icon icon-map-pin me-2"></i>
                                 Set A Location
                              </a>
                           </div>
                           <div className="list-inline-item">
                              <div className="dropdown">
                                 <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-shopping-cart align-text-bottom">
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle cx="20" cy="21" r="1"></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
                                    </span>

                                    <span>$0.00</span>
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-5">
                                    <div className="d-flex justify-content-between align-items-center border-bottom pb-5 mb-3">
                                       <div>
                                          <span><i className="feather-icon icon-shopping-cart"></i></span>
                                          <span className="text-success">3</span>
                                       </div>
                                       <div>
                                          <span>Total:</span>
                                          <span className="text-success">$105.00</span>
                                       </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                       <li className="list-group-item px-0 py-3">
                                          <div className="row align-items-center g-0">
                                             <div className="col-lg-3 col-3 text-center">
                                                
                                                <img src="src/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-xxl" />
                                             </div>
                                             <div className="col-lg-7 col-7">
                                               
                                                  <Link to="/Shopsingle" className="text-inherit">
                                                     <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                                  </Link>
                                                <small className="text-muted">1 x $35.00</small>
                                             </div>

                                             {/* <!-- price --> */}
                                             <div className="text-end col-lg-2 col-2">
                                                <a href="#" className="text-inherit" aria-label="Close"><i className="bi bi-x fs-4"></i></a>
                                             </div>
                                          </div>
                                       </li>
                                       <li className="list-group-item px-0 py-3">
                                          <div className="row align-items-center g-0">
                                             <div className="col-lg-3 col-3 text-center">
                                                {/* <!-- img --> */}
                                                <img src="src/assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-xxl" />
                                             </div>
                                             <div className="col-lg-7 col-7">
                                                {/* <!-- title --> */}
                                                <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">NutriChoice Digestive</h6>
                      </Link>
                                                <small className="text-muted">1 x $29.00</small>
                                             </div>

                                             {/* <!-- price --> */}
                                             <div className="text-end col-lg-2 col-2">
                                                <a href="#" className="text-inherit" aria-label="Close"><i className="bi bi-x fs-4"></i></a>
                                             </div>
                                          </div>
                                       </li>

                                       <li className="list-group-item px-0 py-3">
                                          <div className="row align-items-center g-0">
                                             <div className="col-lg-3 col-3 text-center">
                                                {/* <!-- img --> */}
                                                <img src="src/assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-xxl" />
                                             </div>
                                             <div className="col-lg-7 col-7">
                                                {/* <!-- title --> */}
                                                <Link to="/Shopsingle" className="text-inherit">
                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                      </Link>
                                                <small className="text-muted">1 x $29.00</small>
                                             </div>

                                             {/* <!-- price --> */}
                                             <div className="text-end col-lg-2 col-2">
                                                <a href="#" className="text-inherit" aria-label="Close"><i className="bi bi-x fs-4"></i></a>
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                    <div className="mt-2 d-grid">
                                       <a href="#" className="btn btn-primary">Checkout</a>
                                       <a href="#" className="btn btn-light mt-2">View Cart</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* <!-- Button --> */}
                        <button
                           className="navbar-toggler collapsed"
                           type="button"
                           data-bs-toggle="offcanvas"
                           data-bs-target="#navbar-default"
                           aria-controls="navbar-default"
                           aria-expanded="false"
                           aria-label="Toggle navigation">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                              <path
                                 d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>

               <div className="col-xl-5 col-lg-4 d-flex align-items-center">
                  <div className="list-inline ms-auto d-lg-block d-none">
                     <div className="list-inline-item me-3">
                        {/* <!-- Button trigger modal --> */}
                        <a href="#" className="text-reset d-none d-lg-block" data-bs-toggle="modal" data-bs-target="#locationSecondModal">
                           <i className="feather-icon icon-map-pin me-2"></i>
                           Set A Location
                        </a>
                     </div>

                     <div className="list-inline-item me-3">
                         {/* Other Links */}
                         {!userData && (
                             <li >
                                <Link className="text-reset" data-bs-toggle="modal" data-bs-target="#registerModal">
                                  Register
                                </Link>
                             </li>
                          )}
                     </div>
                     

                     <Link to="/shopcart" className="text-reset me-3 " aria-expanded="false">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-cart align-text-bottom">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                              </span>
                           </Link>
                       <div className="list-inline-item">
                          {userData ? (
                             <span>{userData.full_name}</span>
                          ) : (
                             <Link to="/Signin" className="btn btn-dark d-none d-xl-block">Sign In</Link>
                          )}
                       </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </>
  );
};



export default Topheader;
