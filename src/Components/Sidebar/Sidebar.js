import React from 'react'

const Sidebar = () => {
  return (
    <div className="container-fluid sidebar">
    
        <ul className="social-icon-list">
            <li>
                <a href="/" target="_blank"><i className="fab fa-twitter-square"></i></a>
            </li>
            <li>
                <a href="/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
                <a href="/" target="_blank"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
                <a href="/" target="_blank"><i class="fab fa-youtube"></i></a>
            </li>
        </ul>
    </div>
  )
}
export default Sidebar;