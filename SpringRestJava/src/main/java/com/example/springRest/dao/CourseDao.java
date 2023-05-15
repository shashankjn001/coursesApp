package com.example.springRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springRest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>{
	
}
