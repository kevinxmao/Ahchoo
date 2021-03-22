import { fetchUser } from "../../../actions/users_actions";
import { connect } from "react-redux";
import PortfolioMain from "./portfolio_main";


const mapStateToProps = (state) => ({
  user: Object.values(state.entities.users)[0],
  holdings: Object.values(state.entities.holdings),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);