import React from "react";
import "../styles/nav-style.css";
import { Link } from 'react-router-dom';
//Components

export default function Nav() {
  return (
    <div classNameName="nav">
      <nav class="navbar navbar-expand-lg navbar-light text-white">
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
              <Link to="/">
                <li class="nav-item active mr-5">
                <a class="nav-link link" href="#">
                    Home 
                </a>
                </li>
            </Link>
            <Link to="/products">
                <li class="nav-item ml-4">
                <a class="nav-link link" href="#">
                    Link
                </a>
                </li>
            </Link>
          </ul>
          <div className="cart-side mr-5">
            {/* <!-- Button trigger modal --> */}
            
            <button
              type="button"
              className="login-button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            </button>
            
        
          </div>
        </div>
      </nav>
    </div>
  );
}
