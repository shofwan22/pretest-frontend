import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleModal } from '../../../modules';
import Documents from '../../../components/Documents';
import Modal from '../../../components/Modal';
import { Building32, User32, Purchase32, Settings32, Launch32, Chat32, Group32, CheckmarkOutline32, UserAvatar32, ChevronRight32, Add32} from "@carbon/icons-react";
import './index.scss';
import PreviewDoc from '../../../assets/images/preview.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputRecip: [
                {
                    name: "Input Recipient"
                }
            ]
        }

        this.handleRecip = this.handleRecip.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRecip = (e) => {
        e.preventDefault();
        this.setState({
            inputRecip: this.state.inputRecip.concat([
                {
                    name: "Input Recipient"
                }
            ])
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
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
                <div className="home-document">
                    <div className="home-document-header">
                        <h4 className="home-document-header-title">
                            Latest Waiting Documents
                        </h4>
                        <button className="btn btn-privy btn-privy-block" onClick={() => { this.props.handleModal(true) }}>
                            Upload Document
                            <Add32 className="icon"/>
                        </button>
                    </div>
                    <div className="home-document-body">
                    {
                        dummyDoc.map((data, index) => {
                            return (
                                <Documents data={data} key={index} index={index}/>                                
                            )
                        })
                    }                        
                    </div>
                </div>
                <Modal>
                    <div className="form">
                        <h5 className="text-center">Upload Document</h5>
                        <form className="form-upload" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="privyId">Privy Id</label>
                                <input type="text" className="form-control" placeholder="Privy Id" name="privyId"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="owner">Name Owner</label>
                                <input type="text" className="form-control" placeholder="Name Owner" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="document_title">Document Title</label>
                                <input type="text" className="form-control" placeholder="Document Title" name="document_title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="document_file">Document File</label>
                                <input type="file" className="form-control" name="document_file" />
                            </div>
                            {
                                this.state.inputRecip.map((r, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="form-group">
                                                <label htmlFor="recipient_name">Recipient Name</label>
                                                <input type="text" className="form-control" placeholder="Recipient Name" name="recipient_name[]" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient_id">Recipient id</label>
                                                <input type="text" className="form-control" placeholder="Recipient Id" name="recipient_id[]" />
                                            </div>
                                        </div>                                        
                                    )
                                })
                            }
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" onClick={this.handleRecip}>Add Recipient</button>
                            </div>
                            <button className="btn btn-danger btn-block">Submit</button>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

const dummyDoc = [
    {
        "document_thumbnail": PreviewDoc,
        "document_title": "Annual Reports - District And More",
        "owner": {
            "name": "Chandra Noor Rachman",
            "privyId": "CH0021"
        },
        "recipients": [
            {
                "name": "Recipient One",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Two",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Three",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Four",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Five",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Six",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Seven",
                "privyId": "JK0098"
            }
        ]
    },
    {
        "document_thumbnail": PreviewDoc,
        "document_title": "Annual Reports - District And More",
        "owner": {
            "name": "Chandra Noor Rachman",
            "privyId": "CH0021"
        },
        "recipients": [
            {
                "name": "Recipient One",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Two",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Three",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Four",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Five",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Six",
                "privyId": "JK0098"
            }
        ]
    },
    {
        "document_thumbnail": PreviewDoc,
        "document_title": "Annual Reports - District And More",
        "owner": {
            "name": "Chandra Noor Rachman",
            "privyId": "CH0021"
        },
        "recipients": [
            {
                "name": "Recipient One",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Two",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Three",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Four",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Five",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Six",
                "privyId": "JK0098"
            }
        ]
    },
    {
        "document_thumbnail": PreviewDoc,
        "document_title": "Annual Reports - District And More",
        "owner": {
            "name": "Chandra Noor Rachman",
            "privyId": "CH0021"
        },
        "recipients": [
            {
                "name": "Recipient One",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Two",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Three",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Four",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Five",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Six",
                "privyId": "JK0098"
            }
        ]
    },
    {
        "document_thumbnail": PreviewDoc,
        "document_title": "Annual Reports - District And More",
        "owner": {
            "name": "Chandra Noor Rachman",
            "privyId": "CH0021"
        },
        "recipients": [
            {
                "name": "Recipient One",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Two",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Three",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Four",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Five",
                "privyId": "JK0098"
            },
            {
                "name": "Recipient Six",
                "privyId": "JK0098"
            }
        ]
    }
]

const mapDispatchToProps = {
    handleModal
}

export default connect(null, mapDispatchToProps)(Home);
