package com.weixin.users.services;

import java.util.List;
import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.User;
import com.weixin.users.dao.AddTeacherDaoImpl;

import net.sf.json.JSONArray;

@Service
@Transactional(readOnly = false)
public class AddTeacherServices {

	@Resource
	private AddTeacherDaoImpl addTeacherDaoImpl;

	/**
	 * 
	    * @Title: findTeachers  
	    * @Description: 查询老师，将结返回到前端 
	    * @param @param classId
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String findTeachers(int classId) {
		String hql = "select id,name from User where name like '%老师%' ";
		Object[] obj = new Object[0];
		try {
			List<User> users = this.addTeacherDaoImpl.find(hql, obj);
			System.out.println("teachers");
			System.out.println(users.size());
			JSONArray jb = new JSONArray().fromObject(users);
			return jb.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

	/**
	 * 
	    * @Title: updateTeacher  
	    * @Description: 修改老师的状态码  
	    * @param @param ids
	    * @return void
	    * @throws
	 */
	public String updateTeacher(String ids) {
		String hql = "select id,name,status from User where id=?";
		String[] strs = ids.split(" ");
		Object[] obj = new Object[1];
		for (int i = 1; i < strs.length; i++) {
			int id = Integer.parseInt(strs[i]);
			obj[0] = id;
			try {
				User u = this.addTeacherDaoImpl.find2(hql, obj);
				u.setStatus(1005);
				this.addTeacherDaoImpl.update(u);
			} catch (Exception e) {
				e.printStackTrace();
				return "更新失败";
			}
		}
		return "更新成功";
	}
}
