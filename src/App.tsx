import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import Cart from './components/cart/cart';
import NavBar from './components/Nav/navbar';
import Orders from './components/order/order';
import BookDetails from './pages/BookDetails';
import HomePage from './pages/HomePage';
import { LOAD_BOOK_LIST, LOAD_CART_ITEMS } from './redux/actions';

// todo
// configure husky before commiting to git
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:LOAD_CART_ITEMS})
    dispatch({type:LOAD_BOOK_LIST})
  },[dispatch])

  return (
    <div className="App">
     
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/book/:id" exact component={BookDetails} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
