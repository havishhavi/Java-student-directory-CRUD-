package com.example.javaBackedStudent.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.javaBackedStudent.entity.Teacher;
@EnableJpaRepositories
@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Integer> {
	
	
	Teacher findByTeacherEmail(String teacherEmail);
	Optional<Teacher> findOneByTeacherEmailAndTeacherPassword(String teacherEmail, String teacherPassword);

}
