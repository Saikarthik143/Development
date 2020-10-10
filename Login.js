import React,{useState} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';



const Login=()=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [usernameErr,setusernameErr]=useState({});
  const [passwordErr,setPasswordErr]=useState({});
  const [alreadyName,setAlreadyName]=useState('');
  const [submitVal,setSubmitVal]=useState();





const submitHandler = (e) => {
    e.preventDefault();
    const isValid=formValidation();
    
    axios.get('http://localhost:3000/users?userName='+userName+'&password='+password).then(Response=>{
     
        if(Response.data.length==1){
          setSubmitVal(true);
          localStorage.setItem('userName',Response.data[0].userName);
          localStorage.setItem('accountType',Response.data[0].account)
          localStorage.setItem('idm',Response.data[0].idm)
          {alert("login suces"+Response.data[0].idm)}
          
            // return(<Link to={{pathname:'/DEMO',hash:'#Demo'}}>
            // {alert("login suces")}
            //          </Link>)
            

        }
        else{
            alert("invalid");
            setSubmitVal(false);
        }
    })
    .catch(error=>{
        alert("INVALID");
        console.log(error)
    })
    
  }

  const formValidation=()=>{
    let isValid=true;
       const usernameErr={};
    const passwordErr={};

    if(!userName){
        usernameErr.noName="Name not mentioned";
          isValid=false;
      }
      //password validation
      if(!password){
        passwordErr.noPassword="password not mentioned";
      }

      setusernameErr(usernameErr);
      setPasswordErr(passwordErr);
      return isValid
    }

    return <div>
     
<div class="bg">
<div class="topnav">
  
    <Link className="col-sm-3"><span className="glyphicon glyphicon-tag mt-5"></span>Home</Link>
    <Link className="col-sm-3"><span className="glyphicon glyphicon-screenshot mt-5"></span>About</Link>
    <Link className="col-sm-3"><span className="glyphicon glyphicon-user mt-5"></span>profile</Link>
  
    <Link id="l" ><i className="glyphicon glyphicon-off mt-5" ></i>logout</Link>
    
  </div>
  </div>
   <form onSubmit={submitHandler}>
   <div className="form-group">
               <label htmlFor="userName">UserName</label>
               <input type="userName" className="form-control" name="userName" id="userName" onChange={(e)=>setUserName(e.target.value)}></input>
               {Object.keys(usernameErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{usernameErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="password">Password</label>
               <input type="password"  className="form-control" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
               {Object.keys(passwordErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{passwordErr[key]}</div>
          })}
           </div>
           {/* <button type="submit" className="button primary">Submit</button> */}
           <div>
         
          
           {submitVal===true? <Link to={{pathname:'/DEMO',hash:'#Demo'}}>
           Submit
                    </Link>:<button type="submit" id="loansubmit" className="button primary" >Submit</button>}
          </div>
   </form>
   </div>
   }

   export default Login;