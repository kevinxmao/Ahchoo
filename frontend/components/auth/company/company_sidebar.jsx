import React from 'react';
import OrderForm from './main_order_form';
import WatchlistForm from './watchlist_form';

class CompanySidebar extends React.Component {

    render() {
        const {
          user,
            ticker,
          holdings,
          price,
          updateHolding,
          createHolding,
          deleteHolding,
          fetchUser
        } = this.props;
        return (
          <>
            <div className="sidebar-content">
              <div className="order-form">
                <OrderForm
                  user={user}
                  ticker={ticker}
                  holdings={holdings}
                  price={price}
                  updateHolding={updateHolding}
                  createHolding={createHolding}
                  deleteHolding={deleteHolding}
                  fetchUser={fetchUser}
                />
              </div>
            </div>
            <div className="watchlist-form">
              <WatchlistForm ticker={ticker} />
            </div>
          </>
        );
    }
}

export default CompanySidebar;