import React from 'react';
import { Redirect } from 'react-router-dom';

// place holder for log out
const AuthTemp = props => (
    <button onClick={() => props.logout().then(
        () => {
                delete window.currentUser;
                <Redirect to="/" />
            }
        )}
    >
        Log Out
    </button>
)

export default AuthTemp;