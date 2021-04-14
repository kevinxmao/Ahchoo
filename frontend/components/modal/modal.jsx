import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({modal, closeModal}) => {
    if (!modal) return null;
    let component;
    switch (modal) {
        case "aboutMe":
            break;
        default:
            return null;
    }

    return (
        <div className={`modal-background-div ${modal}`} onClick={closeModal}>
            <div className={`modal-form-div ${modal}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);