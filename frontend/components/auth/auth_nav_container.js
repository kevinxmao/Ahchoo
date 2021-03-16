import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import AuthTemp from "./auth_temp";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(AuthTemp)