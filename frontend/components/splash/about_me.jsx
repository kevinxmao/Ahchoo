import React, { useState, useEffect } from 'react';
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';

export default function AboutMe() {
    return (
        <div className="about-me">
            <div className='avatar-container'>
                <img src="" alt=""/>
            </div>
            <div className='developer'>
                <span>Kevin Mao</span>
            </div>
            <div className="description">
                <p>Hi, I am a fullstack software engineer. I graduated from App Academy in April 2021. I built Ahchoo so you can enjoy buying and selling stocks with virtual money.</p>
            </div>
        </div>
    )
}