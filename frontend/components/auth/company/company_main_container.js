import { createHolding, updateHolding, deleteHolding } from "../../../actions/holdings_action"
import { connect } from "react-redux"
import CompanyMain from "./company_main"
import { fetchUser } from "../../../actions/users_actions"

const mapStateToProps = (state, ownProps) => ({
    user: Object.values(state.entities.users)[0],
    holdings: Object.values(state.entities.holdings),
    ticker: ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createHolding: (holding) => dispatch(createHolding(holding)),
    updateHolding: (holding) => dispatch(updateHolding(holding)),
    deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyMain)