package com.example.javaBackedStudent.serviceIMPL;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.javaBackedStudent.dto.LoginDTO;
import com.example.javaBackedStudent.dto.TeacherDTO;
import com.example.javaBackedStudent.entity.Teacher;
import com.example.javaBackedStudent.repository.TeacherRepo;
import com.example.javaBackedStudent.response.LoginMessage;
import com.example.javaBackedStudent.service.MailService;
import com.example.javaBackedStudent.service.TeacherService;

@Service
public class ServiceIMPL implements TeacherService  {
	
	@Autowired
	private TeacherRepo teacherRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private MailService mailService;
	
	


	public String addTeacher(TeacherDTO teacherDTO) {
		
		Teacher teacher = new Teacher (
			    teacherDTO.getTeacherId(),
			    teacherDTO.getTeacherName(),
			    teacherDTO.getTeacherEmail(),
			    this.passwordEncoder.encode(teacherDTO.getTeacherPassword())
			);
				
		teacherRepo.save(teacher);
		return teacher.getTeacherName();
	}
	
	TeacherDTO teacherDTO;

	@Override
	public LoginMessage loginTeacher(LoginDTO loginDTO) {
		//String msg = " ";
		Teacher teacher1 = teacherRepo.findByTeacherEmail(loginDTO.getTeacherEmail());
		if(teacher1 != null) {
			String password = loginDTO.getTeacherPassword();
			String encodedPassword = teacher1.getTeacherPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight) {
				Optional<Teacher> teacher = teacherRepo.findOneByTeacherEmailAndTeacherPassword(loginDTO.getTeacherEmail(),encodedPassword);
						if(teacher.isPresent()) {
							return new LoginMessage("Login success", true); 
						}else {
							return new LoginMessage("Login Failed", false); 
						}
				} else {
					return new LoginMessage( "password doesnt match", false);
				}
			} else {
				return new LoginMessage("Email not found", false);
			}
	}

	@Override
	public void triggerMail(TeacherDTO teacherDTO) {
		String to = teacherDTO.getTeacherEmail();
		String body = "Welcome to Student Directory, you are successfully registered as a teacher. Please do the operations";
		mailService.sendMail(to, "Teacher Registration", body);
		
		
	}

}
