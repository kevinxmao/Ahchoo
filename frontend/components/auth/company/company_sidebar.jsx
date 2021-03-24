import React from 'react';
import OrderForm from './main_order_form';

class CompanySidebar extends React.Component {

    render() {
        const {
            ticker,
          holdings,
          updateHolding,
          createHolding,
          removeHolding,
        } = this.props;
        return (
          <div className="sidebar-content">
            <div className="order-form">
              <OrderForm
                ticker={ticker}
                holdings={holdings}
                updateHolding={updateHolding}
                createHolding={createHolding}
                removeHolding={removeHolding}
              />
            </div>
            <div className="wishlist-form">
              <p>Wishlist buttons</p>
            </div>
          </div>
        );
    }
}

export default CompanySidebar;