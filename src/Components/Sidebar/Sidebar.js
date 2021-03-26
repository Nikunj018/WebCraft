import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="container-fluid">
        <div className="row">

            <div className="d-none d-sm-block sidebar">
                <ul className="social-icon-list">
                    <li className="list">
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                    </li>
                    <li className="list">
                        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li className="list">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li className="list">
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fab fa-youtube-square"></i></a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
export default Sidebar;