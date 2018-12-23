package com.weixin.users.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.weixin.entity.User;
import com.weixin.util.BaseDao;

@Repository
public class AddTeacherDaoImpl extends BaseDao<User> {

	@Resource
	private SessionFactory sessionFactory;

	@Override
	public List<User> find(String hql, Object[] params) throws Exception {
		return super.find(hql, params);
	}

	@Override
	public List<User> findAll() throws Exception {
		return super.findAll();
	}

	@Override
	public List<Map<String, Object>> findBySql(String sql, Object[] params) throws Exception {
		return super.findBySql(sql, params);
	}

	@Override
	public void update(User entity) throws Exception {
		super.update(entity);
	}

	/**
	 * 
	    * @Title: find2  
	    * @Description: 重写查询老师部分字段语句  
	    * @param @param hql
	    * @param @param params
	    * @param @return
	    * @param @throws Exception
	    * @return User
	    * @throws
	 */
	public User find2(String hql, Object[] params) throws Exception {
		Query query = this.sessionFactory.getCurrentSession().createQuery(hql);
		if (params != null && params.length > 0) {
			for (int i = 0; i < params.length; i++)
				query.setParameter(i, params[i]);
		}
		List<Object[]> u = query.list();
		User user = new User();
		for (Object[] us : u) {
			user.setId((int) us[0]);
			user.setName((String) us[1]);
			user.setStatus((int) us[2]);
		}
		return user;
	}

}
