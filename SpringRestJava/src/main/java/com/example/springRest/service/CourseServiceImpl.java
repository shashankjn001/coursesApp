package com.example.springRest.service;

//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springRest.dao.CourseDao;
import com.example.springRest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

//	List<Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
//
//		list = new ArrayList<>();
//		list.add(new Course(145, "Java Core Course", "This course contain concepts of Java"));
//		list.add(new Course(4343, "SpringBoot Course", "Rest api using SpringBoot"));
	
	}

	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
//		return list;
	}

	@Override
	public Course getCourse(long courseId) {
		
		return courseDao.getReferenceById(courseId);

//		Course c = null;
//		for (Course course : list) {
//			if (course.getId() == courseId) {
//				c = course;
//				break;
//			}
//		}
//
//		return c;
	}

	@Override
	public Course addCourse(Course course) {
		
		courseDao.save(course);
		return course;
//		list.add(course);
//		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
//		list.forEach(e -> {
//			
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//			
//			
//		});
//		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Course entity = courseDao.getReferenceById(parseLong);
		courseDao.delete(entity);
//		list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
	}

}
