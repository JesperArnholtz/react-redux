import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {/* <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img style={{maxHeight:100 +'%'}} src="images/pluralsight-logo.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                         <li><Link to="authors">Authors</Link></li>
                    </ul>
                </div> */}
    </nav>
  );
};


export default Header; 