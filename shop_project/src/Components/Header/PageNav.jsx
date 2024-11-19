import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const PageNav = () => {
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
   
   {/* navbar */}
      <div className="border-bottom">
      <div className="bg-light py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-start"><span>Super Value Deals - Save more with coupons</span></div>
            <div className="col-6 text-end d-none d-md-block">
              <div className="dropdown selectBox">
                <a className="dropdown-toggle selectValue text-reset" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <a className="dropdown-item" href="javascript:void(0)">
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
                    <a className="dropdown-item" href="javascript:void(0)">
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
      <div className="py-5">
        <div className="container">
          <div className="row w-100 align-items-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
              {/* <Link className="navbar-brand d-none d-lg-block" to="/">
                <img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" />
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
              <div className="d-flex justify-content-between w-100 d-lg-none">
                {/* <Link className="navbar-brand" to="/">
                  <img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" />
                </Link> */}
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
              <form action="#">
                <div className="input-group">
                  <input className="form-control rounded" type="search" placeholder="Search for products" />
                  <span className="input-group-append">
                    <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-xxl-3 d-none d-lg-block">
              {/* Button trigger modal */}
              <button type="button" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#locationModal">
                <i className="feather-icon icon-map-pin me-2" />
                Location
              </button>
            </div>
            <div className="col-lg-2 col-xxl-2 text-end col-md-6 col-7">
              <div className="list-inline">
                <div className="list-inline-item me-5">
                <Link to="/Shopwish" className="text-muted position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item me-5 me-lg-0">
                  <a className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                &nbsp; &nbsp; &nbsp;               
                <div className="list-inline-item">
                          {userData ? (
                             <span>{userData.full_name}</span>
                          ) : (
                             <Link to="/Signin" className="btn btn-dark d-none d-xl-block">Sign In</Link>
                          )}
                       </div>
                
                <div className="list-inline-item d-inline-block d-lg-none">
                  {/* Button */}
                  <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                      <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4" aria-label="Offcanvas navbar large">
        <div className="container">
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
            <div className="offcanvas-header pb-1">
              {/* <Link to="/"><img src="src/assets/images/logo/logo.png" alt="eCommerce HTML Template" /></Link> */}
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
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div className="d-block d-lg-none mb-4">
                <form action="#">
                  <div className="input-group">
                    <input className="form-control rounded" type="search" placeholder="Search for products" />
                    <span className="input-group-append">
                      <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                          <circle cx={11} cy={11} r={8} />
                          <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </form>
                <div className="mt-2">
                  <button type="button" className="btn btn-outline-gray-400 text-muted w-100" data-bs-toggle="modal" data-bs-target="#locationModal">
                    <i className="feather-icon icon-map-pin me-2" />
                    Pick Location
                  </button>
                </div>
              </div>
              <div className="d-block d-lg-none mb-4">
                <a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <span className="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                  </span>
                  All Departments
                </a>
                <div className="collapse mt-2" id="collapseExample">
                  <div className="card card-body">
                    <ul className="mb-0 list-unstyled">
                      <li><Link className="dropdown-item" to="/ShopgridFil">Dairy Products</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Bakery, Snacks &amp; Munchies</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Fruits &amp; Vegetables</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Cold Drinks &amp; Juices</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Meat, Fish &amp; Eggs</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Grocery &amp; Kitchen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdown me-3 d-none d-lg-block">
                <button className="btn btn-primary px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                  </span>
                  All Departments
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item" to="/ShopgridFil">Dairy Products</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Bakery, Snacks &amp; Munchies</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Fruits &amp; Vegetables</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Cold Drinks &amp; Juices</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Meat, Fish &amp; Eggs</Link></li>
                      <li><Link className="dropdown-item" to="/ShopgridFil">Grocery &amp; Kitchen</Link></li>
                </ul>
              </div>
              <div>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item dropdown w-100 w-lg-auto">
                  </li><li className="nav-item dropdown">
                    <Link className="nav-link" to="/" role="button" data-bs-toggle aria-expanded="false">Home</Link>      
                  </li>
                  <li className="nav-item dropdown w-100 w-lg-auto">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/ShopgridFil">Shop Grid - Filter</Link></li>
                            <li><Link className="dropdown-item" to="/Shopcol">Shop Grid - 3 column</Link></li>
                            <li><Link className="dropdown-item" to="/ShoplistFil">Shop List - Filter</Link></li>
                            <li><Link className="dropdown-item" to="/ShopFil">Shop - Filter</Link></li>
                            <li><Link className="dropdown-item" to="/Shopwide">Shop Wide</Link></li>
                            <li><Link className="dropdown-item" to="/Shopsingle">Shop Single</Link></li>
                            <li><Link className="dropdown-item" to="/Shopsingv2">Shop Single v2</Link></li>
                            <li><Link className="dropdown-item" to="/Shopwish">Shop Wishlist</Link></li>
                            <li><Link className="dropdown-item" to="/Shopcart">Shop Cart</Link></li>
                            <li><Link className="dropdown-item" to="/Shopcheck">Shop Checkout</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown w-100 w-lg-auto">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Stores</a>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/StoreList">Store List</Link></li>
                              <li><Link className="dropdown-item" to="/StoreGrid">Store Grid</Link></li>
                              <li><Link className="dropdown-item" to="/StoreSingle">Store Single</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mega menu</a>
                    <div className="dropdown-menu pb-0">
                      <div className="row p-2 p-lg-4">
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">Dairy, Bread & Eggs</h6>
                                    <Link className="dropdown-item" to="/ShopgridFil">Butter</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Milk Drinks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Curd & Yogurt</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Eggs</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Buns & Bakery</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Cheese</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Condensed Milk</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Dairy Products</Link>
                                 </div>
                                 <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                    <h6 className="text-primary ps-3">Breakfast & Instant Food</h6>
                                    <Link className="dropdown-item" to="/ShopgridFil">Breakfast Cereal</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Noodles, Pasta & Soup</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Frozen Veg Snacks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Frozen Non-Veg Snacks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Vermicelli</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Instant Mixes</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Batter</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Fruit and Juices</Link>
                                 </div>

                                 <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                    <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                                    <Link className="dropdown-item" to="/ShopgridFil">Soft Drinks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Fruit Juices</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Coldpress</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Water & Ice Cubes</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Soda & Mixers</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Health Drinks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Herbal Drinks</Link>
                                    <Link className="dropdown-item" to="/ShopgridFil">Milk Drinks</Link>
                                 </div>
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                          <div className="card border-0">
                            <img src="src/assets/images/banner/menu-banner.jpg" alt="eCommerce HTML Template" className="img-fluid" />
                            <div className="position-absolute ps-6 mt-8">
                              <h5 className="mb-0">
                                Dont miss this
                                <br />
                                offer today.
                              </h5>
                              <a href="#" className="btn btn-primary btn-sm mt-3">Shop Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown w-100 w-lg-auto">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Blog">Blog</Link></li>
                      <li><Link className="dropdown-item" to="/BlogSingle">Blog Single</Link></li>
                      <li><Link className="dropdown-item" to="/BlogCategory">Blog Category</Link></li>
                      <li><Link className="dropdown-item" to="/Aboutus">About us</Link></li>
                      <li><Link className="dropdown-item" to="/Error">404 Error</Link></li>
                      <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
                    </ul>
                  </li>
                          {/* Other Links */}
                          {userData && (
                             <li className="nav-item">
                                <Link className="nav-link" to={`/Dashindex`}>
                                   Dashboard
                                </Link>
                             </li>
                          )}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};



export default PageNav;