import React from "react";
import SplashNav from "./splash_nav";

class Splash extends React.Component {
  render() {
    return (
      <div id="splash">
        <div className="splash-nav-container">
          <SplashNav logout={this.props.logout} />
        </div>
        <div className="splash-main">
          <header className="splash-header">
            <div className="splash-header-landing">
              <div className="splash-header-content">
                <div className="splash-header-left">
                  <div className="splash-big-header">
                    <h1>Investing for Everyone</h1>
                  </div>
                  <div className="splash-big-p">
                    <span>
                      Ahchoo is a fullstack clone of Robinhood using Ruby on
                      Rails and React. In case you are wondering, we won't halt
                      trading since we have no investor.
                    </span>
                  </div>
                  <div></div>
                </div>
                {/* <div className="splash-header-right">
                  <div className="splash-header-video">
                    <video
                        className="scroll-video"
                      controlsList="nodownload nofullscreen noremoteplayback"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4"
                    >
                    </video>
                    <div className="splash-page-static-image">
                      <img
                        draggable="false"
                        role="presentation"
                        src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png"
                        srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__45f00d7b296cb52968f1bca4ef766fc1.png 3x"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Splash;
