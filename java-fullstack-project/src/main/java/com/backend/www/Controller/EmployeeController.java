package com.backend.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.www.Model.Employee;
import com.backend.www.Service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
@Autowired
	EmployeeService employeeService;
	
	
	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee emp){
		return new ResponseEntity<Employee>(employeeService.addEmployee(emp),HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Employee>> getAllEmployee(){
		return new ResponseEntity<List<Employee>>(employeeService.getAllEmployee(),HttpStatus.OK);
	}
	@GetMapping("/fetch/{id}")
	public ResponseEntity<Employee> egtEmployeeById(@PathVariable int id){
		return new ResponseEntity<Employee>(employeeService.getEmployeeById(id),HttpStatus.OK);
	}
	@GetMapping("/delete/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable int id){
		employeeService.deleteEmployeeById(id);
		return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
	}
	@PostMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable int id,@RequestBody Employee emp){
		return new ResponseEntity<Employee>(employeeService.updateEmployeeById(id, emp),HttpStatus.OK);
	}
}
