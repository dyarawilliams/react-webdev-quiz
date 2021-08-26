import React from "react";
// Import useAuth0 Hook from the Auth0 SDK
import { useAuth0 } from "@auth0/auth0-react";

// Create a login button that will redirect to the Auth0 login page when clicked using loginWithRedirect
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="loginBtn" onClick={() => loginWithRedirect()}>
        Log In
    </button>
  )
};

// Exports the loginButton
export default LoginButton;
