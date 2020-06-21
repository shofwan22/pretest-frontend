import React from 'react';
import { DotMark32, Download32, UserAvatarFilled32 } from "@carbon/icons-react";
import './index.scss';

const replaceName = (data, type) => {
    var name = data;
    if (type === 'title') {
        if (name.length > 25) {
            name = `${name.substring(0, 25)}...`;
        }
    } else if (type === 'name') {
        if (name.length > 17) {
            name = `${name.substring(0, 17)}...`;
        }
    }
    return name;
}

const initialHandle = (data) => {
    var matches = data.match(/\b(\w)/g);
    var result = matches.join('');
    return result;
}

const Documents = (props) => {
    return (
        <div className="home-document-body-item">
            <div className="document-thumbnail">
                <img className="document-thumbnail-img" src={props.data.document_thumbnail} alt="" />
                <div className="container-recip">
                    <div className="list-recip">
                        <div className="list-recip-title">
                            Recipients
                        </div>
                        <div className="list-recip-ava">
                        {
                            props.data.recipients.slice(0, 6).map((rec, i) => {
                                return (
                                    <div className="list-recip-ava-initial" key={i}>
                                        {initialHandle(rec.name)}
                                        {
                                            props.data.recipients.length > 6 && i === 5 &&
                                            < div className="more-recip">
                                                + {parseInt(props.data.recipients.length) - parseInt(i + 1)}
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="document-desc">
                <div className={`document-desc-title ${props.index > 2 && "document-desc-title-muted"}`}>
                    {props.index <= 2 && <DotMark32 className="icon icon-dot" /> }                    
                    {replaceName(props.data.document_title, 'title')}
                </div>
                <div className="document-desc-owner">
                    <div className="document-desc-owner-detail">
                        <UserAvatarFilled32 className="icon icon-owner" />
                        <div className="owner">
                            <span className="owner-name">
                                {replaceName(props.data.owner['name'], 'name')}
                            </span>
                            <span className="owner-id">
                                {props.data.owner['privyId']}
                            </span>
                        </div>
                    </div>
                    <button className="btn btn-privy">
                        <Download32 className="icon icon-download" />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Documents;