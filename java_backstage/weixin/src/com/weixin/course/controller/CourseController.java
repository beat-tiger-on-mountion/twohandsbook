//package com.weixin.course.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.annotation.Resource;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.weixin.check.service.CheckServiceImpl;
//import com.weixin.course.service.CourseServiceImpl;
//
//@Controller
//public class CourseController {
//	@Resource
//	private CourseServiceImpl courseServiceImpl;
//	
//	
//	
//	
//	
//	
//	@RequestMapping(value = "/courseteacher")
//	public void writeCourse(HttpServletRequest request, HttpServletResponse response, String lists) {
//		String[] list = lists.split(",");
//		List list0 = new ArrayList();
//		List list1 = new ArrayList();
//		List list2 = new ArrayList();
//		List list3 = new ArrayList();
//		List list4 = new ArrayList();
//
//		System.out.println("length" + list.length);
//		for (int i = 0; i < list.length; i++) {
//			if (i % 5 == 0) {
//				list0.add(list[i]);
//			} else if (i % 5 == 1) {
//				list1.add(list[i]);
//			} else if (i % 5 == 2) {
//				list2.add(list[i]);
//			} else if (i % 5 == 3) {
//				list3.add(list[i]);
//			} else if (i % 5 == 4) {
//				list4.add(list[i]);
//			}
//
//		}
//
//		for (Object i : list0) {
//			System.out.println(i);
//			System.out.println("………………………………");
//		}
//		for (Object i : list1) {
//			System.out.println(i);
//
//		}
//		System.out.println("………………………………");
//		for (Object i : list2) {
//			System.out.println(i);
//		}
//		System.out.println("………………………………");
//
//		for (Object i : list3) {
//			System.out.println(i);
//		}
//		System.out.println("………………………………");
//		for (Object i : list4) {
//			System.out.println(i);
//		}
//		System.out.println("………………………………");
//		
//		
//		
//		this.courseServiceImpl.updateCourse(list0, list1, list2, list3, list4);
//
//	}
//}
