import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
	const [users, setUsers] = useState(null);
	const [userData, setUserData] = useState(null);
  
	useEffect(() => {
	  const storedUserData = localStorage.getItem('userData');
	  if (storedUserData) {
		setUsers(JSON.parse(storedUserData));
	  }
	}, []);
  
	if (!users) {
	  return 
	  // <p>No user details available. Please log in.</p>;
	}
  
	const handleLogout = () => {
	  localStorage.removeItem('userData');  
	  setUserData(null); 
	  window.location.href = '/'; 
	};

    return (
		<div>
		  {/* navbar */}
		  <nav className="navbar navbar-expand-lg navbar-glass">
			<div className="container-fluid">
			  <div className="d-flex justify-content-between align-items-center w-100">
				<div className="d-flex align-items-center">
				  <a className="text-inherit d-block d-xl-none me-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
					<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
					  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
					</svg>
				  </a>
				  <form role="search">
					<label htmlFor="search" className="form-label visually-hidden">Search</label>
					<input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search" />
				  </form>
				</div>
				<div>
				  <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
					<li className="dropdown-center">
					  <a className="position-relative btn-icon btn-ghost-secondary btn rounded-circle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="bi bi-bell fs-5" />
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
						  2
						  <span className="visually-hidden">unread messages</span>
						</span>
					  </a>
					  <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0 border-0">
						<div className="border-bottom p-5 d-flex justify-content-between align-items-center">
						  <div>
							<h5 className="mb-1">Notifications</h5>
							<p className="mb-0 small">You have 2 unread messages</p>
						  </div>
						  <a href="#!" className="text-muted">
						  </a><a href="#" className="btn btn-ghost-secondary btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Mark all as read">
							<svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-check2-all text-success" viewBox="0 0 16 16">
							  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
							  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
							</svg>
						  </a>
						</div>
						<div data-simplebar style={{height: '250px'}}>
						  {/* List group */}
						  <ul className="list-group list-group-flush notification-list-scroll fs-6">
							{/* List group item */}
							<li className="list-group-item px-5 py-4 list-group-item-action active">
							  <a href="#!" className="text-muted">
								<div className="d-flex">
								  <img src="src/assets/images/avatar/avatar-1.jpg" alt="" className="avatar avatar-md rounded-circle" />
								  <div className="ms-4">
									<p className="mb-1">
									  <span className="text-dark">Your order is placed</span>
									  waiting for shipping
									</p>
									<span>
									  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-muted" viewBox="0 0 16 16">
										<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
										<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
									  </svg>
									  <small className="ms-2">1 minute ago</small>
									</span>
								  </div>
								</div>
							  </a>
							</li>
							<li className="list-group-item px-5 py-4 list-group-item-action">
							  <a href="#!" className="text-muted">
								<div className="d-flex">
								  <img src="src/assets/images/avatar/avatar-5.jpg" alt="" className="avatar avatar-md rounded-circle" />
								  <div className="ms-4">
									<p className="mb-1">
									  <span className="text-dark">Jitu Chauhan</span>
									  answered to your pending order list with notes
									</p>
									<span>
									  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-muted" viewBox="0 0 16 16">
										<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
										<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
									  </svg>
									  <small className="ms-2">2 days ago</small>
									</span>
								  </div>
								</div>
							  </a>
							</li>
							<li className="list-group-item px-5 py-4 list-group-item-action">
							  <a href="#!" className="text-muted">
								<div className="d-flex">
								  <img src="src/assets/images/avatar/avatar-2.jpg" alt="" className="avatar avatar-md rounded-circle" />
								  <div className="ms-4">
									<p className="mb-1">
									  <span className="text-dark">You have new messages</span>
									  2 unread messages
									</p>
									<span>
									  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-clock text-muted" viewBox="0 0 16 16">
										<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
										<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
									  </svg>
									  <small className="ms-2">3 days ago</small>
									</span>
								  </div>
								</div>
							  </a>
							</li>
						  </ul>
						</div>
						<div className="border-top px-5 py-4 text-center">
						  <a href="#!">View All</a>
						</div>
					  </div>
					</li>
					<li className="dropdown ms-4">
					  <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img src="src/assets/images/avatar/avatar-1.jpg" alt="" className="avatar avatar-md rounded-circle" />
					  </a>
					  <div className="dropdown-menu dropdown-menu-end p-0">
                        <div className="lh-1 px-5 py-4 border-bottom">
                          <h5 className="mb-1 h6">FreshCart Admin</h5>
                          <small>{users.full_name}</small>
                        </div>
                        <ul className="list-unstyled px-2 py-3">
                          <li>
                            <Link className="dropdown-item" to="/">Home</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/Profile">Edit Profile</Link>
                          </li>
                        </ul>
                    <div className="border-top px-5 py-3">
                    <li>
                      <Link onClick={handleLogout} to="/">
                        Log out
                      </Link>
                      </li>
                    </div>
                      </div>
					</li>
				  </ul>
				</div>
			  </div>
			</div>
		  </nav>
		  <div className="main-wrapper">
			{/* navbar vertical */}
			{/* navbar */}
			<nav className="navbar-vertical-nav d-none d-xl-block">
			  <div className="navbar-vertical">
				<div className="px-4 py-5">
				<Link to="/" className="navbar-brand">
                    <img src="src/assets/images/logo/logo.png" alt="" />
                  </Link>
				</div>
				<div className="navbar-vertical-content flex-grow-1" data-simplebar>
				  <ul className="navbar-nav flex-column" id="sideNavbar">
					<li className="nav-item">
					  <Link className="nav-link " to="/Dashindex">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-house" /></span>
						  <span className="nav-link-text">Dashboard</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Store Managements</span>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Products">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-cart" /></span>
						  <span className="nav-link-text">Products</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Categories">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-list-task" /></span>
						  <span className="nav-link-text">Categories</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navCategoriesOrders" aria-expanded="false" aria-controls="navCategoriesOrders">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-bag" /></span>
						  <span className="nav-link-text">Orders</span>
						</div>
					  </a>
					  <div id="navCategoriesOrders" className="collapse " data-bs-parent="#sideNavbar">
						<ul className="nav flex-column">
						  <li className="nav-item">
							<Link className="nav-link " to="/Orderlist">List</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/Ordersingle">Single</Link>
						  </li>
						</ul>
					  </div>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Vendorgrid">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-shop" /></span>
						  <span className="nav-link-text">Sellers / Vendors</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <a className="nav-link " href="#" data-bs-toggle="collapse" data-bs-target="#navCustomer" aria-expanded="false" aria-controls="navCustomer">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-people" /></span>
						  <span className="nav-link-text">Customers</span>
						  <span className="badge bg-light-success text-dark-success ms-2">New</span>
						</div>
					  </a>
					  <div id="navCustomer" className="collapse  show " data-bs-parent="#sideNavbar">
						<ul className="nav flex-column">
						  <li className="nav-item">
							<Link className="nav-link  active " to="/Customers">Customers</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/Createcustomers">Create Customers</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/CustomerEdit">Edit Customers</Link>
						  </li>
						</ul>
					  </div>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Reviews">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-star" /></span>
						  <span className="nav-link-text">Reviews</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
                  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navCategoriesPassword" aria-expanded="false" aria-controls="navCategoriesPassword">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon"><i className="bi bi-key" /></span>
                      <span className="nav-link-text">Password</span>
                    </div>
                  </a>
                  <div id="navCategoriesPassword" className="collapse " data-bs-parent="#sideNavbar">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link " to="/ForgotPass">Forgot Password</Link>
                      </li>
                      {/* Nav item */}
                      <li className="nav-item">
                        <Link className="nav-link " to="/Changepassword">Update Password</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navCategoriesMyAccount" aria-expanded="false" aria-controls="navCategoriesMyAccount">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon"><i className="bi bi-person" /></span>
                      <span className="nav-link-text">My Account</span>
                    </div>
                  </a>
                  <div id="navCategoriesMyAccount" className="collapse " data-bs-parent="#sideNavbar">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link " to="/Orders">Orders</Link>
                      </li>
                      {/* Nav item */}
                      <li className="nav-item">
                        <Link className="nav-link " to="/Settings">Settings</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/Address">Address</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/Payment">Payment Method</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/Notification">Notification</Link>
                      </li>
                    </ul>
                  </div>
                </li>
					{/* Nav item */}
					<li className="nav-item">
					  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelFirst" aria-expanded="false" aria-controls="navMenuLevelFirst">
						<span className="nav-link-icon"><i className="bi bi-arrow-90deg-down" /></span>
						<span className="nav-link-text">Menu Level</span>
					  </a>
					  <div id="navMenuLevelFirst" className="collapse " data-bs-parent="#sideNavbar">
						<ul className="nav flex-column">
						  <li className="nav-item">
							<a className="nav-link " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelSecond1" aria-expanded="false" aria-controls="navMenuLevelSecond1">
							  Two Level
							</a>
							<div id="navMenuLevelSecond1" className="collapse" data-bs-parent="#navMenuLevel">
							  <ul className="nav flex-column">
								<li className="nav-item">
								  <a className="nav-link " href="#">NavItem 1</a>
								</li>
								<li className="nav-item">
								  <a className="nav-link " href="#">NavItem 2</a>
								</li>
							  </ul>
							</div>
						  </li>
						  <li className="nav-item">
							<a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThreeOne1" aria-expanded="false" aria-controls="navMenuLevelThreeOne1">
							  Three Level
							</a>
							<div id="navMenuLevelThreeOne1" className="collapse " data-bs-parent="#navMenuLevel">
							  <ul className="nav flex-column">
								<li className="nav-item">
								  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThreeTwo" aria-expanded="false" aria-controls="navMenuLevelThreeTwo">
									NavItem 1
								  </a>
								  <div id="navMenuLevelThreeTwo" className="collapse collapse " data-bs-parent="#navMenuLevelThree">
									<ul className="nav flex-column">
									  <li className="nav-item">
										<a className="nav-link " href="#">NavChild Item 1</a>
									  </li>
									</ul>
								  </div>
								</li>
								<li className="nav-item">
								  <a className="nav-link " href="#">Nav Item 2</a>
								</li>
							  </ul>
							</div>
						  </li>
						</ul>
					  </div>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Site Settings</span>
					  <span className="badge bg-light-info text-dark-info">Coming Soon</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navBlog" aria-expanded="false" aria-controls="navBlog">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-newspaper" /></span>
						  <span className="nav-link-text">Blog</span>
						  <span className="badge bg-light-success text-dark-success ms-2">New</span>
						</div>
					  </a>
					  <div id="navBlog" className="collapse " data-bs-parent="#sideNavbar">
						<ul className="nav flex-column">
						  <li className="nav-item">
							<Link className="nav-link " to="/Bloggrid">Grid</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/Bloglist">List</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/Blognewpost">Add Post</Link>
						  </li>
						</ul>
					  </div>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-images" /></span>
						  <span className="nav-link-text">Media</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-gear" /></span>
						  <span className="nav-link-text">Store Settings</span>
						</div>
					  </a>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Support</span>
					  <span className="badge bg-light-info text-dark-info">Coming Soon</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-headphones" /></span>
						  <span className="nav-link-text">Support Ticket</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-question-circle" /></span>
						  <span className="nav-link-text">Help Center</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-infinity" /></span>
						  <span className="nav-link-text">How FreshCart Works</span>
						</div>
					  </a>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Our Apps</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-apple" /></span>
						  <span className="nav-link-text">Apple Store</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-google-play" /></span>
						  <span className="nav-link-text">Google Play Store</span>
						</div>
					  </a>
					</li>
				  </ul>
				</div>
			  </div>
			</nav>
			<nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex={-1} id="offcanvasExample">
			  <div className="navbar-vertical">
				<div className="px-4 py-5 d-flex justify-content-between align-items-center">
				<Link to="/" className="navbar-brand">
                    <img src="src/assets/images/logo/logo.png" alt="" />
                  </Link>
				  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
				</div>
				<div className="navbar-vertical-content flex-grow-1" data-simplebar>
				  <ul className="navbar-nav flex-column">
					<li className="nav-item">
					  <Link className="nav-link " to="/Dashindex">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-house" /></span>
						  <span>Dashboard</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Store Managements</span>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Products">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-cart" /></span>
						  <span className="nav-link-text">Products</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Categories">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-list-task" /></span>
						  <span className="nav-link-text">Categories</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navOrders" aria-expanded="false" aria-controls="navOrders">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-bag" /></span>
						  <span className="nav-link-text">Orders</span>
						</div>
					  </a>
					  <div id="navOrders" className="collapse " data-bs-parent="#sideNavbar">
						<ul className="nav flex-column">
						  <li className="nav-item">
							<Link className="nav-link " to="/Orderlist">List</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link " to="/Ordersingle">Single</Link>
						  </li>
						</ul>
					  </div>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Vendorgrid">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-shop" /></span>
						  <span className="nav-link-text">Sellers / Vendors</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <Link className="nav-link  active " to="/Customers">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-people" /></span>
						  <span className="nav-link-text">Customers</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item">
					  <Link className="nav-link " to="/Reviews">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-star" /></span>
						  <span className="nav-link-text">Reviews</span>
						</div>
					  </Link>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Site Settings</span>
					  <span className="badge bg-light-info text-dark-info">Coming Soon</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link " href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-newspaper" /></span>
						  <span className="nav-link-text">Blog</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-images" /></span>
						  <span className="nav-link-text">Media</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-gear" /></span>
						  <span className="nav-link-text">Store Settings</span>
						</div>
					  </a>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Support</span>
					  <span className="badge bg-light-info text-dark-info">Coming Soon</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-headphones" /></span>
						  <span className="nav-link-text">Support Ticket</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-question-circle" /></span>
						  <span className="nav-link-text">Help Center</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-infinity" /></span>
						  <span className="nav-link-text">How FreshCart Works</span>
						</div>
					  </a>
					</li>
					<li className="nav-item mt-6 mb-3">
					  <span className="nav-label">Our Apps</span>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-apple" /></span>
						  <span className="nav-link-text">Apple Store</span>
						</div>
					  </a>
					</li>
					<li className="nav-item">
					  <a className="nav-link disabled" href="#!">
						<div className="d-flex align-items-center">
						  <span className="nav-link-icon"><i className="bi bi-google-play" /></span>
						  <span className="nav-link-text">Google Play Store</span>
						</div>
					  </a>
					</li>
					<li id="navMenuLevel" className="collapse " data-bs-parent="#sideNavbar">
					  <ul className="nav flex-column">
						<li className="nav-item">
						  <a className="nav-link " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelSecond2" aria-expanded="false" aria-controls="navMenuLevelSecond2">
							Two Level
						  </a>
						  <div id="navMenuLevelSecond2" className="collapse" data-bs-parent="#navMenuLevel">
							<ul className="nav flex-column">
							  <li className="nav-item">
								<a className="nav-link " href="#">NavItem 1</a>
							  </li>
							  <li className="nav-item">
								<a className="nav-link " href="#">NavItem 2</a>
							  </li>
							</ul>
						  </div>
						</li>
						<li className="nav-item">
						  <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThree2" aria-expanded="false" aria-controls="navMenuLevelThree2">
							Three Level
						  </a>
						  <div id="navMenuLevelThree2" className="collapse " data-bs-parent="#navMenuLevel">
							<ul className="nav flex-column">
							  <li className="nav-item">
								<a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThree3" aria-expanded="false" aria-controls="navMenuLevelThree3">
								  NavItem 1
								</a>
								<div id="navMenuLevelThree3" className="collapse collapse " data-bs-parent="#navMenuLevelThree">
								  <ul className="nav flex-column">
									<li className="nav-item">
									  <a className="nav-link " href="#">NavChild Item 1</a>
									</li>
								  </ul>
								</div>
							  </li>
							  <li className="nav-item">
								<a className="nav-link " href="#">Nav Item 2</a>
							  </li>
							</ul>
						  </div>
						</li>
					  </ul>
					</li>
				  </ul>
				</div>
			  </div>
			</nav>
			<main className="main-content-wrapper">
			  <div className="container">
				<div className="row mb-8">
				  <div className="col-md-12">
					<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
					  <div>
						<h2>Customers</h2>
						{/* breacrumb */}
						<nav aria-label="breadcrumb">
						  <ol className="breadcrumb mb-0">
							<li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
							<li className="breadcrumb-item active" aria-current="page">Customers</li>
						  </ol>
						</nav>
					  </div>
					  <div>
						<Link to="/Createcustomers" className="btn btn-primary">Add New Customer</Link>
					  </div>
					</div>
				  </div>
				</div>
				<div className="row">
				  <div className="col-xl-12 col-12 mb-5">
					<div className="card h-100 card-lg">
					  <div className="p-6">
						<div className="row justify-content-between">
						  <div className="col-md-4 col-12">
							<form className="d-flex" role="search">
							  <label htmlFor="searchCustomers" className="visually-hidden">Search Customers</label>
							  <input className="form-control" type="search" id="searchCustomers" placeholder="Search Customers" aria-label="Search" />
							</form>
						  </div>
						</div>
					  </div>
					  <div className="card-body p-0">
						<div className="table-responsive">
						  <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
							<thead className="bg-light">
							  <tr>
								<th>
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
									<label className="form-check-label" htmlFor="checkAll" />
								  </div>
								</th>
								<th>Name</th>
								<th>Email</th>
								<th>Purchase Date</th>
								<th>Phone</th>
								<th>Spent</th>
								<th/>
							  </tr>
							</thead>
							<tbody>
							  <tr>
								<td>
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerOne" />
									<label className="form-check-label" htmlFor="customerOne" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-1.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Bonnie Howe</a>
									</div>
								  </div>
								</td>
								<td>bonniehowe@gmail.com</td>
								<td>17 May, 2023 at 3:18pm</td>
								<td>-</td>
								<td>$49.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerTwo" />
									<label className="form-check-label" htmlFor="customerTwo" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-2.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Judy Nelson</a>
									</div>
								  </div>
								</td>
								<td>judynelson@gmail.com</td>
								<td>27 April, 2023 at 2:47pm</td>
								<td>435-239-6436</td>
								<td>$490.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerThree" />
									<label className="form-check-label" htmlFor="customerThree" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-3.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">John Mattox</a>
									</div>
								  </div>
								</td>
								<td>johnmattox@gmail.com</td>
								<td>27 April, 2023 at 2:47pm</td>
								<td>347-424-9526</td>
								<td>$29.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerFour" />
									<label className="form-check-label" htmlFor="customerFour" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-4.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Wayne Rossman</a>
									</div>
								  </div>
								</td>
								<td>waynerossman@gmail.com</td>
								<td>27 April, 2023 at 2:47pm</td>
								<td>-</td>
								<td>$39.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerFive" />
									<label className="form-check-label" htmlFor="customerFive" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-5.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Rhonda Pinson</a>
									</div>
								  </div>
								</td>
								<td>rhondapinson@gmail.com</td>
								<td>18 March, 2023 at 2:47pm</td>
								<td>304-471-8451</td>
								<td>$213.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerSix" />
									<label className="form-check-label" htmlFor="customerSix" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-6.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">John Mattox</a>
									</div>
								  </div>
								</td>
								<td>johnmattox@gmail.com</td>
								<td>18 March, 2023 at 2:47pm</td>
								<td>410-636-2682</td>
								<td>$490.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerSeven" />
									<label className="form-check-label" htmlFor="customerSeven" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-7.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Wayne Rossman</a>
									</div>
								  </div>
								</td>
								<td>waynerossman@gmail.com</td>
								<td>18 March, 2023 at 2:47pm</td>
								<td>845-294-6681</td>
								<td>$39.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerEight" />
									<label className="form-check-label" htmlFor="customerEight" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-8.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Richard Shelton</a>
									</div>
								  </div>
								</td>
								<td>richarddhelton@jourrapide.com</td>
								<td>12 March, 2023 at 9:47am</td>
								<td>313-887-8495</td>
								<td>$19.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerNine" />
									<label className="form-check-label" htmlFor="customerNine" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-9.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Stephanie Morales</a>
									</div>
								  </div>
								</td>
								<td>stephaniemorales@gmail.com</td>
								<td>22 Feb, 2023 at 9:47pm</td>
								<td>812-682-1588</td>
								<td>$250.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerTen" />
									<label className="form-check-label" htmlFor="customerTen" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-10.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Stephanie Morales</a>
									</div>
								  </div>
								</td>
								<td>stephaniemorales@gmail.com</td>
								<td>22 Feb, 2023 at 9:47pm</td>
								<td>812-682-1588</td>
								<td>$250.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							  <tr>
								<td className="pe-0">
								  <div className="form-check">
									<input className="form-check-input" type="checkbox" defaultValue id="customerEleven" />
									<label className="form-check-label" htmlFor="customerEleven" />
								  </div>
								</td>
								<td>
								  <div className="d-flex align-items-center">
									<img src="src/assets/images/avatar/avatar-11.jpg" alt="" className="avatar avatar-xs rounded-circle" />
									<div className="ms-2">
									  <a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Pasquale Kidd</a>
									</div>
								  </div>
								</td>
								<td>pasqualekidd@rhyta.com</td>
								<td>22 Feb, 2023 at 9:47pm</td>
								<td>336-396-0658</td>
								<td>$159.00</td>
								<td>
								  <div className="dropdown">
									<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
									  <i className="feather-icon icon-more-vertical fs-5" />
									</a>
									<ul className="dropdown-menu">
									  <li>
										<a className="dropdown-item" href="#">
										  <i className="bi bi-trash me-3" />
										  Delete
										</a>
									  </li>
									  <li>
										<Link className="dropdown-item" to="/CustomerEdit">
										  <i className="bi bi-pencil-square me-3" />
										  Edit
										</Link>
									  </li>
									</ul>
								  </div>
								</td>
							  </tr>
							</tbody>
						  </table>
						</div>
						<div className="border-top d-md-flex justify-content-between align-items-center p-6">
						  <span>Showing 1 to 8 of 12 entries</span>
						  <nav className="mt-2 mt-md-0">
							<ul className="pagination mb-0">
							  <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
							  <li className="page-item"><a className="page-link active" href="#!">1</a></li>
							  <li className="page-item"><a className="page-link" href="#!">2</a></li>
							  <li className="page-item"><a className="page-link" href="#!">3</a></li>
							  <li className="page-item"><a className="page-link" href="#!">Next</a></li>
							</ul>
						  </nav>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</main>
			{/*offcanvas*/}
			<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			  <div className="offcanvas-header border-bottom">
				<h5 className="offcanvas-title" id="offcanvasRightLabel">Customer Details</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
			  </div>
			  <div className="offcanvas-body d-flex flex-column gap-4">
				<div className="d-flex flex-row align-items-center gap-4 w-100">
				  <div className="flex-shrink-0">
					<img src="src/assets/images/avatar/avatar-1.jpg" alt="avatar" className="avatar avatar-xl rounded-circle" />
				  </div>
				  <div className="d-flex flex-column gap-1 flex-grow-1">
					<h3 className="mb-0 h5 d-flex flex-row gap-3">
					  Anita Parmar
					  <span className="badge bg-light-success text-dark-success">Verified</span>
					</h3>
					<div className="d-md-flex align-items-center justify-content-between">
					  <div className>#CU001</div>
					  <div className="text-black-50">
						Last Active:
						<span className="text-dark">31 May, 2025 3:24PM</span>
					  </div>
					</div>
				  </div>
				</div>
				<div className="d-flex flex-md-row flex-column gap-md-6 gap-2">
				  <div className="d-flex flex-row gap-2">
					<span className="text-dark fw-semibold">Email</span>
					<span className="text-black-50">anitaparmar@example.com</span>
				  </div>
				  <div className="d-flex flex-row gap-2">
					<span className="text-dark fw-semibold">Phone Number</span>
					<span className="text-black-50">123-456-7890</span>
				  </div>
				</div>
				<div className="card rounded">
				  <div className="card-body">
					<div className="row">
					  <div className="border-end col-4">
						<div className="d-flex flex-column gap-1">
						  <span className="text-black-50">Join Date</span>
						  <span className="text-dark">31 May, 2024</span>
						</div>
					  </div>
					  <div className="border-end col-4">
						<div className="d-flex flex-column gap-1">
						  <span className="text-black-50">Total Spent</span>
						  <span className="text-dark">$105</span>
						</div>
					  </div>
					  <div className="col-4">
						<div className="d-flex flex-column gap-1">
						  <span className="text-black-50">Total Order</span>
						  <span className="text-dark">3</span>
						</div>
					  </div>
					</div>
				  </div>
				</div>
				<div className="card">
				  <div className="border-bottom p-4">
					<h3 className="mb-0 h6">Details</h3>
				  </div>
				  <div className="card-body p-4 d-flex flex-column gap-5">
					<div className="d-flex flex-column gap-2 lh-1">
					  <div className="h6 mb-0">Email</div>
					  <span className="text-black-50">anitaparmar@example.com</span>
					</div>
					<div className="d-flex flex-column gap-2 lh-1">
					  <div className="h6 mb-0">Phone Number</div>
					  <span className="text-black-50">123-456-7890</span>
					</div>
					<div className="d-flex flex-column gap-2">
					  <div className="h6 mb-0">Address</div>
					  <div>
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
						  <label className="form-check-label" htmlFor="flexRadioDefault1">123 Apple St., Springfield, IL, 62701, USA</label>
						</div>
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
						  <label className="form-check-label" htmlFor="flexRadioDefault2">456 Banana St., Metropolis, NY, 10001, USA</label>
						</div>
					  </div>
					</div>
				  </div>
				</div>
				<div className="card">
				  <div className="bg-light rounded-top px-4 py-3">
					<a href="#" className="d-flex align-items-center justify-content-between text-inherit" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					  <div className="d-flex flex-row align-items-center gap-2">
						<h3 className="mb-0 h5">Orders</h3>
						<span className="text-black-50 lh-1">#001</span>
					  </div>
					  <div className="d-flex flex-row gap-6 align-items-center">
						<div>
						  <span className="text-inherit">
							Date:
							<span className="text-dark">31 May, 2025</span>
						  </span>
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-down chevron-down" viewBox="0 0 16 16">
						  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
						</svg>
					  </div>
					</a>
				  </div>
				  <div className="card-body py-0 px-4">
					<div className="accordion d-flex flex-column" id="accordionExample1">
					  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
						<ul className="list-group list-group-flush mb-0">
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">Organic Banana</span>
							  </div>
							  <span className="text-black-50">$35.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-15.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">Fresh Apple</span>
							  </div>
							  <span className="text-black-50">$70.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-19.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">BeetRoot</span>
							  </div>
							  <span className="text-black-50">$29.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-3">
							<div className="d-flex flex-row justify-content-between">
							  <span className="text-dark fw-semibold">Total Order Amount</span>
							  <span className="text-dark fw-semibold">$134.00</span>
							</div>
						  </li>
						</ul>
					  </div>
					</div>
				  </div>
				</div>
				<div className="card">
				  <div className="bg-light rounded-top px-4 py-3">
					<a href="#" className="d-flex align-items-center justify-content-between text-inherit" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					  <div className="d-flex flex-row align-items-center gap-2">
						<h3 className="mb-0 h5">Orders</h3>
						<span className="text-black-50 lh-1">#002</span>
					  </div>
					  <div className="d-flex flex-row gap-6 align-items-center">
						<div>
						  <span className="text-inherit">
							Date:
							<span className="text-dark">12 May, 2025</span>
						  </span>
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-down chevron-down" viewBox="0 0 16 16">
						  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
						</svg>
					  </div>
					</a>
				  </div>
				  <div className="card-body py-0 px-4">
					<div className="accordion d-flex flex-column" id="accordionExample2">
					  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
						<ul className="list-group list-group-flush mb-0">
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">Organic Banana</span>
							  </div>
							  <span className="text-black-50">$35.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-15.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">Fresh Apple</span>
							  </div>
							  <span className="text-black-50">$70.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-1">
							<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
							  <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
								<img src="src/assets/images/products/product-img-19.jpg" className="icon-shape icon-xxl" alt="product img" />
								<span className="h6 mb-0">BeetRoot</span>
							  </div>
							  <span className="text-black-50">$29.00</span>
							</a>
						  </li>
						  <li className="list-group-item px-0 py-3">
							<div className="d-flex flex-row justify-content-between">
							  <span className="text-dark fw-semibold">Total Order Amount</span>
							  <span className="text-dark fw-semibold">$134.00</span>
							</div>
						  </li>
						</ul>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  </div>
	 
  
  );
};



export default Customers;
