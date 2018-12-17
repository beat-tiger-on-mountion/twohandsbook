package com.weixin.students.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.entity.Classes;
import com.weixin.entity.Students;
import com.weixin.myclass.service.MyClassServiceImpl;
import com.weixin.students.service.StudentsServiceImpl;

import net.sf.json.JSONArray;

@Controller
public class StudentsServletImpl {
       @Resource
       private StudentsServiceImpl studentsServiceImpl;
       @Resource
       private MyClassServiceImpl myClassServiceImpl;
        /**
         * 
            * @Title: findById  
            * @Description: 从学生表里查出相同班级的学生 
            * @Param@param response
            * @Param@param id
            * @Param@return
            * @Return List<Students>
            * @throws
         */
       @RequestMapping("/students")
       public List<Students> findById(HttpServletRequest request,HttpServletResponse response,int grade,int classInt, int schoolId){
    	   response.setCharacterEncoding("utf-8");
           response.setContentType("application/json");
//    	   通过班级表获得班级ID
    	   System.out.println(grade);
    	   Classes cl2=this.myClassServiceImpl.findOne(grade, classInt,schoolId);
  	   
    	   int id = cl2.getClassId();
    	   System.out.println(id);
    	   
    	   

//          ?形成死循环了如何解决
          List<Students> list=this.studentsServiceImpl.findById(id);
          System.out.println(list);
          List<Students> list2=new ArrayList<>();
          for(Students l:list) {
        	  Students s=new Students();
        	  s.setId(l.getId());
        	  s.setName(l.getName());        	  
        	  list2.add(s);
          }
//            将数据转换成json字符串
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
