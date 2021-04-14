import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSignOut, faEnvelope, faRocket, faUserCircle } from '@fortawesome/pro-regular-svg-icons';
import { formatNumber } from '../../util/util_functions';

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false,
            portfolioValue: 0
        };
        this.globalClickListener = this.globalClickListener.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    componentDidUpdate() {
        window.removeEventListener('click', this.globalClickListener);
    }

    globalClickListener(nativeEvent) {
        // console.log('global click');
        this.setState({ dropdownVisible: false }, () => {
            window.removeEventListener('click', this.globalClickListener)
        })
    }

    toggleDropdown(syntheticEvent) {
        // console.log('toggle dropdown');
        syntheticEvent.stopPropagation();
        this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }), () => {
            if (this.state.dropdownVisible) {
                window.addEventListener('click', this.globalClickListener)
            }
        })
    }

    handleBodyclick(syntheticEvent) {
        syntheticEvent.stopPropagation();
    }

    render() {

        const dropdown = (
          <div className="account-dropdown" onClick={this.handleBodyclick}>
            <div className="account-summary">
              <h3>
                {this.props.user.firstName} {this.props.user.lastName}
              </h3>
              <div className="account-info-container">
                <div className="dropdown-portfolio-value">
                  {/* <PortfolioValue /> */}
                  <div>{formatNumber(this.props.portfolioValue)}</div>
                  <div style={{ height: "2px" }}></div>
                  <div className="portfolio-subtext">Portfolio Value</div>
                </div>
                <div className="dropdown-buying-power">
                  <div>{formatNumber(this.props.user.funds)}</div>
                  <div style={{ height: "2px" }}></div>
                  <div className="portfolio-subtext">Buying Power</div>
                </div>
              </div>
            </div>
            <div className="dropdown-links">
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span>Account</span>
              </a>
              <a href="https://www.linkedin.com/in/kevinxmao/" target="_blank">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/kevinxmao"
                target="_blank">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>Github</span>
              </a>
            </div>
            <div className="dropdown-misc">
              <a href="https://kevinxmao.com" target="_blank">
                <span className="icon">
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <span>Personal Site</span>
              </a>
              <a href="mailto:kevinmao3016@gmail.com" rel="noopener noreferrer">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>Contact Me</span>
              </a>
            </div>
            <div className="drop-down-logout">
              <a onClick={this.props.logout}>
                <span className="signout-icon">
                  <FontAwesomeIcon icon={faSignOut} />
                </span>
                <span>Log Out</span>
              </a>
            </div>
          </div>
        );

        return (
            <div className="auth-links-container">
                <Link to="/" className="nav-link">
                    <span>Portfolio</span>
                </Link>
                <a className="nav-link" href="https://www.linkedin.com/in/kevinxmao/" target="_blank"><span>LinkedIn</span></a>
                <a className="nav-link" href="https://github.com/kevinxmao" target="_blank"><span>Github</span></a>
                <a className="nav-link" href="#"><span>About</span></a>
                <div onClick={this.toggleDropdown} className={this.state.dropdownVisible ? "nav-link visible" : "nav-link"}>
                    <div>
                        <span>Account</span>
                    </div>
                    {this.state.dropdownVisible && dropdown}
                </div>
            </div>
        )
    }
}

// class PortfolioValue extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       portfolioValue: 0,
//     };
//   }

//   componentDidMount() {
//     if (window.localStorage.getItem("portfolioValue")) {
//       this.setState({
//         portfolioValue: parseFloat(
//           window.localStorage.getItem("portfolioValue")
//         ),
//       });
//     }
//   }

//   render() {
//     return <div>{formatNumber(this.state.portfolioValue)}</div>;
//   }
// }

export default NavLinks;
