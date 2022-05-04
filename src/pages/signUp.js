import React from "react";
import { Link } from "react-router-dom";

const SignUp =()=> {
return (
    <>
     
     <section className="">
        <div className="container ">
        
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <h1 className="text-white fs-3 ">Create an Account?</h1>
              <div className="card-header">
                {/* <h5 className="text-white">
                 sfsd
                </h5> */}
              </div>
              <div className="card-body">
                <form onSubmit>
                <div className="input-group form-group mb-4">
                <div class="form-floating mb-2">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Enter Full Name</label>
                          </div>
                  </div>
                  <div className="input-group form-group mb-4">
                  <div class="form-floating mb-2">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Enter Mobile No.</label>
                          </div>
                  </div>
                  <div className="input-group form-group mb-4">
                  <div class="form-floating mb-2">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Enter Email</label>
                          </div>
                  </div>
                  <div className="input-group form-group mb-4">
                  <div class="form-floating mb-4">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Enter Password</label>
                          </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                Have an account? <Link to="/">Sign In</Link>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);
};

export default SignUp;
