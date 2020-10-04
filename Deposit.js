import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import  './deposit.css';
 import bank from './bank.png';

class Deposit extends Component {
    state = { 
        accountType:localStorage.getItem('accountType'),
        depoistAmount:'',
         accountValue:false,
        availableBalance:localStorage.getItem('idm'),
        depoistAmountErr:'',
        availableBalanceErr:''
     }
     DisplayBalance=()=>{
       
        //setAvailableBalance(parseInt(availableBalance)+parseInt(depoistAmount));
        if(!isNaN((this.state.depoistAmount))){
        const availableBalance=parseInt(this.state.availableBalance)+parseInt(this.state.depoistAmount);
       this.setState({
           accountValue:true
       })
       
        this.setState({
            availableBalance
        });
       // return this.availableBalance;
        //localStorage.getItem('idm',availableBalance)
        console.log(this.availableBalance);
        //alert(availableBalance);
    }
    else{
        this.setState({
            accountValue:false
        })
        const availableBalance=parseInt(availableBalance)
        this.setState({
            availableBalance 
        })
           }
    }

     submitHandler=(e)=>{
        e.preventDefault();
        const isValid=this.formValidation();
        if(isValid){
            alert('your availabe balance is '+this.state.availableBalance);
            console.log("submitted");      
        }
        else
        alert('invalid');
    }

     formValidation=()=>{
        var isValid=true;
       // const accountType={};
        const depoistAmountErr={};
        const availableBalance={};
        console.log(this.state.depoistAmount)
        if(!this.state.depoistAmount){
            isValid=false;
            this.depoistAmountErr.nodata="cannot be empty";
        }
        if(typeof this.state.depoistAmount!=='undefined'){
            var reg=new RegExp('^[0-9]+$');
            if(this.state.depoistAmount<=0||!(reg.test(this.state.depoistAmount))){
                isValid=false;
                this.state.depoistAmountErr.nodata="amount should be greather than zero";
            }
        }
       this.setState({
           depoistAmountErr
       })
        return isValid;

    }
    handleChange=(event) =>{
        this.setState({accountType: event.target.value});
      }
      depositHandleChange=(event) =>{
        this.setState({depoistAmount: event.target.value});
      }
    

     Logout=()=>{
        localStorage.clear();
    }
    render() { 
        return <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#fa983a"}}>
    <div className="col">
        <ul className="nav row nav pills">
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Demo'}}>
                    <img className="card-img-top" src={bank} alt="card" style={{width:"100px",height:"50px"}}/>
                   
                        </Link>
            </li>
            <li class="col-sm-3 nav-item text-center" style={{fontFamily:"David Libre",fontWeight:"bold"}}>
                <Link className="nav-link btn-outline-light"   ><i className="fa fa-search"></i>Search</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
                <Link className="nav-link btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} ><i className="fa fa-fw fa-user "></i>ViewProfile</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Login',hash:'#Login'}}>
                 <button className="btn btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} onClick={this.Logout}><i className="fa  fa-sign-out"></i>Logout </button> 
               </Link>
            </li>
        </ul>
    </div>
</nav>
<div className="bgclr">
    <div className="container">
   <div className="row">
       <div className="col-3"></div>
       <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
           <br/>
           <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Deposit Form</h3>
      
       <div className="card-body">
    <form onSubmit={this.submitHandler}>
        <div className="offset-2">
   <div className="form-group">
       <label htmlFor="accountType">Account Type</label>
      <input type="accountType" className="form-control" value={this.state.accountType} onChange={(e)=>this.handleChange(e)}></input>
   </div>
   <div className="form-group">
       <label htmlFor="depoistAmount">Deposit Amount</label>
       <input type="depoistAmount" className="form-control" name="depoistAmount" id="depoistAmount" onChange={(e)=>this.depositHandleChange(e)}></input>
       {Object.keys(this.state.depoistAmountErr).map((key)=>{
           return <div key={key} style={{color:"red"}}>{this.state.depoistAmountErr[key]}</div>
       })}
   </div>
   
   <div className="text-center">
   <button type="submit" className="btn btn-primary mr-1" onClick={this.DisplayBalance} >Submit</button>
    
   </div>
   {

this.state.accountValue===true?<div> <textarea value={this.state.availableBalance}>{this.state.availableBalance}</textarea></div>:<textarea value={this.state.availableBalance}>{this.state.availableBalance}</textarea>
        }
        </div>
  </form>
   </div>
   </div>
   </div>
   </div>
   </div>
</div>
}
}
 
export default Deposit ;