import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/css/styles.css';
import './Assets/css/dropdown.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducer/reducer';
const store = createStore(Reducer);
ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));
