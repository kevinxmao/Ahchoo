import { createHolding, updateHolding, removeHolding } from "../../../actions/holdings_action"
import { connect } from "react-redux"
import CompanyMain from "./company_main"

const mapStateToProps = (state, ownProps) => ({
    holdings: state.entities.holdings,
    ticker: ownProps.ticker
})

const mapDispatchToProps = dispatch => ({
    createHolding: (holding) => dispatch(createHolding(holding)),
    updateHolding: (holding) => dispatch(updateHolding(holding)),
    removeHolding: (holdingId) => dispatch(removeHolding(holdingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyMain)