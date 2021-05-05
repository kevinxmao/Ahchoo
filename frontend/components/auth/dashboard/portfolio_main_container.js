import { fetchUser, updateUser } from "../../../actions/users_actions";
import { connect } from "react-redux";
import PortfolioMain from "./portfolio_main";
import { receivePortfolioValue } from "../../../actions/session_actions";
import { greenify, reddify } from "../../../actions/ui_theme_actions";


const mapStateToProps = (state) => ({
  user: Object.values(state.entities.users)[0],
  holdings: Object.values(state.entities.holdings),
  portfolioValue: state.session.portfolioValue,
  theme: state.ui.theme
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  receivePortfolioValue: value => dispatch(receivePortfolioValue(value)),
  greenify: () => dispatch(greenify()),
  reddify: () => dispatch(reddify())
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);