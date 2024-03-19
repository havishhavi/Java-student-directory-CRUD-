package com.example.javaBackedStudent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.javaBackedStudent.dto.LoginDTO;
import com.example.javaBackedStudent.dto.TeacherDTO;
import com.example.javaBackedStudent.response.LoginMessage;
import com.example.javaBackedStudent.service.MailService;
import com.example.javaBackedStudent.service.TeacherService;

@RestController
@CrossOrigin

public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	
	
	@PostMapping("/api/teachers/save")
	public String saveTeacher(@RequestBody TeacherDTO teacherDTO) {
		String id = teacherService.addTeacher(teacherDTO);
		teacherService.triggerMail(teacherDTO);
		return id;
		 
	}
	
	@PostMapping("/api/teachers/login")
	public ResponseEntity<?> loginTeacher(@RequestBody LoginDTO loginDTO) {
		LoginMessage loginMessage = teacherService.loginTeacher(loginDTO);
		return ResponseEntity.ok(loginMessage);
		
	}

}
