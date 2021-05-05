import { logout } from "../../../actions/session_actions";
import { connect } from "react-redux";
import Navbar from "./navbar";

const mapStateToProps = state => ({
    user: Object.values(state.entities.users)[0],
    portfolioValue: state.session.portfolioValue,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);