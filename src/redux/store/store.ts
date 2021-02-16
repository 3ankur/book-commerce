import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

 const configureStore = () =>{
    const middleware = [sagaMiddleware];
    const store =  createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;