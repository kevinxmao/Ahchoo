import React from 'react';
import { formatNumber } from '../../../util/util_functions';

class BuyingPowerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(e) {
        e.preventDefault();
        this.setState({expand: !this.state.expand})
    }

    render() {
        const { user } = this.props;
        const form = (
          <div className="form-content">
            <div className="form-left">
              <div className="form-table">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Fund Available</td>
                      <td>{`${formatNumber(user.funds)}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button>Deposit Funds</button>
            </div>
            <div className="form-info">
              <div>
                <span>
                  Buying Power represents the total value of stocks you can
                  purchase.
                </span>
              </div>
            </div>
          </div>
        );
        return (
          <div className={this.state.expand ? "buying-power-container expanded" : "buying-power-container"}>
            <div className="buying-power-content">
              <button className="buying-power-btn" onClick={this.toggleExpand}>
                <header className="buying-power-btn-text">
                  <div>
                    <span>Buying Power</span>
                  </div>
                  <div>
                    <span>{`${formatNumber(user.funds)}`}</span>
                  </div>
                </header>
              </button>
              <div className="buying-power-form">
                {this.state.expand && form}
              </div>
            </div>
          </div>
        );
    }
}

export default BuyingPowerButton;