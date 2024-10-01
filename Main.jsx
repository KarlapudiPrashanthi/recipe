import logo from './logo.webp';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Main() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
       <header className="icon-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <h1>Smart recipe recomendation system</h1>
        </div>
        <div className="nav-buttons">
        <button className="nav-button">About</button>
          <button className="nav-button">Home</button>
          <button className="nav-button">Services</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       
        <ul className="sidebar-list">
          <Link to="/breakfast"><li>Breakfast</li></Link> 
          <Link to="/Quickmeals"><li>Quickmeals</li></Link>
          <Link to="/Lunch"><li>Lunch</li></Link>
         <Link  to="/Dinner"><li>Dinner</li></Link>
        </ul>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <div className="content">
        <h1>Main Content Area</h1>
        <p>Here you can display your main content.</p>
      </div>
    </div>
  );
}

export default Main;