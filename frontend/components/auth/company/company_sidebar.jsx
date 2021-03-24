import React from 'react';
import OrderForm from './order_form';

class CompanySidebar extends React.Component {
    render() {
        return (
          <div className="sidebar-content">
              <div className="order-form">
                <OrderForm />
              </div>
              <div className="wishlist-form">
                  <p>Wishlist buttons</p>
              </div>
          </div>
        );
    }
}

export default CompanySidebar;