import React,{useEffect ,useState} from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import Login from '../Login/Login';
const RegisterScreen=()=>{
  const [age,setAge]=useState();
  const [name,setName]=useState('');
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [address,setAddress]=useState('');
  const [country,setCountry]=useState('');
  const [state,setStates]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const [dob,setDob]=useState('');
  const [account,setAccount]=useState('');
  const [branch,setBranch]=useState('');
  const [idm,setIdm]=useState('');
  const [ipt,setIpt]=useState('');
  const [idn,setIdn]=useState('');
  const [nameErr, setNameErr] = useState({});
  const [usernameErr,setusernameErr]=useState({});
  const [passwordErr,setPasswordErr]=useState({});
  const [addressErr,setAddressErr]=useState({});
  const [countryErr,setCountryErr]=useState({});
  const [stateErr,setStateErr]=useState({});
  const [contactErr,setContactErr]=useState({});
  const [emailErr, setEmailErr] = useState({});
  const [dobErr,setDobErr]=useState({});
  const [accountErr,setAccountErr]=useState({});
  const [branchErr,setBranchErr]=useState({});
  const [idmErr, setIdmErr] = useState({});
  const [iptErr, setIptErr] = useState({});
  const [idnErr, setIdnErr] = useState({});
const array={
  name,
  userName,
  password,
  address,
  country,
  state,
  contact,
  email,
  dob,
  account,
  branch,
  idm,
  ipt,
  idn 

}
const [submitVal,setSubmitVal]=useState();
  
//function for submit button
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid=formValidation();
    if(isValid){
      setSubmitVal(true);
      console.log(name);
  alert("registration sucessfull click on login to Login");
   setSubmitVal(true);
   

   axios.post('http://localhost:3000/users',array)
   
.then(Response=>{
  console.log(Response)
}) 
.catch(error=>{
  console.log(error)
})  

    }
    else{
        console.log("not submitted");
    }
  }

  //function for dob
  const dateChange=(dob)=>{
    setDob(dob);
    let now= dob.getFullYear();
    let birth=new Date().getFullYear();
    console.log(birth);
    console.log(now);
    let dif=birth-now;
    console.log(dif);
    if(dif<18)
    
      setAge(false);
    else
      setAge(true);
      
    
    // console.log(1);
  
     
 

  }
  console.log(age);
  //function for select country
  const selectCountry =(val) =>{
    setCountry(val);
  }
 //function for select region
  const selectRegion= (val)=> {
    setStates(val);
  }
   //function for form validation
  const formValidation=()=>{
   let isValid=true;
   const nameErr={};
   const usernameErr={};
   const passwordErr={};
   const addressErr={};
   const countryErr={};
   const stateErr={};
   const emailErr={};
   const contactErr={};
   const dobErr={};
   const accountTypeErr={};
   const branchNameErr={};
   const idmErr={};
   const idnErr={};
   const iptErr={};
   
   //name validation
   if(!name){
    nameErr.noName="Name not mentioned";
      isValid=false;
  }
  if(typeof name!=='undefined'){
    var regExpression = /^[a-zA-Z\s]*$/;
    if(!regExpression.test(name)){
      nameErr.notValid="Name should contain alphabets and spaces only";
      isValid=false;
      }
  }
  //username validation
  if(!userName){
    usernameErr.noName="Name not mentioned";
      isValid=false;
  }
  //password validation
  if(!password){
    passwordErr.noPassword="password not mentioned";
  }
  //Address validation
  if(!address){
    addressErr.noAddress="Address not mentioned";
  }
  //country validation
  if(!country){
    countryErr.noCountry="Country not mentioned";
  }
  //state validation
  if(!state){
    stateErr.noState="State not mentioned";
  }
  //dob
  if(!dob){
    dobErr.noDob="dob not mentioned";
  }
  //Account Type
  if(!account){
    accountTypeErr.noAccount="Account not mentioned";
  }
  //Branch 
  if(!branch){
    branchNameErr.noBranch="Branch not mentioned";
  }
  //ipt
  if(!ipt){
    iptErr.NoIpt="ipt not mentioned"
  }
  //idn
  if(!idn){
    idnErr.NoIdn="Idn not mentioned"
  }
  //mobile validation
   if(!contact){
    contactErr.NoNumber="Mobile Number can be Empty";
      isValid=false;
  }
  if(typeof contact!=='undefined'){
    var phoneno = /^\d{10}$/;
    if(!phoneno.test(contact)){
      contactErr.notValid="Mobile number should be 10 digits";
      isValid=false;
      }
  }
  //email validation
  if(!email){
    isValid = false;
    emailErr.noName = "Cannot be empty";
 }

 if(typeof email !== 'undefined'){
    let lastAtPos = email.lastIndexOf('@');
    let lastDotPos = email.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
      isValid = false;
       emailErr.mailError = "Email is not valid";
     }
}
//idm validation
if(!idm) {
  isValid=false;
  idmErr.noIdm="Cannot be Empty";
}

if(typeof idm!== 'undefined'){
  var reg = new RegExp('^[0-9]+$');
  if(idm<500||!(reg.test(idm)))
  {
    isValid=false;
    idmErr.idmmError="Amount should not be less than 0 and greater than 500";
  }
}




  setNameErr(nameErr);
  setusernameErr(usernameErr);
  setPasswordErr(passwordErr);
  setAddressErr(addressErr);
  setCountryErr(countryErr);
  setStateErr(stateErr);
  setContactErr(contactErr);
  setEmailErr(emailErr);
  setDobErr(dobErr);
  setAccountErr(accountTypeErr);
  setBranchErr(branchNameErr);
  setIptErr(iptErr);
  setIdnErr(idnErr);
  setIdmErr(idmErr);
  return isValid

   }
return <div>
  <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3", borderRadius:"1.5rem"}} ><marquee direction="rtl">
            <p>register-customer Form</p>
        </marquee>
    <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}} > Register form</h3>
    <div className="card-body">
   <form onSubmit={submitHandler}>
   <div className="offset-2"> 
       
      <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="name"  className="form-control" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
               {Object.keys(nameErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{nameErr[key]}</div>
          })}
           </div>
           <div className="form-group ">
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
           <div className="form-group">
               <label htmlFor="address">Address</label>
               <input type="address" className="form-control" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>
               {Object.keys(addressErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{addressErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="country">Country</label>
               <CountryDropdown type="country" value={country} className="form-control" name="country" id="country" onChange={(val) => selectCountry(val)} />
               {Object.keys(countryErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{countryErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="state">State</label>
               <RegionDropdown country={country} value={state} type="state" className="form-control" name="state" id="state" onChange={(val) => selectRegion(val)} />
               {Object.keys(stateErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{stateErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email" className="form-control" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
               {Object.keys(emailErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{emailErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="contact">Contact No</label>
               <input type="contact" className="form-control" name="contact" id="contact" onChange={(e)=>setContact(e.target.value)}></input>
               {Object.keys(contactErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{contactErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="dob">DOB</label>
               <DatePicker type="dob" className="form-control"  name="dob" id="dob" selected={dob}  onChange={dateChange}  placeholder="Date of Birth" maxDate={new Date()}/>
               {Object.keys(dobErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{dobErr[key]}</div>
          })}  
           </div>
           <div className="form-group">
               <label htmlFor="account">Account Type</label>
               {
                 age ===true?<select onChange={(e)=>setAccount(e.target.value)} ><option value=""></option>
                 <option value="savings">savings</option>
                 <option value="Salary">salary</option>
               
                 </select>:<select onChange={(e)=>setAccount(e.target.value)} ><option value=""></option>
                 <option value="savings">savings</option>
               </select>
               }
               
               {Object.keys(accountErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{accountErr[key]}</div>
          })}</div>
           <div className="form-group">
               <label htmlFor="branch">Branch Name</label>
               <input type="branch" className="form-control" name="branch" id="branch" onChange={(e)=>setBranch(e.target.value)}></input>
               {Object.keys(branchErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{branchErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="idm">Intial Deposit Amount</label>
               <input type="idm" className="form-control" name="idm" id="idm" onChange={(e)=>setIdm(e.target.value)}></input>
               {Object.keys(idmErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{idmErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="ipt">Identification Proof Type</label>
               <input type="ipt" className="form-control" name="ipt" id="ipt" onChange={(e)=>setIpt(e.target.value)}></input>
               {Object.keys(iptErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{iptErr[key]}</div>
          })}
           </div>
           <div className="form-group">
               <label htmlFor="idn">Identification Document No.</label>
               <input type="idn" className="form-control" name="idn" id="idn" onChange={(e)=>setIdn(e.target.value)}></input>
               {Object.keys(idnErr).map((key)=>{
            return <div key={key} style={{color:'red'}}>{idnErr[key]}</div>
          })}
           </div>
           <div className="text-center">
                <button className="btn btn-primary mr-1" onClick={(e)=>submitHandler(e)} > Register </button>
                 
              {submitVal===true? < Link to={{pathname:'/Login',
                  hash:'#submit'}}><button className="btn btn-primary mr-1">Login</button> </Link> :null} 
               
               
                {/* {
                  submitVal===true?<div><Link to={{pathname:'/Login',
                  hash:'#submit'}}> </Link> <div>  :    <Link to='/Login'> </Link>        } */}
               
               

                
              
               
                
                
          </div>

          </div>
   </form>
</div>
</div>
{/* <div className="col-3"></div> */}
</div>

</div>
</div>
}
export default RegisterScreen;