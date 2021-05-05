import React from 'react';
import "../styles/login-style.css"
import { Link } from 'react-router-dom';

export default function login() {







    return (
        <div>

        {/* <!-- Modal --> */}
        <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">
                      Login
                    </h2>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      {/*     MODAL BODY    */}

                      <form className="login-form">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                          
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        {/* <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" class="btn btn-primary mr-5">Login</button>
                        <small>Need an account?</small>
                        <Link to="/SignUp">
                          <button type="submit" class="btn btn-primary ml-2" aria-label="Close">SignUp</button>
                        </Link>
                    </form>

                  {/*  END MODAL BODY */}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
    
    )
}
