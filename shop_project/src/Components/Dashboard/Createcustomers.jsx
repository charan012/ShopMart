import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Createcustomers = () => {
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
							<Link className="nav-link " to="/Customers">Customers</Link>
						  </li>
						  {/* Nav item */}
						  <li className="nav-item">
							<Link className="nav-link  active " to="/Createcustomers">Create Customers</Link>
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
							<Link className="nav-link " to="/Blognewpost">New Post</Link>
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
					  <Link className="nav-link " to="/Customers">
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
					<div>
					  <h2>Create Customer</h2>
					  {/* breacrumb */}
					  <nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0">
						  <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
						  <li className="breadcrumb-item active" aria-current="page">Create</li>
						</ol>
					  </nav>
					</div>
				  </div>
				</div>
				<div className="row">
				  <div className="col-12">
					<div className="card shadow border-0">
					  <div className="card-body d-flex flex-column gap-8 p-7">
						<div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
						  <div>
							<img className="image avatar avatar-lg rounded-3" src="src/assets/images/docs/placeholder-img.jpg" alt="Image" />
						  </div>
						  <div className="file-upload btn btn-light ms-md-4">
							<input type="file" className="file-input opacity-0" />
							Upload Photo
						  </div>
						  <span className="ms-2">JPG, GIF or PNG. 1MB Max.</span>
						</div>
						<div className="d-flex flex-column gap-4">
						  <h3 className="mb-0 h6">Customer Information</h3>
						  <form className="row g-3 needs-validation" noValidate>
							<div className="col-lg-6 col-12">
							  <div>
								{/* input */}
								<label htmlFor="creatCustomerName" className="form-label">
								  Name
								  <span className="text-danger">*</span>
								</label>
								<input type="text" className="form-control" id="creatCustomerName" placeholder="Customer Name" required />
								<div className="invalid-feedback">Please enter customer name</div>
							  </div>
							</div>
							<div className="col-lg-6 col-12">
							  <div>
								{/* input */}
								<label htmlFor="creatCustomerEmail" className="form-label">
								  Email
								  <span className="text-danger">*</span>
								</label>
								<input type="email" className="form-control" id="creatCustomerEmail" placeholder="Email Address" required />
								<div className="invalid-feedback">Please enter email</div>
							  </div>
							</div>
							<div className="col-lg-6 col-12">
							  <div>
								{/* input */}
								<label htmlFor="creatCustomerPhone" className="form-label">Phone</label>
								<input type="text" className="form-control" id="creatCustomerPhone" placeholder="Number" required />
								<div className="invalid-feedback">Please enter phone</div>
							  </div>
							</div>
							<div className="col-lg-6 col-12">
							  <label className="form-label" htmlFor="creatCustomerDate">Birthday</label>
							  <input type="text" className="form-control flatpickr" id="creatCustomerDate" placeholder="dd/mm/yyyy" required />
							  <div className="invalid-feedback">Please enter date</div>
							</div>
							<div>
							  <div className="col-12 mt-3">
								<div className="d-flex flex-column flex-md-row gap-2">
								  <button className="btn btn-primary" type="submit">Create New Customer</button>
								  <button className="btn btn-secondary" type="submit">Cancel</button>
								</div>
							  </div>
							</div>
						  </form>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</main>
		  </div>
		</div>
	  
  
  );
};



export default Createcustomers;
