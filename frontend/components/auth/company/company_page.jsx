import React from 'react';
import CompanyMainContainer from './company_main_container';

class CompanyPage extends React.Component {
  render() {
    return (
      <div id="_company">
        <div className="auth-main">
          <div className="company-main-content">
            <div className="company-container">
              <CompanyMainContainer ticker={this.props.match.params.id}/>
            </div>
            <div className="company-main-sidebar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyPage;