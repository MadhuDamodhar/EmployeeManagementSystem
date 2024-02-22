package com.backend.www.Service;

import java.util.List;

import com.backend.www.Model.Employee;

public interface EmployeeInterface {

	
	public Employee addEmployee(Employee emp);
	
	public List<Employee> getAllEmployee();
	
	public Employee getEmployeeById(int id);
	
	public void deleteEmployeeById(int id);
	
	public Employee updateEmployeeById(int id,Employee emp );
}
