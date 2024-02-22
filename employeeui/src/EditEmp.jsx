import React, { useState, useEffect } from 'react';
import { useParams,useNavigate, Navigate } from 'react-router-dom';
import Service from './service/Emp.Service';

function EditEmp() {
  const [emp, setEmp] = useState({
    empName: '',
    address: '',
    email: '',
    jobRole: '',
    salary: '',
  });

  const { id } = useParams();
  
  const [msg, setMsg] = useState('');
const Navigate=useNavigate();
  useEffect(() => {
    Service.getEmpById(id)
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
    console.log(emp);
  };

  const handleReset = () => {
    setEmp({
      empName: '',
      address: '',
      email: '',
      jobRole: '',
      salary: '',
    });
  };

  const updateEmp = (e) => {
    e.preventDefault();
    Service.updateEmp(emp.id,emp)
      .then((res) => {
        Navigate("/");
        handleReset(); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center fs-2'>Update Employee{msg && <p className='text-center fs-2 text-success'>{msg}</p>}</div>
            <div className='card-body'>
              <form onSubmit={(e) => updateEmp(e)}>
                <div className='mb-3'>
                  <label>Enter Name</label>
                  <input type='text' className='form-control' name='empName' required value={emp.empName} onChange={(e) => handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter Address</label>
                  <input type='text' className='form-control' name='address' required  value={emp.address} onChange={(e) => handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter Email</label>
                  <input type='email' className='form-control' name='email' required  value={emp.email} onChange={(e) => handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter JobRole</label>
                  <input type='text' className='form-control' name='jobRole' required  value={emp.jobRole} onChange={(e) => handleClick(e)} />
                </div>
                <div className='mb-3'>
                  <label>Enter Salary</label>
                  <input type='number' className='form-control' name='salary' required  value={emp.salary} onChange={(e) => handleClick(e)} />
                </div>
                <div className='text-center '>
                  <button className='btn btn-primary' type='submit'>
                    Update
                  </button>
                  <input type='reset' className='btn btn-danger ms-2' value='Reset' onClick={handleReset} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmp;
