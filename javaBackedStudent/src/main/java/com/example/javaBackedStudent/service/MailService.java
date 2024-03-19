package com.example.javaBackedStudent.service;

import org.springframework.stereotype.Service;

@Service
public interface MailService {
	
	public void sendMail(String to, String Subject , String body);

}
