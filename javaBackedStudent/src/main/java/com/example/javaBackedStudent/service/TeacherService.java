package com.example.javaBackedStudent.service;

import org.springframework.stereotype.Service;


import com.example.javaBackedStudent.dto.LoginDTO;
import com.example.javaBackedStudent.dto.TeacherDTO;
import com.example.javaBackedStudent.response.LoginMessage;

@Service
public interface TeacherService {

	String addTeacher(TeacherDTO teacherDTO);

	LoginMessage loginTeacher(LoginDTO loginDTO);
	
	void triggerMail(TeacherDTO teacherDTO);

}
