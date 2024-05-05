import './App.css';
import SignIn from './Compo/Sign/SignIn';
import Signup from './Compo/Sign/Signup'; // Import SignUp component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, Switch

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SignIn} /> {/* Route for SignIn component */}
          <Route path="/signup" component={Signup} /> {/* Route for SignUp component */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
