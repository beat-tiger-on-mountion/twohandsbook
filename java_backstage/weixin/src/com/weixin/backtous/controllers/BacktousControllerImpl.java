package com.weixin.backtous.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.backtous.services.BacktousServiceImpl;
import com.weixin.entity.User;

    /**  
    * @ClassName: BacktousControllerImpl  
    * @Description: 保存用户反馈意见  
    * @author Energy_Filed  
    * @date 2018年12月5日  
    *    
    */  
    
@Controller
public class BacktousControllerImpl {
	@Resource
	private BacktousServiceImpl backtousServiceImpl;
	/**
	 * 
	    * @Title: saveSuggest  
	    * @Description: 保存用户的建议  
	    * @param @param request
	    * @param @param response
	    * @param @param userName	用户名
	    * @param @param suggest		反馈意见
	    * @return void	
	    * @throws
	 */
	@RequestMapping(value="backtous")
	public void saveSuggest(HttpServletRequest request, HttpServletResponse response, String userName, String suggest) {
		String s = this.backtousServiceImpl.saveSuggest(userName, suggest);
		response.setCharacterEncoding("utf-8");
		try {
			PrintWriter writer = response.getWriter();
			writer.write(s);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
