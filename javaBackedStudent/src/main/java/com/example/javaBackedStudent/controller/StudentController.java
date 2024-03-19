package com.example.javaBackedStudent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.javaBackedStudent.entity.Student;
import com.example.javaBackedStudent.repository.StudentRepo;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
	

	@Autowired
	StudentRepo studentRepo;
	@PostMapping("/api/students")
	public ResponseEntity<Student> saveStudent(@RequestBody Student student) {
		return new ResponseEntity<>(studentRepo.save(student), HttpStatus.CREATED);

	}
	@GetMapping("/api/students")
	public ResponseEntity<List<Student>> getStudents() {
		try {
			return new ResponseEntity<>(studentRepo.findAll(),HttpStatus.OK) ;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/api/students/{id}")
	public ResponseEntity<Student> getStudents(@PathVariable int id) {
		Optional<Student> student = studentRepo.findById(id);
		if(student.isPresent()) {
			return new ResponseEntity<>(student.get(),HttpStatus.OK);
		
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@PutMapping("/api/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable int id,@RequestBody Student stud) {
		Optional<Student> student = studentRepo.findById(id);
		if(student.isPresent()) {
			student.get().setStudentName(stud.getStudentName());
			student.get().setStudentEmail(stud.getStudentEmail());
			student.get().setStudentAddress(stud.getStudentAddress());
			return new ResponseEntity<>(studentRepo.save(student.get()),HttpStatus.OK);
		
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@DeleteMapping("/api/students/{id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
		Optional<Student> student = studentRepo.findById(id);
		if(student.isPresent()) {
			studentRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	

}
