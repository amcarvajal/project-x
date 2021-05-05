import React from "react";
import "../styles/card-style.css";
import templateCard from "../assets/template-card.png"
import { Link } from 'react-router-dom';

export default function Card({ title}) {
  return (
  <div className="cards">
    <div style={{display:"flex", justifyContent:"center"}}>
      <div class="card mt-5" style={{ width: "18rem" }}>
        <img class="card-img-top" src={templateCard} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            Description
          </p>
          
          <Link to="/singleProduct">
          <a href="#" class="btn btn-light btn-card rounded border-dark">
            View more
          </a>
          </Link>
        </div>
      </div>
    </div>



    </div>
  
  );
}
