import { fetchUser, updateUser } from "../../../actions/users_actions";
import { connect } from "react-redux";
import PortfolioMain from "./portfolio_main";


const mapStateToProps = (state) => ({
  user: Object.values(state.entities.users)[0],
  holdings: Object.values(state.entities.holdings),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);