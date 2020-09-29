import React from 'react';
// import dep from'./dep.jpg';
// import ty from './ty.png';
import { Link } from 'react-router-dom';

const Demo=()=>{
return <div>
    <div className="container">
        <div className="row justify-content-around">
            <div className="col-4 mt-5">
                <div className="card" style={{width: "200px"}}>
                   

                    <div className="card-body">
                    <Link to={{pathname:'/Loan',hash:'#Loan'}}>
                    {/* <img className="card-img-top" src={ty} alt="card" style={{width:"100%"}}/> */}<h4 className="card-title">Loan</h4>
                    </Link>
                        

                    </div>
                </div>
            </div>
            <div className="col-4 mt-5">
                <div className="card" style={{width:"200px"}}>
                    {/* <img className="card-img-top" src={dep} alt="card" style={{width:"100%"}}></img> */}
                    <div className="card-body">
                        <h4 className="card-title">Depoist</h4>
 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}
export default Demo