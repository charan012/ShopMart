import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    Id: '',
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    ProfileImage: '',
    Lastname: '',
    Fullname: '',
    Token: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const adminDetails = JSON.parse(sessionStorage.getItem('adminDetails'));
    if (adminDetails) {
      setProfile(adminDetails);
      setImagePreview(adminDetails.profileImage || ''); // Use the available image
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
                    <small>{profile.email}</small>
                  </div>
                  <ul className="list-unstyled px-2 py-3">
                      <li>
                        <Link className="dropdown-item" to="/adminprofile">Profile</Link>
                      </li>
                  </ul>
                  <div className="border-top px-5 py-3">
                    <a href="/admin">Log Out</a>
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
                <Link className="nav-link  active " to="/adminProducts">
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
                <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navCategoriesOrders" aria-expanded="false" aria-controls="navCategoriesOrders">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon"><i className="bi bi-bag" /></span>
                    <span className="nav-link-text">Orders</span>
                  </div>
                </a>
                <div id="navCategoriesOrders" className="collapse " data-bs-parent="#sideNavbar">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link " to="/adminOrdlist">List</Link>
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
                <Link className="nav-link  active " to="/adminProducts">
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
                <a className="nav-link  collapsed " href="#" data-bs-toggle="collapse" data-bs-target="#navOrders" aria-expanded="false" aria-controls="navOrders">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon"><i className="bi bi-bag" /></span>
                    <span className="nav-link-text">Orders</span>
                  </div>
                </a>
                <div id="navOrders" className="collapse " data-bs-parent="#sideNavbar">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link " to="/adminOrdlist">List</Link>
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
      <main className="main-content-wrapper">
       
      <div className="profile-dashboard" style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <div className='row'>
        <h2>Profile Dashboard</h2>
       </div>
       <form>
       <div className='row'>
        <div className="form-group text-center">
          {/* <label htmlFor="profileImage">Profile Image</label> */}
          {imagePreview ? (
            <img 
              src={imagePreview} 
              alt="Profile" 
              style={{ width: '250px', height: '250px', borderRadius: '50%', marginTop: '10px' }} 
            />
          ) : (
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUBAv/EADgQAAIBAgMFBAYKAwEAAAAAAAABAgMEBRExBhIhQWFRcYHBEyIjMrHRFSVDUlNicpGhwiRC8BT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALSABpkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaahQDXQAAAEAAAAAAAAAAAAAAAADyTjGLlJ5RSzbbySPSIbZ4tLe+jaEso5Z12tX2RAYxtZLedHCt1RXB15LPP9K7OpGbi7ubmW9Xr1Zv802YQXEZre7ubeW9Qr1YP8s2SbBtrZKSo4ruuL4KvFZZfqXZ1ImAsW1GUZRUovOLWaaeaZ6RHYzFZbzw64lmss6Deq7Y/IlxAAAAAAAAAAAAAAAAB81Jxp05zn7sYtvuy4lVXFedzXqV6nv1JOT8SzcUz+jLzLX0M/gyrgUABpAAEpGS3rzta9OvT9+lJTXgWrCcalOE4e7KKa7ipi0cKzWF2eevoYfBEVtAAAAAAAAAAAAAAAA+KtNVqNSk9JxcX4rIqhxlBuE1lOLykuq1LaIDtfh0rTEXcwg/QXLcs+UZc15gcIAGkAASrHqjKclCCznJ5RXV6FsUqao0adJaQiorwRBNkcOld4grmcX6C2alnylPkvMnpAAAAAAAAAAAAAAAAAMF5a0b23lQuYKdOWq596fJmcAQXEtlL23m5Wf+VS5ZNKa71z8DiVLO6pPKpbVovrBotXu/hHy5RS9aSXewqradndVXlTtq0n2Km2drDNlL24mpXi/81Lmm05vuXLxJzGUWvVkn4nr/AOzQRgs7WjZW8aFtBQpx0XPvb5szgAAAAAAAAAAAAAAAA5mN4xQwmgnNb9aa9nST16vsQG7dXVG0ourcVY06a1lJkYxDbHWOHUOH4lXyj8yNYhf3OI13Vu6jk/8AVLhGK6I1ga3rrGcSun7a8rbv3Yy3V+yNJylJ+tJvq2eAuI9jKUX6smuqZu22M4lav2N5W3fuzlvL9maIGCXYftjpHEaCy/EpecfkSe1uqN3SVW2qxqU3pKLKqNrD7+5w6v6W1qOL5p8Yy70Fi0Qc3BcYoYtQcoLcrQXtKTenVdqOkQAAAAAAAAAABqYpf0sNs53NbjlwjFPjKT0RWt5d1r25ncXE3Kc3x6dF0OvtdiLvMSdCD9lbZxy7Zc35eBwgAAKgACgAAAAAzWd3WsbmFxbzcZwfDr0fQsrC7+liVnC5o8M+Eo58YyWqKvO7shiDs8SVCb9lc5Ry/Nyfl4kVPgAQAAAAAA1sSulZWFxc86cG138v5Nk4O2dV08FcV9pVjF/HyAgWbfGTzb1faACxAAFAAAAAAAAAZtcYvJrR9gBFWlht0r2woXHOpBN9/P8Ak2Tg7GVXUwVRf2dWUfPzO8QAAAAAAjW3j+rrZcnX/qzwAQoAFiAAKAAAAAAAAAAAm2wj+rrhclX/AKokoBlYAAD/2Q=="
              alt="Default Profile"
              style={{ width: '250px', height: '250px', borderRadius: '50%', marginTop: '10px' }}
            />
          )}
        </div>
        </div>
         <br/>
        <div className="container">
               
                  <div className="row">
                <div className="form-group col-md-6 text-right">
          <label>ID:</label>
          <input type="text" className="form-control" value={profile.Id} readOnly />
        </div>
          <br/>
        <div className="form-group col-md-6">
          <label>Full Name:</label>
          <input type="text" className="form-control" value={profile.Fullname} readOnly />
        </div>
        </div>
        <div className="row">
        <div className="form-group col-md-6">
          <label>Email:</label>
          <input type="email" className="form-control" value={profile.Email} readOnly />
        </div>
           <br/>
        <div className="form-group col-md-6">
          <label>Phone Number:</label>
          <input type="tel" className="form-control" value={profile.Phonenumber} readOnly />
        </div>
        </div><br/>
        <div className="row">
        <div className="form-group col-md-12">
          <label>Token:</label>
          <input type="password" className="form-control" value={profile.Token} disabled />
        </div>
        </div>
        <br/>
        <div className="row">
        <div className="col-md-12 text-center">
        <Link to="/editprofile" className="btn btn-primary " >Edit</Link>
        {/* <Link to="/adminDash" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Go back</Link> */}
        </div>
        </div>
      </div>
      </form>
      </div>
    </main>
    

      
    
    </div>
    </>
 
  );
};

export default AdminProfile;