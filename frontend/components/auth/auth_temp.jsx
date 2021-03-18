import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';

// place holder for log out
const AuthTemp = (props) => (
  <div style={{ width: "800px", margin: "auto" }}>
    <button
      style={{ marginBottom: "30px" }}
      onClick={() =>
        props.logout().then(() => {
          delete window.currentUser;
          <Redirect to="/" />;
        })
      }
    >
      Log Out
    </button>
    <p>Coming soon...</p>
    <p style={{ marginBottom: "30px" }}>
      In the mean time, enjoy this video of cat vibing to Polka
    </p>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=NUYvbT6vTPs"
      muted={true}
      controls={true}
    />
  </div>
);

export default AuthTemp;