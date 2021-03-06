package com.weixin.myclass.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.Classes;
import com.weixin.entity.Schools;
import com.weixin.entity.User;
import com.weixin.myclass.dao.MyClassDaoImpl;
import com.weixin.schools.dao.SchoolsDaoImpl;
import com.weixin.schools.services.SchoolsServicesImpl;
import com.weixin.users.dao.UserDaoImpl;
import com.weixin.users.services.UserServicesImpl;

import net.sf.json.JSONObject;

@Service
@Transactional(readOnly = false)
public class TotalServices {

	@Resource
	private UserServicesImpl userServicesImpl;
	@Resource
	private UserDaoImpl userDaoImpl;
	@Resource
	private SchoolsServicesImpl schoolsServicesImpl;
	@Resource
	private SchoolsDaoImpl schoolsDaoImpl;
	@Resource
	private MyClassServiceImpl myClassServiceImpl;
	@Resource
	private MyClassDaoImpl myClassDaoImpl;

	/**
	 * 
	    * @Title: total  
	    * @Description: 新建班级，保存学校信息，班级信息，更新用户信息  
	    * @param @param wxName
	    * @param @param grade
	    * @param @param classint
	    * @param @param province
	    * @param @param city
	    * @param @param county
	    * @param @param name1
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String total(String wxName, int grade, int classint, String province, String city, String county,
			String name1) {
		
		int s = this.schoolsServicesImpl.findOne(province, city, county, name1);
		System.out.println(s);
		if (s == 0) {
			this.schoolsServicesImpl.save(province, city, county, name1);
			s = this.schoolsServicesImpl.findOne(province, city, county, name1);
		}
		this.myClassServiceImpl.save(grade, classint, province, city, county, name1);
		int classId = this.myClassServiceImpl.findOne(grade, classint, s);
		Classes c = this.myClassServiceImpl.findClass(classId);
		c.getSchool().setSchoolId(s);
		User u = this.userServicesImpl.findOne(wxName);
		u.getSchool().setSchoolId(s);
		u.getClasss().setClassId(c.getClassId());
		try {
			this.userDaoImpl.update(u);
		} catch (Exception e) {
			e.printStackTrace();
		}
		User user = new User();
		Classes classes = new Classes();
		Schools school = new Schools();
		user.setClasss(classes);
		user.setSchool(school);
		user.getSchool().setSchoolId(u.getSchool().getSchoolId());
		user.getClasss().setClassId(u.getClasss().getClassId());
		user.setName(u.getName());
		user.setWxName(u.getWxName());
		user.setStatus(u.getStatus());
		user.setStudentId(u.getStudentId());
		JSONObject obj = JSONObject.fromObject(user);
		return obj.toString();

	}
}
