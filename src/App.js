import './App.css';
import { fetchRequest } from './utils';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchRequest(setUser, username, email, password);
  }

  return (
    <div>
      <h1>{user ? `Welcome ${user} ` : "Please sign up"}</h1>

      <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)} />
        <input onChange={(e) => setEmail(e.target.value)} />
        <input onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
