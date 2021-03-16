import { login, signup, logout } from "../../actions/session_actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)()