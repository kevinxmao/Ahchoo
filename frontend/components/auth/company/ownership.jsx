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
              <div>
                <span>Your Market Value</span>
              </div>
              <div>
                <span>
                  {formatNumber(props.price * props.holding.quantity)}
                </span>
              </div>
            </header>
            <div>
              <div>
                <span>Today's Return</span>
              </div>
              <div>
                <span>
                  {props.change >= 0
                    ? `+${formatNumber(props.change * props.holding.quantity)}`
                    : `-${formatNumber(props.change * props.holding.quantity)}`}
                </span>
                <span>
                  {props.change >= 0
                    ? `(+${formatPercent(props.percentChange)})`
                    : `(-${formatPercent(props.percentChange)})`}
                </span>
              </div>
            </div>

            <div>
              <div>
                <span>Total Return</span>
              </div>
              <div>
                <span>
                  {calcTotalReturn() >= 0
                    ? `+${formatNumber(calcTotalReturn())}`
                    : `-${formatNumber(calcTotalReturn())}`}
                </span>
                <span>
                  {calcTotalReturn() >= 0
                    ? `(+${formatPercent(calcTotalPercentReturn())})`
                    : `(-${formatPercent(calcTotalPercentReturn())})`}
                </span>
              </div>
            </div>
          </div>
          <div className="ownership-info-right ownership-info-box">
            <header>{props.holding.avgPrice}</header>
            <div>{props.holding.quantity}</div>
            <div>{calcDiversity()}</div>
          </div>
        </div>
      </section>
    );
}