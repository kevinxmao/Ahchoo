import React from 'react';
import SplashNav from './splash_nav';

class Splash extends React.Component {
    render() {
        return (
            <div>
                <SplashNav
                    logout={this.props.logout}
                />
            </div>
        );
    }
}

export default Splash;