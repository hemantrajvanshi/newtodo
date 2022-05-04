import React from "react";
import { Link } from "react-router-dom";
import "./addTodo.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const AddTodo =()=> {
return (
    <>
        <section className="loginBG">
        <div className="container ">
          <div className="d-flex justify-content-center h-100">
            <div className="card shadow-lg">
              <h1 className="text-white fs-3 text-center">Add Todo</h1>
              
              <div className="card-body">
                <form onSubmit>
                    <div class="row g-2">
                    <div class="col-md">
                          <div class="form-floating">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">ID</label>
                          </div>
                      </div>
                      <div class="col-md">
                          <div class="form-floating">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">User ID</label>
                          </div>
                      </div>
                      <div class="col-md">
                          <div class="form-floating">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Title</label>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-floating">
                          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/ >
                            <label for="floatingInputGrid">Description</label>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              
                              <option selected value="1">TODO</option>
                              <option value="2">In Progress</option>
                              <option value="3">Done</option>
                            </select>
                            <label for="floatingSelectGrid">Select Todo State</label>
                          </div>
                        </div>
                      </div>

                      <div class="text-center p-3">
                      <button class="btn btn-lg login_btn" type="button">Add</button>
                      
                     </div>

                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links fs-5 light">
                View All TODO's <Link to="/viewtodo">click Here</Link>
                  </div>
                  
                  <br />
                <div className="d-flex justify-content-center">
                  <Link to="/">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);
};

export default AddTodo;
