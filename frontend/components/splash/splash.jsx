import React from 'react';
import SplashNav from './splash_nav';

class Splash extends React.Component {
    render() {
        return (
            <div id="splash">
                <div className="splash-nav-container">
                    <SplashNav
                        logout={this.props.logout}
                    />
                </div>
                <div className="splash-main">
                    <header className="splash-header">
                        <div className="splash-header-landing">
                            <div className="splash-header-content"></div>
                            <div className="splash-header-video"></div>
                        </div>
                    </header>
                </div>

            </div>
        );
    }
}

export default Splash;