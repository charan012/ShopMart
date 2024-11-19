import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminOrderlist = () => {
  const adminDetails = JSON.parse(sessionStorage.getItem('adminDetails'));
  console.log('Admin Details on Dashboard:', adminDetails); 

  const [profile, setProfile] = useState({
      Id: '',
      name: '',
      email: '',
      phone: '',
      password: '',
      profileImage: null,
      lastname: '',
      fullname: '',
      token: '',
    });
  
  
    useEffect(() => {
      const adminDetails = JSON.parse(sessionStorage.getItem('adminDetails'));
      if (adminDetails) {
        setProfile({
          Id: adminDetails.Id,
          name: adminDetails.Firstname,
          email: adminDetails.Email,
          phone: adminDetails.Phonenumber,
          password: '', // You might want to handle this differently
          profileImage: null, // Placeholder as there's no image in the provided details
          lastname: adminDetails.Lastname,
          fullname: adminDetails.Fullname,
          token: adminDetails.Token,
        });
      }
    }, []);

  return (
    <>
    
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
                          <small>{profile.fullname}</small>
                        </div>
                        <ul className="list-unstyled px-2 py-3">
                          <li>
                            <Link className="dropdown-item" to="/adminProfile">Profile</Link>
                          </li>

                        </ul>
                        <div className="border-top px-5 py-3">
                          <Link to="/admin">Log Out</Link>
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
              <Link to="/adminDash" className="navbar-brand">
                    <img src="src/assets/images/logo/logo.png" alt="" />
                  </Link>
              </div>
              <div className="navbar-vertical-content flex-grow-1" data-simplebar>
                <ul className="navbar-nav flex-column" id="sideNavbar">
                  <li className="nav-item">
                    <Link className="nav-link " to="/adminDash">
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
                    <Link className="nav-link " to="/adminProducts">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-cart" /></span>
                        <span className="nav-link-text">Products</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/adminCateg">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-list-task" /></span>
                        <span className="nav-link-text">Categories</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" data-bs-toggle="collapse" data-bs-target="#navCategoriesOrders" aria-expanded="false" aria-controls="navCategoriesOrders">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-bag" /></span>
                        <span className="nav-link-text">Orders</span>
                      </div>
                    </a>
                    <div id="navCategoriesOrders" className="collapse  show " data-bs-parent="#sideNavbar">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link  active " to="/adminOrdlist">List</Link>
                        </li>
                        {/* Nav item */}
                        <li className="nav-item">
                          <Link className="nav-link " to="/adminOrdsingle">Single</Link>
                        </li>
                      </ul>
                    </div>
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
                      
                      {/* Nav item */}
                      <li className="nav-item">
                        <Link className="nav-link " to="/AdminUpdPass">Update Password</Link>
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

                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex={-1} id="offcanvasExample">
            <div className="navbar-vertical">
              <div className="px-4 py-5 d-flex justify-content-between align-items-center">
              <Link to="/adminDash" className="navbar-brand">
                    <img src="src/assets/images/logo/logo.png" alt="" />
                  </Link>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="navbar-vertical-content flex-grow-1" data-simplebar>
                <ul className="navbar-nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link " to="/adminDash">
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
                    <Link className="nav-link " to="/adminProducts">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-cart" /></span>
                        <span className="nav-link-text">Products</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/adminCateg">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-list-task" /></span>
                        <span className="nav-link-text">Categories</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" data-bs-toggle="collapse" data-bs-target="#navOrders" aria-expanded="false" aria-controls="navOrders">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon"><i className="bi bi-bag" /></span>
                        <span className="nav-link-text">Orders</span>
                      </div>
                    </a>
                    <div id="navOrders" className="collapse  show " data-bs-parent="#sideNavbar">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link  active " to="/adminOrdlist">List</Link>
                        </li>
                        {/* Nav item */}
                        <li className="nav-item">
                          <Link className="nav-link " to="/adminOrdsingle">Single</Link>
                        </li>
                      </ul>
                    </div>
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
          {/* main wrapper */}
          <main className="main-content-wrapper">
            <div className="container">
              {/* row */}
              <div className="row mb-8">
                <div className="col-md-12">
                  {/* page header */}
                  <div>
                    <h2>Order List</h2>
                    {/* breacrumb */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Order List</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                <div className="col-xl-12 col-12 mb-5">
                  {/* card */}
                  <div className="card h-100 card-lg">
                    <div className="p-6">
                      <div className="row justify-content-between">
                        <div className="col-md-4 col-12 mb-2 mb-md-0">
                          {/* form */}
                          <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                          </form>
                        </div>
                        <div className="col-lg-2 col-md-4 col-12">
                          {/* select */}
                          <select className="form-select">
                            <option selected>Status</option>
                            <option value="Success">Success</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancel">Cancel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body p-0">
                      {/* table responsive */}
                      <div className="table-responsive">
                        <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                          <thead className="bg-light">
                            <tr>
                              <th>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                  <label className="form-check-label" htmlFor="checkAll" />
                                </div>
                              </th>
                              <th>Image</th>
                              <th>Order Name</th>
                              <th>Customer</th>
                              <th>Date &amp; TIme</th>
                              <th>Payment</th>
                              <th>Status</th>
                              <th>Amount</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderOne" />
                                  <label className="form-check-label" htmlFor="orderOne" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-1.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1007</a></td>
                              <td>Jennifer Sullivan</td>
                              <td>01 May 2023 (10:12 am)</td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge bg-light-primary text-dark-primary">Success</span>
                              </td>
                              <td>$12.99</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderTwo" />
                                  <label className="form-check-label" htmlFor="orderTwo" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-2.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1006</a></td>
                              <td>Willie Hanson</td>
                              <td>20 April 2023 (9:20 am)</td>
                              <td>COD</td>
                              <td>
                                <span className="badge bg-light-primary text-dark-primary">Success</span>
                              </td>
                              <td>$8.19</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderThree" />
                                  <label className="form-check-label" htmlFor="orderThree" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-3.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1005</a></td>
                              <td>Dori Stewart</td>
                              <td>11 March 2023 (7:12 pm)</td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge bg-light-warning text-dark-warning">Pending</span>
                              </td>
                              <td>$8.19</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderFour" />
                                  <label className="form-check-label" htmlFor="orderFour" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-4.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1004</a></td>
                              <td>Ezekiel Rogerson</td>
                              <td>09 March 2023 (6:23 pm)</td>
                              <td>Stripe</td>
                              <td>
                                <span className="badge bg-light-primary text-dark-primary">Success</span>
                              </td>
                              <td>$23.11</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderFive" />
                                  <label className="form-check-label" htmlFor="orderFive" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-5.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1003</a></td>
                              <td>Maria Roux</td>
                              <td>18 Feb 2022 (12:20 pm)</td>
                              <td>COD</td>
                              <td>
                                <span className="badge bg-light-primary text-dark-primary">Success</span>
                              </td>
                              <td>$2.00</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderSix" />
                                  <label className="form-check-label" htmlFor="orderSix" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-6.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1002</a></td>
                              <td>Robert Donald</td>
                              <td>12 Feb 2022 (4:56 pm)</td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge bg-light-danger text-dark-danger">Cancel</span>
                              </td>
                              <td>$56.00</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="orderSeven" />
                                  <label className="form-check-label" htmlFor="orderSeven" />
                                </div>
                              </td>
                              <td>
                                <a href="#!"><img src="src/assets/images/products/product-img-7.jpg" alt="" className="icon-shape icon-md" /></a>
                              </td>
                              <td><a href="#" className="text-reset">FC#1001</a></td>
                              <td>Diann Watson</td>
                              <td>22 Jan 2023 (1:20 pm)</td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge bg-light-primary text-dark-primary">Success</span>
                              </td>
                              <td>$23.00</td>
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
                                      <a className="dropdown-item" href="#">
                                        <i className="bi bi-pencil-square me-3" />
                                        Edit
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
          </main>
        </div>
        {/* Libs JS */}
        {/*  */}
        {/* Theme JS */}
        
    </>
  );
}

export default AdminOrderlist;
