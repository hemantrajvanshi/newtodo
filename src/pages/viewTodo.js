import React from "react";
import { Link } from "react-router-dom";
import "./viewTodo.css";

const ViewTodo =()=> {
return (
    <>
        <section className="vh-100">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="card rounded-3">
                <div className="card-body">
                  <h4 className="text-center pb-3 fs-3 text-white">
                    To Do App
                  </h4>
                  <div className="table-overflow">
                    <table className="table mb-4 table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">User ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Description</th>
                          <th scope="col">State</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <th>hemant123</th>
                          <th>Buy groceries</th>
                          <td>Buy groceries for next week</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-outline-success ms-1 btn-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger ms-1 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">01</th>
                          <th>hemant123</th>
                          <th>Buy groceries</th>
                          <td>Buy groceries for next week</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-outline-success ms-1 btn-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger ms-1 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">01</th>
                          <th>hemant123</th>
                          <th>Buy groceries</th>
                          <td>Buy groceries for next week</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-outline-success ms-1 btn-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger ms-1 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">01</th>
                          <th>hemant123</th>
                          <th>Buy groceries</th>
                          <td>Buy groceries for next week</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-outline-success ms-1 btn-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger ms-1 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">01</th>
                          <th>hemant123</th>
                          <th>Buy groceries</th>
                          <td>Buy groceries for next week</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-outline-success ms-1 btn-sm"
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger ms-1 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer">
                    <div className="d-flex justify-content-center links fs-5 light">
                      Add New TODO<Link to="/addtodo">click Here</Link>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                    <Link to="/">Log Out</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);
};

export default ViewTodo;
