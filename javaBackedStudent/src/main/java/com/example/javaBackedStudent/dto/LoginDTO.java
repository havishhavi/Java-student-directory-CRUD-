package com.example.javaBackedStudent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
	
	
	private String teacherEmail;
	private String teacherPassword;
	
	public LoginDTO(String teacherEmail, String teacherPassword) {
		this.teacherEmail = teacherEmail;
		this.teacherPassword = teacherPassword;
	}

	public String getTeacherEmail() {
		return teacherEmail;
	}

	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}

	public String getTeacherPassword() {
		return teacherPassword;
	}

	public void setTeacherPassword(String teacherPassword) {
		this.teacherPassword = teacherPassword;
	}

	
}
