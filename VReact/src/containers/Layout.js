import React from 'react';
import { Link } from 'react-router';

import NavbarLink from '../components/NavbarLink';
import Profile from '../components/Profile';

const Layout = ({ children, params, location }) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">VR-Jobs</Link>
        </div>

        <ul className="nav navbar-nav">
          <NavbarLink
            title="About"
            href="/about"
            active={location.pathname.indexOf('about') !== -1}
          />
        </ul>

        <ul className="nav navbar-nav">
          <NavbarLink
            title="Jobs Applied"
            href="/jobs"
            active={location.pathname.indexOf('jobs') !== -1}
          />
        </ul>

        <Profile />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

export default Layout;
