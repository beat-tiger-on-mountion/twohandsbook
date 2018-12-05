package com.weixin.activity.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.activity.service.ActivityServiceImpl;
import com.weixin.entity.Activity;

import net.sf.json.JSONArray;


@Controller
public class ActivityServletImpl {
	
    @Resource
    private ActivityServiceImpl activityServiceImpl;
    
    @RequestMapping("/activity")
    public String find(HttpServletRequest request,HttpServletResponse response,String a){
    	response.setCharacterEncoding("utf-8");
        response.setContentType("application/json");
          
    	List<Activity> list=this.activityServiceImpl.list();  
    	List<Activity> list2=new ArrayList<>();
    	for(Activity a1:list) {
    		Activity w=new Activity();
    		w.setId(a1.getId());
    		w.setaTime(a1.getaTime());
    		w.setaBody(a1.getaBody());
    		list2.add(w);
    	}
    	
       JSONArray j1=JSONArray.fromObject(list2);
       String j12String = j1.toString();
       System.out.println(j12String);
        
		try {
			PrintWriter writer = response.getWriter();
			writer.write(j12String);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return null;
    }
}
