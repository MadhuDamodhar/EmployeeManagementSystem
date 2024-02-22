package com.backend.www.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.www.Model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
