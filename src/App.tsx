import React from 'react';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import NavBar from './components/Nav/navbar';
import HomePage from './pages/HomePage';

// todo
// configure husky before commiting to git
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
