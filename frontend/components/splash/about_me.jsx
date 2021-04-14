import React, { useState, useEffect } from 'react';
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

function AboutMe(props) {
    return (
        <div className="about-me">
            <header className="modal-title">
                <div></div>
                <button onClick={() => props.closeModal()}>
                    <span><FontAwesomeIcon icon={faTimes}/></span>
                </button>
            </header>
            <div className='avatar-container'>
                <img src={window.avatar} alt=""/>
            </div>
            <div className='developer'>
                <span>Kevin Mao</span>
            </div>
            <div className="description">
                <p>Hello, I am a fullstack software engineer. I graduated from App Academy in April 2021. I built Ahchoo so you can enjoy buying and selling stocks with virtual money.</p>
            </div>
        </div>
    )
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(AboutMe);