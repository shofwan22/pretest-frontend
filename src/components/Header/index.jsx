import React from 'react';
import { connect } from 'react-redux';
import { handleSidebar } from '../../modules';
import { UserAvatarFilled32, Search32, NotificationNew32, Menu32 } from "@carbon/icons-react";
import './index.scss';

const Header = (props) => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav d-md-none mr-auto">
          <Menu32 className="icon icon-menu" onClick={() => { props.handleSidebar(true) }}/>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">            
            <div className="input-group form-search">
              <input type="text" name="search" id="search" placeholder="Search documents" className="form-control"/>
              <div className="input-group-append">
                <Search32 className="icon"/>
              </div>
            </div>
          </li>
          <li className="nav-item navbar-notif">
            <NotificationNew32 className="icon icon-notif"/>
          </li>
          <li className="nav-item navbar-user">
            <div className="d-flex text-right"> 
              <div className="wrapper mr-3">
                <div className="small">
                  <b>PT. PRIVY IDENTITAS DIGITAL</b>
                </div>
                <div className="small">
                  as Backend Developer
                </div>
              </div>
              <span className="ava">
                <UserAvatarFilled32 className="icon-ava" />
              </span>
            </div>            
          </li>
        </ul>
      </nav>
    );
}

const mapDispatchToProps = {
  handleSidebar
}

export default connect(null, mapDispatchToProps)(Header);