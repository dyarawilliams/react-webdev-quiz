import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
  const { user, isAuthenticated } = useAuth0();

  return (
    // Display the logged in user name, picture and email
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}