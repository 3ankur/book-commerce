import React from 'react';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import NavBar from './components/Nav/navbar';
import BookDetails from './pages/BookDetails';
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
          <Route path="/book/:id" exact component={BookDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
