import React from 'react';
import { NavLink } from 'react-router-dom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">RF</div>
      <nav className="sidebar-nav">
        <NavLink to="/coins" activeClassName="active-link">
          <MonetizationOnIcon className="sidebar-icon" />
          Coins
        </NavLink>
        <NavLink to="/users" activeClassName="active-link">
          <PeopleAltIcon className="sidebar-icon" />
          Users
        </NavLink>
        <NavLink to="/bots" activeClassName="active-link">
          <SmartToyIcon className="sidebar-icon" />
          Bots
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
