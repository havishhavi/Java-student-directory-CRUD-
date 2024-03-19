package com.example.javaBackedStudent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

public class JavaBackedStudentApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaBackedStudentApplication.class, args);
	}
	
	

}
