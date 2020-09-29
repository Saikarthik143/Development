import React,{useState,useEffect} from'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const Loan=()=>{
    const [accountHolderName,setAccountHolderName]=useState('');
    const [loanType,setLoanType]=useState('');
    const[loanAmount,setLoanAmount]=useState('');
    const [loanApplyDate,setLoanApplyDate]=useState('');
    const[ROI,setROI]=useState('');
    const[duriation,setDuriation]=useState('');
    const[accountHolderNameErr,setAccountHolderNameErr]=useState({});
    const[loanTypeErr,setLoanTypeErr]=useState({});
    const[loanAmountErr,setLoanAmountErr]=useState({});
    const[loanApplyDateErr,setLoanApplyDateErr]=useState({});
    const[ROIErr,setROIErr]=useState({});
    const[duriationErr,setDuriationErr]=useState({})
    const[loanVal,setLoanVal]=useState('');

// useEffect(async()=>{
//     const result=await axios ('http://localhost:3000/users?userName=userName');
//     setAccountHolderName(result.accountHolderName)
// })

    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            alert('success');
            console.log("submitted");
          //  axios.post('http://localhost:3000/Users',array).then(Response=>{
            //    console.log(Response)
           // })
           // .catch(error=>{
            //    console.log(error)
            //})
            axios.get('http://localhost:3000/users?userName=userName')
        }
        else
        alert('invalid');
    }
    const dateChange=(date)=>{
        setLoanApplyDate(date);
    }

        const formValidation=()=>{
            let isValid=true;
            const accountHolderNameErr={};
            const loanTypeErr={};
            const loanAmountErr={};
            const loanApplyDateErr={};
            const ROIErr={};
            const duriationErr={}

            if(!loanType){
                loanTypeErr.noloan="please select the type";

            }
            if(!loanAmount){
                loanAmountErr.noamount="amount not mentioned";
            }
           if(!loanApplyDate){
               loanApplyDateErr.nodate="mention date";

           }
           if(!ROI){
               ROIErr.norate="mention it";
           }
           if(!duriation){
               duriationErr.notime="mention";
           }

        }





    return <div>
        <form onSubmit={submitHandler}>
                     <div className="form-group">
            <label htmlFor="accountHolderName">accountHolderName</label>
            <input type="accountHolderName" className="form-control" name="accountHolderName" id="accountHolderName" onChange={(e)=>setAccountHolderName(e.target.value)}></input>
            {Object.keys(accountHolderNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{accountHolderNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanType">Loan Type</label>
            <select onChange={(e)=>setLoanType(e.target.value)}>
                <option value=""></option>
                <option value="Personal" onSelect={(e)=>setLoanVal(true)}>Personal</option>
                <option value="Education" onSelect={(e)=>setLoanVal(false)}>Education</option>
            </select>
            {Object.keys(loanTypeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanTypeErr[key]}</div>
            })}
        </div>
         
        <div className="form-group">
            <label htmlFor="loanAmount">loanAmount</label>
            <input type="loanAmount" className="form-control" name="loanAmount" id="loanAmount" onChange={(e)=>setLoanAmount(e.target.value)}></input>
            {Object.keys(loanAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanAmountErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanApplyDate">loanApplyDate</label>
            <DatePicker type="loanApplyDate" className="form-control" name="loanApplyDate" id="loanApplyDate" onChange={dateChange} maxDate={new Date()}/>
            {Object.keys(loanApplyDateErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanApplyDateErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="ROI">ROI</label>
            <input type="ROI" className="form-control" name="ROI" id="ROI" onChange={(e)=>setROI(e.target.value)}></input>
            {Object.keys(ROIErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{ROIErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="duriation">Duriation</label>
            <input type="duriation" className="form-control" name="duriation" id="duriation" onChange={(e)=>setDuriation(e.target.value)}></input>
            {Object.keys(duriationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{duriationErr[key]}</div>
            })}
        </div>
        </form>
    </div>
}
export default Loan;