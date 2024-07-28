//Auth using AuthContext



import React from "react";
import { useAuth } from "./AuthContext";

const TwentyFive = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>User Authentication Example</h1>
      {user ? (
        <div>
          <p>Welcome ,{user.username}</p>
          <butoon
            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={logout}
          >
            Logout
          </butoon>
        </div>
      ) : (
        <button
          className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() =>
            login({
              username: "user12345",
            })
          }
        >
          Login
        </button>
      )}
    </div>
  );
};

export default TwentyFive;
