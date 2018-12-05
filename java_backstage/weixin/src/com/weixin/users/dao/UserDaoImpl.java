package com.weixin.users.dao;

import org.springframework.stereotype.Repository;

import com.weixin.entity.User;
import com.weixin.util.BaseDao;

@Repository
public class UserDaoImpl extends BaseDao <User>{

	
	@Override
	public User findOne(String hql, Object[] params) throws Exception {
		
		return super.findOne(hql, params);
	}
	
}