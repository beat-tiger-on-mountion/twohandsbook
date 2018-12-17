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

	public String total(String wxName, int grade, int classint, String province, String city, String county,
			String name1) {
		System.out.println("wxNamw" + wxName);
		this.schoolsServicesImpl.save(province, city, county, name1);
		int s = this.schoolsServicesImpl.findOne(province, city, county, name1);
		
		this.myClassServiceImpl.save(grade, classint, province, city, county, name1);
		Classes c = this.myClassServiceImpl.findOne(grade, classint,s);
		System.out.println("shooolsId"+c.getSchool().getSchoolId());
		c.getSchool().setSchoolId(s);
		User u = this.userServicesImpl.findOne(wxName);
		u.getSchool().setSchoolId(s);
		u.getClasss().setClassId(c.getClassId());

		try {
			this.userDaoImpl.update(u);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		JSONObject obj = JSONObject.fromObject(u);
		return obj.toString();

	}
}
