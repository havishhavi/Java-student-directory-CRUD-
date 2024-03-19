package com.example.javaBackedStudent.serviceIMPL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.javaBackedStudent.service.MailService;

@Service
public class MailIMPL implements MailService {
	
	@Autowired
	private JavaMailSender mailSender;

	@Override
	public void sendMail(String to, String Subject, String body) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(Subject);
		message.setText(body);
		mailSender.send(message);
	}

}
