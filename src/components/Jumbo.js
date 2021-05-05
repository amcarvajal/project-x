import React from "react";
import "../styles/home-style.css";
// IMAGES
import componentsImage from "../assets/svg/react.svg";
import collageImage from "../assets/svg/frameworks.svg";
import themes from "../assets/svg/themes.svg";

export default function Jumbo() {
  return (
    <div>
      <div className="jumbo row">
        <div className="col col- mt-5">
          <div className="card-jumbo ">
            <img src={collageImage}></img>
            <h4>UI/UX Designs</h4>
            <a href="#"  class="btn btn-light btn-card jumbo-botton border-dark">
              View more
            </a>
          </div>
        </div>
        <div className="col-5 col- mt-4">
          <div className="card-jumbo">
            <img src={componentsImage}></img>
            <h4>React Components</h4>
            <a href="#" class="btn btn-light btn-card jumbo-botton  border-dark">
              View more
            </a>
          </div>
        </div>
        <div className="col col- mt-5">
          <div className="card-jumbo ">
            <img src={themes}></img>
            <h4>Themes</h4>
            <a href="#" class="btn btn-light btn-card jumbo-botton  border-dark">
            View more
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
