import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import CardPage from './components/pages/CardPage';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import PizzaBlock from './components/pages/PizzaBlock';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { setPizzasAC, setPizzasThunk } from './redux/setPizzasReducer';





const App = () => {


     return (

 <div className="wrapper">
          <Header/>
 <div className="content">
    
      
       <Route path='/'   render={() => <HomePage  />} exact/>
       <Route  path='/card'  component={CardPage} exact />
    
       </div>
     </div> 





     )
}


export default App


