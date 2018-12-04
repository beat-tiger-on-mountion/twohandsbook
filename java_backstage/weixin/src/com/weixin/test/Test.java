package com.weixin.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.entity.TestEntity;

import net.sf.json.JSONArray;
@Controller
public class Test {
  
	@Resource
	private TestDaoImpl  testDaoImpl;
	
	@RequestMapping(value = "/test")
	public void print(HttpServletRequest request, HttpServletResponse response, int first, int last) {
		List<TestEntity> list = this.testDaoImpl.find(first, last);
				
				
				
		
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
