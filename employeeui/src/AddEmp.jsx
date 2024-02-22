import React, { useState } from 'react';
import Service from './service/Emp.Service'
function AddEmp() {
  const [emp,setEmp]=useState({
    empName:'',
    address:'',
    email:'',
    jobRole:'',
    salary:""
  })

  const [msg,setMsg]=useState('');

  const handleClick=(e)=>{
    const value=e.target.value;
    setEmp({...emp,[e.target.name]:value});
    console.log(emp);

  }
  
 const submitEmp=(e)=>{
  e.preventDefault();
  Service.empSave(emp).then((res)=>{
    setMsg("Submitted Successfully!");
    setEmp({
      empName:'',
    address:'',
    email:'',
    jobRole:'',
    salary:""
    });


  }).catch((error)=>{
    console.log(error);
  })
  
  
 }

const handleReset=()=>{
  setEmp({
    empName:'',
  address:'',
  email:'',
  jobRole:'',
  salary:""
  });
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center fs-2'>
              Add Employee
            {
              msg && (<p className='text-center fs-2 text-success'>{msg}</p>)
            }</div>
            <div className='card-body'>
              <form onSubmit={(e)=>{submitEmp(e)}}>
                <div className='mb-3'>
                  <label>Enter Name</label>
                  <input type='text' className='form-control' name='empName' required  value={emp.empName}  onChange={(e)=>handleClick(e)}/>
                </div>
                <div className='mb-3'>
                  <label>Enter Address</label>
                  <input type='text' className='form-control' name='address' required  value={emp.address} onChange={(e)=>handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter Email</label>
                  <input type='email' className='form-control' name='email' required  value={emp.email} onChange={(e)=>handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter JobRole</label>
                  <input type='text' className='form-control' name='jobRole' required  value={emp.jobRole} onChange={(e)=>handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter Salary</label>
                  <input type='number' className='form-control' name='salary' required  value={emp.salary} onChange={(e)=>handleClick(e)} />
                </div>
                <div className='text-center '>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                  <input type='reset' className='btn btn-danger ms-2'  value='Reset' onClick={()=>handleReset()} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmp;
