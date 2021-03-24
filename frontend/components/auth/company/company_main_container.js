import { createHolding, updateHolding, removeHolding } from "../../../actions/holdings_action"
import { connect } from "react-redux"
import CompanyMain from "./company_main"
import { fetchUser } from "../../../actions/users_actions"

const mapStateToProps = (state, ownProps) => ({
    user: Object.values(state.entities.users)[0],
    holdings: Object.values(state.entities.holdings),
    ticker: ownProps.ticker
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createHolding: (holding) => dispatch(createHolding(holding)),
    updateHolding: (holding) => dispatch(updateHolding(holding)),
    removeHolding: (holdingId) => dispatch(removeHolding(holdingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyMain)