package com.weixin.check.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.check.service.CheckServiceImpl;
import com.weixin.entity.Check;
import net.sf.json.JSONArray;
/**
 * 
    * @ClassName: CheckController  
    * @Description: 查询请假和迟到学生  
    * @author xueyunqing 
    * @date 2018年12月6日  
    *
 */
@Controller
public class CheckController {
	@Resource
   private CheckServiceImpl checkServiceImpl;
	//查询请假学生
	@RequestMapping(value = "/absence")
	public void printAbsence(HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		List<Check> list=this.checkServiceImpl.findAbsence();
		JSONArray j1 = JSONArray.fromObject(list);
		String j12String = j1.toString();
		
		try {

			PrintWriter writer = response.getWriter();
			writer.write(j12String);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	//查询迟到学生
	@RequestMapping(value = "/delay")
	public void printDelay(HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		List<Check> list=this.checkServiceImpl.findDelay();
		JSONArray j1 = JSONArray.fromObject(list);
		String j12String = j1.toString();
		
		try {

			PrintWriter writer = response.getWriter();
			writer.write(j12String);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
				
				
				
		
		
		

	
   
}
