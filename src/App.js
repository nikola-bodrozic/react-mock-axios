import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

export const url = "https://jsonplaceholder.typicode.com/users"

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const result = await axios.get(url);
    setUsers(result.data);
  };

  return users
      ? <div data-testid="resolved">{users.map(user => (<div title='user' key={user.id}>{user.name}</div>))}</div>
      : <span data-testid="loading">Loading data...</span>
}

export default App;
