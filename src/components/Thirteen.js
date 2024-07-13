import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIN] = useState(false);
  const [users, setUsers] = useState([]);
  const handleclick = (e) => {
    e.preventDefault();
    setIsRegistered(!isregistered);
  };

  const handlesubmit = (e) => {
    if (isregistered) {
      //login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLoggedIN(true);
      } else {
        alert("Login Failed please Check Your credentials");
      }
    } else {
      const newUsers = { email, password };
      setUsers([...users, newUsers]);
      localStorage.setItem("users", JSON.stringify([...users, newUsers]));
      setIsLoggedIN(true);
    }
  };

  const handlelogout = () => {
    setIsLoggedIN(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div>Welcome {email}</div>
          <button onClick={handlelogout}>Logout</button>
        </div>
      ) : (
        <div>
          {<h1>{isregistered ? "LoginPage" : "SignupPage"}</h1>}

          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlesubmit}>
              {" "}
              {isregistered ? " Login" : "Signup"}
            </button>
            <p>
              {isregistered
                ? "New here Register"
                : "Already Registered Login here"}
            </p>
            <button onClick={handleclick}>
              {isregistered ? "Signup Page" : " Login Page"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Thirteen;
