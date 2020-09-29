import React from 'react';
import { BrowserRouter ,Route} from 'react-router-dom';
import './App.css';
import Demo from './Components/Demo/demo';
import Login from './Components/Login/Login';
//import Login from './Components/Login/Login';
import RegisterScreen from './Components/Regist/RegisterScreen';
import Loan from './Components/Loan/Loan';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
     

 <switch>
 <Route path='/'exact={true} component={RegisterScreen} />
 <Route path='/DEMO'exact={true} component={Demo} />
<Route path='/Login'exact={true} component={Login} />
<Route path='/Loan'exact={true} component={Loan} />

</switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
