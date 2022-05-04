import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";


const HomePage =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    };
return (
    <>
        <section className="loginBG">
        <div className="container ">
            <h6 className="m-2 "><Link to="viewtodo">View Todo Click Here</Link>
            </h6>
          <div className="d-flex justify-content-center h-100">
            <div className="card d-flex justify-content-center ">
              <h1 className="text-white fs-3 ">Have an Account? Sign In</h1>
              <div className="card-header">
                <h5 className="text-white">
                  {allEntry.map((curElem) => {
                    return (
                      <div>
                        <p>your Email - {curElem.email}</p>
                        <p>Your Password - {curElem.password}</p>
                      </div>
                    );
                  })}
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={submitForm}>
                
                  <div className="input-group form-group mb-4">
                    
                    <div class="form-floating mb-4">
                          <input 
                          type="email" 
                          class="form-control" 
                          id="floatingInput" 
                          placeholder="name@example.com" 
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required />
                            <label for="floatingInputGrid">Email</label>
                          
                      </div>
                  </div>
                  <div className="input-group form-group mb-1">
                  <div class="form-floating mb-4 ">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      id="floatingInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                     <label for="floatingInputGrid">Password</label>
                    </div>
                  </div>
                  <div className="row align-items-center remember mb-4">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<Link to="signup">Sign Up</Link>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="#">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);
};

export default HomePage;
