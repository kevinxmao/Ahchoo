import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumber, formatPercent } from '../../../util/util_functions';

export default function Ownership(props) {
    const funds = useSelector(state => state.entities.users[state.session.id].funds);
    const total = useSelector(state => state.session.portfolioValue);

    function calcTotalReturn() {
        return (props.price - props.holding.avgPrice) * props.holding.quantity;
    }

    function calcTotalPercentReturn() {
        return (
          calcTotalReturn() / (props.holding.quantity * props.holding.avgPrice)
        );
    }

    function calcDiversity() {
        const asset = props.price * props.holding.quantity;
        return (asset / (total - funds));
    }

    return (
      <section className="ownership-info-container">
        <div className="ownership-info">
          <div className="ownership-info-left ownership-info-box">
            <header>
              <div className="ownership-title-small">
                <span>Your Market Value</span>
              </div>
              <h2>
                <span>
                  {formatNumber(props.price * props.holding.quantity)}
                </span>
              </h2>
            </header>
            <table className="table">
              <tbody>
                <tr>
                  <td className="ownership-title-small">Today's Return</td>
                  <td>
                    <span>
                      {props.change >= 0
                        ? `+${formatNumber(
                            props.change * props.holding.quantity
                          )}`
                        : `-${formatNumber(
                            props.change * props.holding.quantity
                          )}`}
                    </span>
                    <span> </span>
                    <span>
                      {props.change >= 0
                        ? `(+${formatPercent(props.percentChange)})`
                        : `(-${formatPercent(props.percentChange)})`}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="ownership-title-small">
                    <span>Total Return</span>
                  </td>
                  <td>
                    <span>
                      {calcTotalReturn() >= 0
                        ? `+${formatNumber(calcTotalReturn())}`
                        : `-${formatNumber(calcTotalReturn())}`}
                    </span>
                    <span> </span>
                    <span>
                      {calcTotalReturn() >= 0
                        ? `(+${formatPercent(calcTotalPercentReturn())})`
                        : `(-${formatPercent(calcTotalPercentReturn())})`}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ownership-info-right ownership-info-box">
            <header>
              <div className="ownership-title-small">
                <span>Your Average Cost</span>
              </div>
              <h2>
                <span>{formatNumber(props.holding.avgPrice)}</span>
              </h2>
            </header>
            <table className="table">
              <tbody>
                <tr>
                  <td className="ownership-title-small">
                    <span>Shares</span>
                  </td>
                  <td>
                    <span>{props.holding.quantity}</span>
                  </td>
                </tr>
                <tr>
                  <td className="ownership-title-small">
                    <span>Porfolio Diversity</span>
                  </td>
                  <td>
                    <span>
                      {calcDiversity() ? formatPercent(calcDiversity()) : "-"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
}