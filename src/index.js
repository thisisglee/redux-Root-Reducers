import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import personReducer from './store/reducers/personReducer'
import { Provider } from 'react-redux';

//root reducer
const rootReducer = combineReducers({
    person: personReducer
})

//store
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
