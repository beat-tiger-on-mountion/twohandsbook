
package com.weixin.users.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.Classes;
import com.weixin.entity.Schools;
import com.weixin.entity.Students;
import com.weixin.entity.User;
import com.weixin.myclass.service.MyClassServiceImpl;
import com.weixin.students.service.StudentsServiceImpl;
import com.weixin.users.dao.UserDaoImpl;

import net.sf.json.JSONObject;

@Service
@Transactional(readOnly = false)
public class UserServicesImpl {

	@Resource
	private UserDaoImpl userDaoImpl;
	@Resource
	private MyClassServiceImpl myClassServiceImpl;
	@Resource
	private StudentsServiceImpl studentsServiceImpl;

	/**
	 * 
	    * @Title: findOneTeacher  
	    * @Description: 家长登录时，根据用户名查询数据库，将用户名场景值保存，用户已经存在就 返回用户 
	    * @param @param userName
	    * @param @param status
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String findOneTeacher(String wxName, String status) {
		User user = new User();
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		try {
			User u = this.userDaoImpl.findOne(hql, obj);
			if (u == null) {
				user.setName("无名氏");
				user.setWxName(wxName);
				user.setStatus(Integer.parseInt(status));
				this.userDaoImpl.save(user);
				JSONObject jb1 = JSONObject.fromObject(user);
				return jb1.toString();
			} else {
				user.setName(u.getName());
				user.setId(u.getId());
				user.setWxName(u.getWxName());
				user.setStatus(u.getStatus());
				JSONObject jb1 = JSONObject.fromObject(user);
				return jb1.toString();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 
	    * @Title: findOneParent  
	    * @Description: 家长登录时，根据用户名查询数据库，将用户名场景值，学校班级插入数据库 ,用户已经存在就 返回用户
	    * @param @param userName	用户名
	    * @param @param status		场景值
	    * @param @param schoolId	学校
	    * @param @param classId	 	班级
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String findOneParent(String wxName, String status, int schoolId, int classId) {
		User user = new User();
		Schools s = new Schools();
		Classes c = new Classes();
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		try {
			User u = this.userDaoImpl.findOne(hql, obj);
			if (u == null) {
				user.setName("无名氏");
				user.setWxName(wxName);
				user.setStatus(Integer.parseInt(status));
				s.setSchoolId(schoolId);
				c.setClassId(classId);
				user.setSchool(s);
				user.setClasss(c);
				this.userDaoImpl.save(user);
				JSONObject jb1 = JSONObject.fromObject(user);
				return jb1.toString();
			} else {
				user.setName(u.getName());
				user.setId(u.getId());
				user.setWxName(u.getWxName());
				user.setStatus(u.getStatus());
				s.setSchoolId(u.getSchool().getSchoolId());
				c.setClassId(u.getClasss().getClassId());
				user.setSchool(s);
				user.setClasss(c);
				JSONObject jb1 = JSONObject.fromObject(user);
				return jb1.toString();
			}
		} catch (Exception e1) {
			e1.printStackTrace();
			return null;
		}

	}

	/**
	 * 
	    * @Title: getUser  
	    * @Description: 用户通过下拉进入小程序，数据库已存在用户的信息  
	    * @param @param userName
	    * @param @return
	    * @return String
	    * @throws
	
	 */
	public String getUser(String wxName) {
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		User user = new User();
		Schools s = new Schools();
		Classes c = new Classes();
		User u;
		try {
			u = this.userDaoImpl.findOne(hql, obj);
			user.setName(u.getName());
			user.setId(u.getId());
			user.setWxName(u.getWxName());
			user.setStatus(u.getStatus());
			s.setSchoolId(u.getSchool().getSchoolId());
			c.setClassId(u.getClasss().getClassId());
			user.setSchool(s);
			user.setClasss(c);
			JSONObject jb1 = JSONObject.fromObject(user);
			return jb1.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

	/**
	 * 
	    * @Title: findOne  
	    * @Description: 根据openID查询用户  
	    * @param @param wxName
	    * @param @return
	    * @return User
	    * @throws
	 */
	public User findOne(String wxName) {
		System.out.println("wxName" + wxName);
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		User u;
		Schools s = new Schools();
		Classes c = new Classes();
		try {
			u = this.userDaoImpl.findOne(hql, obj);
			System.out.println("u.id" + u.getId());
			u.setSchool(s);
			u.setClasss(c);
			return u;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 
	    * @Title: teacherUpdate  
	    * @Description: 更新教师信息，也就一个名字  
	    * @param @param wxName
	    * @param @param userName
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String teacherUpdate(String wxName, String userName) {
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		try {
			User u = this.userDaoImpl.findOne(hql, obj);
			u.setName(userName);
			this.userDaoImpl.update(u);
			User user = new User();
			user.setName(u.getName());
			JSONObject jb = new JSONObject().fromObject(user);
			return jb.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 
	    * @Title: parentUpdate  
	    * @Description: 更新家长信息，也 也是就是一个用户名  
	    * @param @param wxName
	    * @param @param userName
	    * @param @param stuName
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String parentUpdate(String wxName, String userName, String stuName) {
		Students s = this.studentsServiceImpl.find(stuName);
		String hql = "from User where wxName=?";
		Object[] obj = new Object[1];
		obj[0] = wxName;
		try {
			User u = this.userDaoImpl.findOne(hql, obj);
			u.setName(userName);
			u.setStudentId(s.getId());
			this.userDaoImpl.update(u);
			return "true";
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
