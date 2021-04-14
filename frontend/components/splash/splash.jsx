import React from "react";
import SplashNav from "./splash_nav";
import { DemoLogin } from "../../util/auth/demo_user";

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
                  <div className="splash-demo-login"><DemoLogin /></div>
                </div>
                <div className='splash-header-right' >
                  <video controlsList="nodownload nofullscreen noremoteplayback"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="home-page-video">
                    <source
                      src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4"
                      type="video/mp4" />
                    <img
                      className="css-1eazbjj"
                      draggable="false"
                      role="presentation"
                      src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png"
                      srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x"
                    />
                  </video>
                  <div className="static-image-home-page">
                    <img
                      className=""
                      draggable="false"
                      role="presentation"
                      src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png"
                      srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__45f00d7b296cb52968f1bca4ef766fc1.png 3x"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="tech-stack-container">
          <div className="tech-stack">
            <div className='stack-title'><span>Built With</span></div>
            <div className="stack-techs">
              <div className="tech">
                <img className="tech-logo" src={window.ruby} alt=""/>
                <h4>ruby</h4>
              </div>
              <div className="tech">
                <img className="tech-logo" src={window.rails} alt=""/>
                <h4>rails</h4>
              </div>
              <div className="tech">
                <img className="tech-logo" src={window.react} alt=""/>
                <h4>react</h4>
              </div>
              <div className="tech">
                <img className="tech-logo" src={window.redux} alt=""/>
                <h4>redux</h4>
              </div>
              <div className="tech">
                <img className="tech-logo" src={window.postgresql} alt=""/>
                <h4>postgresql</h4>
              </div>
            </div>
          </div>

        </div>
        <footer>
          <div className="footer-content">
            <div className="footer-left">
              <div><span>Kevin Mao</span></div>
              <div><span>Built in New York, NY</span></div>
              <div><a href="mailto:kevinmao3016@gmail.com" rel="noopener noreferrer">kevinmao3016@gmail.com</a></div>
            </div>
            <div className="footer-right">
              <div className='date'>April, 2021</div>
              <div><a href="https://github.com/kevinxmao/Ahchoo" target="_blank" rel="noopener noreferrer">How it's Built</a></div>
              <div><a href="https://kevinxmao.com" target="_blank" rel="noopener noreferrer">Personal Site</a></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Splash;
