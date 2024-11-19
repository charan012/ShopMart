import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shopwishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]); // Initially empty wishlist

  
  return (
    <>
      <main>
        {/* section*/}
        <div className="mt-4">
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a href="/Shopwide">Shop</a></li>
                    <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Section */}
        <section className="mt-8 mb-14">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-8">
                  {/* heading */}
                  <h1 className="mb-1">My Wishlist</h1>
                  {wishlistItems.length === 0 ? (
                    <p></p>
                  ) : (
                    <p>There are {wishlistItems.length} products in this wishlist.</p>
                  )}
                </div>

                {/* If wishlist is empty, show "Your cart is empty" message */}
                {wishlistItems.length === 0 ? (
                  <div className="text-center">
                    <img src="src/assets/images/banner/cart-empty.jpg" alt="Cart Empty" className="img-fluid mb-4"  style={{ width: '200px' }} />
                    <h2>Your cart is empty</h2>
                    <p>There are no products in this wishlist.</p>
                  </div>
                ) : (
                  // Show table only if there are items in the wishlist
                  <div className="table-responsive">
                    <table className="table text-nowrap table-with-checkbox">
                      <thead className="table-light">
                        <tr>
                          <th>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="checkAll" />
                              <label className="form-check-label" htmlFor="checkAll" />
                            </div>
                          </th>
                          <th />
                          <th>Product</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((item, index) => (
                          <tr key={index}>
                            <td className="align-middle">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id={`checkbox${index}`} />
                                <label className="form-check-label" htmlFor={`checkbox${index}`} />
                              </div>
                            </td>
                            <td className="align-middle">
                              <a href="#"><img src={item.image} className="icon-shape icon-xxl" alt={item.name} /></a>
                            </td>
                            <td className="align-middle">
                              <div>
                                <h5 className="fs-6 mb-0"><a href="#" className="text-inherit">{item.name}</a></h5>
                                <small>{item.description}</small>
                              </div>
                            </td>
                            <td className="align-middle">{item.amount}</td>
                            <td className="align-middle"><span className={`badge ${item.inStock ? 'bg-success' : 'bg-danger'}`}>{item.inStock ? 'In Stock' : 'Out of Stock'}</span></td>
                            <td className="align-middle">
                              <div className="btn btn-primary btn-sm">Add to Cart</div>
                            </td>
                            <td className="align-middle">
                              <a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <i className="feather-icon icon-trash-2" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shopwishlist;
