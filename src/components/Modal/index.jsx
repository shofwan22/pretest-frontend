import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleModal } from '../../modules';
import './index.scss';

const Modal = (props) => {
    const [show, setShow] = useState(props.status)
    useEffect(() => {
        setShow(props.status);
    }, [props.status])

    const handleClose = (e) => {
        var modal = document.getElementById('modal');
        var close = document.getElementById('btnClose');
        if (e.target === modal || e.target === close) {
            props.handleModal(false)
            setShow(false)
        }
    }
    return (
        <div id="modal" className={`upload-modal ${show ? "upload-modal-show" : ""}`} onClick={handleClose}>
            <div className="upload-modal-content">
                <span id="btnClose" className="close" onClick={handleClose}>&times;</span>
                <div className="upload-modal-content-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    handleModal: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    handleModal
}

const mapStateToProps = state => {
    return {
        status: state.modal.showModal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);