package com.weixin.students.service;


import java.util.List;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.Students;
import com.weixin.entity.User;
import com.weixin.students.dao.StudentsDaoImpl;

@Service
@Transactional(readOnly=false)
public class StudentsServiceImpl{
     @Resource
     private StudentsDaoImpl studentsDaoImpl;
     /**
      * 
         * @Title: findById  
         * @Description: 从学生表里查出一个班级的学生 
         * @Param@param id
         * @Param@return
         * @Return List<Students>
         * @throws
      */
     public List<Students> findById(int id){
		 String hql="from Students where classId=?";
		 Object[] ob = new Object[1];
		 ob[0]=id;
         
		 try {
			return this.studentsDaoImpl.find(hql,ob);			
		 }catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			}
    	
    	 
     }
     
     
     
     /**
      * 
         * @Title: findOne  
         * @Description: 根据学生姓名查学生  
         * @param @param studentName  学生姓名
         * @param @return
         * @return Students
         * @throws
      */
 	public Students findOne(String studentName) {
		String hql = "from Students where name=?";
		Object[] ob = new Object[1];
		ob[0] = studentName;
		try {
			return this.studentsDaoImpl.findOne(hql, ob);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		

		
	}
     
     
     
     
     
     
     
     
     
   
}
