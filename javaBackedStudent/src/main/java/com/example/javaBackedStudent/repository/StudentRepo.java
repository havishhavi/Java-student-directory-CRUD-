package com.example.javaBackedStudent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.javaBackedStudent.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
