import { logout } from "../../../actions/session_actions";
import { connect } from "react-redux";
import Navbar from "./navbar";
import { addDropdown, removeDropdown } from "../../../actions/ui_actions";

const mapStateToProps = state => ({
    // dropdown: state.ui.dropdown,
    user: Object.values(state.entities.users)[0],
    portfolioValue: state.session.portfolioValue
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // addDropdown: () => dispatch(addDropdown()),
    // removeDropdown: () => dispatch(removeDropdown()),
    // toggleDropdown: () => dispatch()

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);