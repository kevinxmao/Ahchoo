import { logout } from "../../../actions/session_actions";
import { connect } from "react-redux";
import Navbar from "./navbar";


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Navbar);