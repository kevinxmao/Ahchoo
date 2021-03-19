import { logout } from "../../../actions/session_actions";
import { connect } from "react-redux";
import AuthTemp from "../auth_temp";
import Navbar from "./navbar";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Navbar);