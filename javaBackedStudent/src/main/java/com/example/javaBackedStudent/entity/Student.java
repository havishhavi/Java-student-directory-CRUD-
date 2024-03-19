package com.example.javaBackedStudent.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String studentName;
	public String studentEmail;
	public String studentAddress;
	
	public String getStudentName() {
		return studentName;
	}
	public String getStudentEmail() {
		return studentEmail;
	}
	public String getStudentAddress() {
		return studentAddress;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}
	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}

}
