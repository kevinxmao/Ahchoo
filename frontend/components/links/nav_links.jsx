import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        };
        this.globalClickListener = this.globalClickListener.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.globalClickListener);
    }

    globalClickListener(nativeEvent) {
        console.log('global click');
        this.setState({ dropdownVisible: false }, () => {
            window.removeEventListener('click', this.globalClickListener)
        })
    }

    toggleDropdown(syntheticEvent) {
        console.log('toggle dropdown');
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
                    {this.props.user.funds}
                </div>
            </div>
        )
            

        return (
            <div className="auth-links-container">
                <Link to="/" className="nav-link">
                    <span>Portfolio</span>
                </Link>
                <a className="nav-link" href="https://www.linkedin.com/in/kevinxmao/" target="_blank"><span>LinkedIn</span></a>
                <a className="nav-link" href="https://github.com/kevinxmao" target="_blank"><span>Github</span></a>
                <a className="nav-link" href="#"><span>About</span></a>
                <div onClick={this.toggleDropdown} className="nav-link">
                    <div>
                        <span>Account</span>
                    </div>
                    {this.state.dropdownVisible && dropdown}
                </div>
            </div>
        )
    }
}

export default NavLinks;