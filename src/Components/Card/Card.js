import React from "react";
import './Card.css';

export default function Card({item}) {
    // let image = new Image();
    // image.className = "card-img";
    // image.alt = "card-img";
    // image.src = "../../assets/Profile/profile-bg.jpg";
    
    return (
      <div className="container-fluid">
          <div className="card-container">
                <div class="card text-white" style={{background:item.bgcolor}}>
                    {/* <img class="card-img" src="../../" alt="Card image"></img> */}
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">{item.About}</p>
                    </div>
                </div>
          </div>
         
      </div>
    );
}
