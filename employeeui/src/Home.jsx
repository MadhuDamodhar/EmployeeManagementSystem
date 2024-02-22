import React, { useEffect, useState } from 'react';
import Service from './service/Emp.Service';
import { Link } from 'react-router-dom';

function Home() {
  const [empList, setEmpList] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
   init()
  }, []); 
  const init=()=>{
    Service.getAllEmp()
    .then((res) => {
      console.log(res.data);
      setEmpList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const deleteEmp=(id)=>{
    Service.deleteEmpById(id).then((res)=>{
  setStatus("Deleted successfully!");
  init();
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='container'>
      <h1 className='text-center  mt-5'>Employees Details</h1>
      { status&&<p className='text-center text-danger'>{status}</p>}
      <table className='table table-hover mt-5'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Address</th>
            <th scope='col'>Email</th>
            <th scope='col'>JobRole</th>
            <th scope='col'>Salary</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.empName}</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>
              <td>{employee.jobRole}</td>
              <td>{employee.salary}</td>
              <td><Link className='btn btn-warning text-light' to={"/editEmp/"+employee.id}>Update</Link><Link onClick={()=>{deleteEmp(employee.id)}} className='btn btn-danger ms-2' >Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
