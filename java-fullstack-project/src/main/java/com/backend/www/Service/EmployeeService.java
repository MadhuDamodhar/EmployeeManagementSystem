package com.backend.www.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.www.Model.Employee;
import com.backend.www.Repo.EmployeeRepository;
@Service
public class EmployeeService implements EmployeeInterface{
     @Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public Employee addEmployee(Employee emp) {
		// TODO Auto-generated method stub
		return employeeRepository.save(emp);
	}

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id).get();
	}

	@Override
	public void deleteEmployeeById(int id) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.findById(id).get();
		if(emp!=null) {
			employeeRepository.delete(emp);
		}
	
	}

	@Override
	public Employee updateEmployeeById(int id,Employee emp) {
		// TODO Auto-generated method stub
		Employee oldEmp=employeeRepository.findById(id).get();
		if(oldEmp!=null) {
			emp.setId(id);
			employeeRepository.save(emp);
		}
	
		return null;
	}

}
