import logo from './logo.svg';

import './App.css';

import SDJ_logo from "./SDJ_Logo.jpg";

import Navbar from './routingdemo/Navbar'



import Home from './routingdemo/Home'


import Login from './routingdemo/Login'
import Register from './routingdemo/Register'
import Transaction_History from './routingdemo/Transaction_History'
import Loans from './routingdemo/Loan'
import Finance from './routingdemo/Finance'

import Contactus from './routingdemo/Contactus'

import {BrowserRouter,Route} from 'react-router-dom'
import { styled } from '@material-ui/core';




function App() {

  return (
    

   
    <div className="App" >

      <h1 style={{fontFamily:'fantasy',background:'grey'}}><u>Welcome To Our SDJ Banking and Finance Services </u></h1>



      <BrowserRouter>



      <Navbar/>



      <Route path="/Home" component={Home} exact/>

      <Route path="/Login" component={Login}/>
      
      <Route path="/Register" component={Register} />

      <Route path="/Transaction_History" component={Transaction_History}/>

      <Route path="/Finance" component={Finance} />
      <Route path="/Loans"component={Loans}/>
      <Route path="/Contactus"component={Contactus}/>
      </BrowserRouter>

      

    </div>

  );

}



export default App;