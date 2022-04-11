import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../src/redux/store'
 


ReactDOM.render(
 
    <BrowserRouter>
       
   <Provider store={store}>
      
   <Route  path='/' component={App} />


   </Provider>
      
      
   
   


    </BrowserRouter>,
  
  document.getElementById('root')
);



