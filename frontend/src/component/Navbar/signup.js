import React from "react";
import './Signup.css'
import { useAuth0 } from "@auth0/auth0-react";


function Signup() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={logout} className="btn">
            Log Out
          </button>

          <img src={user.picture} />
        </>
      ) : (
        <button onClick={loginWithRedirect} className="btn">
          Sign up
        </button>
      )}
    </div>
  );
}

export default Signup;
