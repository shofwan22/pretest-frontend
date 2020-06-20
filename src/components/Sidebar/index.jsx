import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSidebar } from '../../modules';
import {
  Add32,
  Home32,
  Document32,
  Group32,
  Settings32,
  Close32,
} from "@carbon/icons-react";

import Logo from '../../assets/images/logo.svg';
import "./index.scss";

const Sidebar = (props) => {

  const handleClose = (e) => {
    let className = e.target.className;
    if (className === 'container-sidebar is-open') {
      props.handleSidebar(false)
    }
  }

  return (
    <Fragment>
      <div className={`container-sidebar ${props.showSidebar && "is-open"}`} onClick={handleClose}>
        <div className="sidebar">
          <div className="d-flex justify-content-between sidebar-item-top">
            <Link to="/">
              <img src={Logo} alt="" className="img-fluid mb-4" />
            </Link>
            <div className="btn-close md-none">
              <Close32 className="icon icon-close" onClick={() => { props.handleSidebar(false) }}/>
            </div>
          </div>
          <button className="btn btn-privy sidebar-item mb-4">
            <Add32 className="icon" />
          </button>
          <div className="sidebar-item-menu sidebar-item-menu-active">
            <Link to="/">
              <Home32 className="icon" />
            </Link>
          </div>
          <div className="sidebar-item-menu">
            <Link to="/">
              <Document32 className="icon" />
            </Link>
          </div>
          <div className="sidebar-item-menu">
            <Link to="/">
              <Group32 className="icon" />
            </Link>
          </div>
          <div className="sidebar-item-menu sidebar-item-bottom">
            <Link to="/">
              <Settings32 className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  handleSidebar
}

const mapStateToProps = state => {
  return {
    showSidebar: state.sidebarMobile.showSidebar
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
