import React from 'react';

class PortfolioMain extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    render() {
        return (
            <>
                <div className="portfolio-main">PortfolioMain</div>
                <div className="portfolio-sidebar">Portfolio Sidebar</div>
            </>
        );
    }
}

export default PortfolioMain;