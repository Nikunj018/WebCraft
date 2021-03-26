import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className="container-fluid">
      
      <div className="row row-content align-items-center">
          <div className="col-12 col-md-6 order-last offset-md-1 order-md-fist left-content">
            <div className="row row-heading">
              <h1>Welcome to our new product launch</h1>
              <span className="text-effect">Interactive 3D View of Shoe</span>
            </div>
            <div className="row row-desciption">
              <p> An initiative to provide the look and feel of the product in front of the customer's eyes before buying it.
                 Discover latest and amazing shoe brands with 3D rendering of the product</p>
            </div>
          </div>
          <div className="col-12 col-md-5 order-first order-md-last product-view">
              <p>Animated 3d shoes rendering</p>
          </div>
      </div>
    
  </div>
  )
}
export default Home;