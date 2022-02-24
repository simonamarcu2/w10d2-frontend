import { useState, useEffect } from "react";
import "./App.css";
import { fetchRequest, tokenFetch } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {
    tokenFetch(setUser)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    fetchRequest(setUser, email, password, username);
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please login or sign up"}</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
