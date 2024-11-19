import React from "react";
function Anartisstjourney(){
    return(
        <div>
            <section className="py-lg-16 py-10" style={{ background: 'url(src/assets/images/banner/banner-4.jpg) no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="card border-0 shadow">
                  <div className="card-body p-6">
                    <div className="mb-4" style={{ textAlign: 'justify' }}>
                      <h1 className="mt-3 mb-2 h4">"Embracing the Infinite
                        Canvas: An Artist's Journey"
                      </h1>
                      <small className="mt-3">I inspirat"I am an artist, and my passion for painting is boundless.
                        I find inspiration in the beauty of nature and the vast mysteries of the universe. With every brushstroke, Iion in the beauty of nature and the vast mysteries of the universe.
                        With every brushstroke, I explore new ideas and embrace the thrill of learning and trying something new, every time, everywhere."find</small>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary mt-4">Shop Now</button>
                      </div>
                    </div>
                    {/* <form>
                              <div class="row g-3">
                                 <div class="col">
                                    <label for="postcod" class="visually-hidden">Postcode</label>
                                    <input type="text" class="form-control" id="postcod" placeholder="Enter Postcode" maxlength="6" onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                                 </div>
                                 <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Check</button>
                                 </div>
                              </div>
                           </form> */}
                  </div>
                </div>
                {/* <div class="mt-3">
                        <small class="text-white">
                           Hello, Sign in for the best experience. New to Freshcart?
                           <a href="#" class="text-white">Register</a>
                        </small>
                     </div> */}
              </div>
            </div>
          </div>
        </section>
 
        </div>
    )
}
export default Anartisstjourney;