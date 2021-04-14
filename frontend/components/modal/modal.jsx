import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AboutMe from '../splash/about_me';
import DepositForm from '../auth/dashboard/deposit_form';

function Modal({modal, closeModal}) {
    if (!modal) return null;
    let component;
    switch (modal) {
        case "aboutMe":
            component = <AboutMe />;
            break;
        case "deposit":
            component = <DepositForm />
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