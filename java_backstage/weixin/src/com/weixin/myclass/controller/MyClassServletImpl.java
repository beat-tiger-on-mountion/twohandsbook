package com.weixin.myclass.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.entity.Classes;
import com.weixin.myclass.service.MyClassServiceImpl;

@Controller
public class MyClassServletImpl {
     @Resource
     private MyClassServiceImpl myClassServiceImpl;
     /**
      * 
         * @Title: save  
         * @Description: 创建班级并存在数据库中 
         * @Param@param response
         * @Param@param entity
         * @Param@param grade
         * @Param@param classint
         * @Return void
         * @throws
      */
     @RequestMapping("/myclass")
     public void save(HttpServletResponse response,Classes entity,int grade,int classint) {
    	 response.setCharacterEncoding("utf-8");
         response.setContentType("application/json");
    	 
         entity.setGrade(grade);
         entity.setClassInt(classint);
    	 myClassServiceImpl.save(entity);
     }
}
