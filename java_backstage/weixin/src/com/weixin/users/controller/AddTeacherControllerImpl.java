package com.weixin.users.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.users.services.AddTeacherServices;

@Controller
public class AddTeacherControllerImpl {

	@Resource
	private AddTeacherServices addTeacherServices;
	
	/**
	 * 
	    * @Title: addTeacher  
	    * @Description: 查询出老师并发送到前端  
	    * @param @param response
	    * @param @param classId
	    * @return void
	    * @throws
	 */
	@RequestMapping(value="getTeachers")
	public void addTeacher(HttpServletResponse response,int classId) {
		response.setCharacterEncoding("utf-8");
		String s = this.addTeacherServices.findTeachers(classId);
		try {
			PrintWriter writer = response.getWriter();
			writer.write(s);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 
	    * @Title: updateTeacher  
	    * @Description: 返回更新结果  
	    * @param @param ids
	    * @return void
	    * @throws
	 */
	@RequestMapping(value="updateTeacher")
	public void updateTeacher(HttpServletResponse response,String ids) {
		response.setCharacterEncoding("utf-8");
		String s = this.addTeacherServices.updateTeacher(ids);
		try {
			PrintWriter writer = response.getWriter();
			writer.write(s);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
}
