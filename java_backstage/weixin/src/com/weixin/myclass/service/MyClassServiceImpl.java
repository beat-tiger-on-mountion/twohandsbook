package com.weixin.myclass.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.Classes;
import com.weixin.myclass.dao.MyClassDaoImpl;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
@Transactional(readOnly=false)
public class MyClassServiceImpl {
      @Resource
      private MyClassDaoImpl myClassDaoImpl;
      /**
       * 
          * @Title: save  
          * @Description: 保存数据到数据库  
          * @Param@param entity
          * @Return void
          * @throws
       */
      public void save(Classes entity) {
    	  try {
			myClassDaoImpl.save(entity);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
      }
      
      /**
       * 
          * @Title: findOne  
          * @Description: 根据班级名称查询班级ID  
          * @Param@param grade
          * @Param@param classInt
          * @Param@return
          * @Return Classes
          * @throws
       */
      public Classes findOne(int grade,int classInt) {
 		 String hql="from Classes cl where cl.grade=? and cl.classInt=?";
     	 Object[] ob=new Object[2];
     	 ob[0]=grade;
     	 ob[1]=classInt;
     	 Classes cl=new Classes();
     	 
     	 try {
 			Classes c2=this.myClassDaoImpl.findOne(hql, ob);
            
 			cl.setClassId(c2.getClassId());
	        cl.setGrade(c2.getGrade());
	        cl.setClassInt(c2.getClassInt());
 	        
 			System.out.println(c2.getClassId());
 			
 		} catch (Exception e) {
 			e.printStackTrace();
 			// TODO: handle exception
 		}
     	return cl;   	 
      }
      
   
}
