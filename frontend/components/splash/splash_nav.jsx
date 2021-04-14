import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <nav className="splash-nav">
            <div className="splash-nav-left">
              <Link to="/">
                <img className="splash-nav-logo" src={window.textLogo} alt="logo" />
              </Link>
                <div className="splash-nav-list-container">
                    <ul className="splash-nav-list">
                  <li><a href="https://www.linkedin.com/in/kevinxmao/" target="_blank" rel="noopener noreferrer"><span className="splash-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span> LinkedIn</a></li>
                  <li><a href="https://github.com/kevinxmao" target="_blank" rel="noopener noreferrer"><span className="splash-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </span> Github</a></li>
                  <li><a onClick={() => this.props.openModal("aboutMe")}>About Me</a></li>
                    </ul>
                </div>
            </div>

            <div className="splash-nav-spacer"></div>
            <div className="splash-nav-session">
              <NavLink
                to="/login"
                className="button-login"
                activeClassName="selected"
              >
                <span>Log In</span>
              </NavLink>
              <div className="session-button-spacer"></div>
              <NavLink
                to="/signup"
                className="button-signup"
                activeClassName="selected"
              >
                <span>Sign Up</span>
              </NavLink>
            </div>
          </nav>
        );
    }
}

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mDTP)(SplashNav);