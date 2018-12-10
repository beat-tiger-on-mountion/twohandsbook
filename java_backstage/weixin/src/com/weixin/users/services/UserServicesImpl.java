
package com.weixin.users.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.entity.Classes;
import com.weixin.entity.Schools;
import com.weixin.entity.User;
import com.weixin.users.dao.UserDaoImpl;

import net.sf.json.JSONObject;

@Service
public class UserServicesImpl {

	@Resource
	private UserDaoImpl userDaoImpl;

	/**
	 * 
	    * @Title: findOne  
	    * @Description: 将查询到的一个用户  
	    * @param @param userName
	    * @param @param passWord
	    * @param @return
	    * @return String
	    * @throws
	 */
	public String findOne(String userName) {
		String hql = "from User where name=?";
		Object[] ob = new Object[1];
		ob[0] = userName;
		
		User user = new User();
		try {
			User u = this.userDaoImpl.findOne(hql, ob);
			if(u != null)
				return "true";
			else
				return "false";
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "false";
		}
		
	}

}
	