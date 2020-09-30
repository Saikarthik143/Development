import React, { useState } from "react";

const Depoist=()=>{
    let[accountType,setAccountType]=useState('');
    const[depoistAmount,setDepoistAmount]=useState('');
    const[availableBalance,setAvailableBalance]=useState('');

    const[accountTypeErr,setAccountTypeErr]=useState({});
    const[depoistAmountErr,setDepoistAmountErr]=useState({});
    const[availableBalanceErr,setAvailableBalanceErr]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            alert('success');
            console.log("submitted");
          //  axios.post('http://localhost:3000/Users',array).then(Response=>{
           //     console.log(Response)
           // })
           // .catch(error=>{
            //    console.log(error)
           // })
            
        }
        else
        alert('invalid');
    }

    const formValidation=()=>{
        let isValid=true;
        const accountType={};
        const depoistAmount={};
        const availableBalance={};

        if(!depoistAmount){
            isValid=false;
            depoistAmountErr="cannot be empty";
        }
        if(typeof depoistAmount!=='undefined'){
            var reg=new RegExp('^[0-9]+$');
            if(depoistAmount<=0||!(reg.test(depoistAmount))){
                isValid=false;
                depoistAmountErr.nodata="amount should be greather than zero";
            }
        }

    }
    accountType=localStorage.getItem('accountType');


    return <div>
         <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Loan Form</h3>
           
            <div className="card-body">
         <form onSubmit={submitHandler}>
             <div className="offset-2">
        <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
           <input type="accountType" className="form-control" value={accountType} onChange={(e)=>setAccountType(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="depoistAmount">Depoist Amount</label>
            <input type="depoistAmount" className="form-control" name="depoistAmount" id="depoistAmount" onChange={(e)=>setDepoistAmount(e.target.value)}></input>
            {Object.keys(depoistAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{depoistAmountErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div>
        <div className="form-group">
            <label htmlFor="availableBalance">Available balance</label>
            <input type="availableBalance" className="form-control" name="availableBalance" id="availableBalance" onChange={(e)=>setAvailableBalance(e.target.value)}></input>
            {Object.keys(availableBalanceErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{availableBalanceErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    </div>
}
export default Depoist;
