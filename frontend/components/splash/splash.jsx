import React from 'react';
import SplashNav from './splash_nav';

class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-nav-container">
                    <SplashNav
                        logout={this.props.logout}
                    />
                </div>
                <div className="splash-main">
                    <header className="splash-header">

                    </header>
                </div>

            </div>
        );
    }
}

export default Splash;