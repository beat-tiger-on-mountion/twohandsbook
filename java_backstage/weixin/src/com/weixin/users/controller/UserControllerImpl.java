package com.weixin.users.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.users.services.UserServicesImpl;

@Controller
public class UserControllerImpl {

	@Resource
	private UserServicesImpl userServicesImpl;

	/**
	 * 
	    * @Title: checkUser  
	    * @Description: 模拟微信登录 
	    * @param @param request
	    * @param @param response
	    * @param @param name	表单的用户名
	    * @param @param password	表单的密码
	    * @return void	直接将值发到前端，无返回值
	    * @throws
	 */
	@RequestMapping("/login")
	public void checkUser(HttpServletRequest request, HttpServletResponse response, String name, String password) {
		String s = this.userServicesImpl.findOne(name, password);
		try {
			PrintWriter writer = response.getWriter();
			writer.write(s);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
			
	}
}
