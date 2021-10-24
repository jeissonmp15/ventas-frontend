import Login from './components/Login';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './App.scss'
import Dashboard from "./components/Dashboard";


function App() {

  const {
    isAuthenticated,
  } = useAuth0();

  console.log('En el app', isAuthenticated)

  return (
    <Router>
      <div>
        {/* {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />} */}
        {isAuthenticated ? <Dashboard /> : <Login />}
      </div>
    </Router>
  );
}

export default App;
