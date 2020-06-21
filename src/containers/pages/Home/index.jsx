import React, { Component } from 'react';
import { Building32, User32, Purchase32, Settings32, Launch32, Chat32, Group32, CheckmarkOutline32, UserAvatar32, ChevronRight32 } from "@carbon/icons-react";
import './index.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-header text-center text-md-left">
                    <h2 className="home-header-text">
                        Welcome Back, Afriq Ramadhan
                    </h2>
                    <div className="home-header-section">
                        <div className="home-header-section-start">
                            <div className="section-info">
                                <span className="badge text-capitalize text-muted section-info-content">
                                    <Building32 className="icon icon-building"/>
                                    PT Privy Identitas Digital
                                </span>
                                <span className="badge text-capitalize text-muted section-info-content">
                                    <User32 className="icon icon-building" />
                                    Frontend Developer
                                </span>
                            </div>
                        </div>
                        <div className="home-header-section-end">
                            <div className="section-button">
                                <div className="section-button-settings">
                                    Sysadmin Settings
                                    <Settings32 className="icon" />
                                </div>                                
                                <button className="btn btn-privy btn-privy-block">
                                    Topup
                                    <Purchase32 className="icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-body">
                    <div className="home-body-card">
                        <div className="home-body-card-item card">
                            <div className="head-card text-center">
                                <span className="icon-card icon-card-launch">
                                    <Launch32 className="icon icon-launch" />
                                </span>
                                <p className="text-card text-muted">Action Balance</p>
                                <h5 className="text-card-main">750.000</h5>
                            </div>
                            <div className="bottom-card">
                                <span>Package expired</span>
                                <span>Aug 29, 2022</span>
                            </div>
                        </div>
                        <div className="home-body-card-item card">
                            <div className="head-card text-center">
                                <span className="icon-card icon-card-otp">
                                    <Chat32 className="icon icon-otp" />
                                </span>
                                <p className="text-card text-muted">OTP Balance</p>
                                <h5 className="text-card-main">12.000</h5>
                            </div>
                            <div className="bottom-card">
                                <span>Package expired</span>
                                <span className="text-warning">2 days again</span>
                            </div>
                        </div>
                        <div className="home-body-card-item card">
                            <div className="head-card text-center">
                                <span className="icon-card icon-card-employee">
                                    <Group32 className="icon icon-employee" />
                                </span>
                                <p className="text-card text-muted">Employee Account</p>
                                <h5 className="text-card-main"><span>40</span>/45</h5>
                            </div>
                            <div className="bottom-card bottom-card-center">
                                <span>Change plan</span>
                                <span><ChevronRight32 className="icon"/></span>
                            </div>
                        </div>
                        <div className="home-body-card-item card">
                            <div className="head-card text-center">
                                <span className="icon-card icon-card-verif">
                                    <CheckmarkOutline32 className="icon icon-verif" />
                                </span>
                                <p className="text-card text-muted">Verification Balance</p>
                                <h5 className="text-card-main">750.000</h5>
                            </div>
                            <div className="bottom-card">
                                <span>Package expired</span>
                                <span>Sep 19, 2022</span>
                            </div>
                        </div>
                        <div className="home-body-card-item card">
                            <div className="head-card text-center">
                                <span className="icon-card icon-card-enterprise">
                                    <UserAvatar32 className="icon icon-enterprise" />
                                </span>
                                <p className="text-card text-muted">Enterprise ID</p>
                                <h5 className="text-card-main">BRI002</h5>
                            </div>
                            <div className="bottom-card">
                                <span>Package expired</span>
                                <span>Sep 19, 2022</span>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Home;
