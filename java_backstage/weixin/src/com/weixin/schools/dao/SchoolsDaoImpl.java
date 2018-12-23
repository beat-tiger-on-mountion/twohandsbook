package com.weixin.schools.dao;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.weixin.entity.Schools;
import com.weixin.util.BaseDao;

@Repository
public class SchoolsDaoImpl extends BaseDao<Schools> {

	@Resource
	private SessionFactory SessionFactory;

	@Override
	public void save(Schools entity) throws Exception {
		// TODO Auto-generated method stub
		super.save(entity);
	}

	@Override
	public Schools findOne(String hql, Object[] params) throws Exception {

		return super.findOne(hql, params);
	}

	@Override
	public void update(Schools entity) throws Exception {
		super.update(entity);
	}
	
	public void find(String province, String city, String county, String name1) {
		String hql = "from Schools cl where cl.province=? and cl.city=? and cl.county=? and cl.schoolName=?";
		Object[] ob = new Object[4];
		ob[0] = province;
		ob[1] = city;
		ob[2] = county;
		ob[3] = name1;
		Session session = this.SessionFactory.getCurrentSession();
		Query q = session.createQuery(hql);
		Schools s = (Schools) q.uniqueResult();
		if(s == null) {
			System.out.println("null");
		}else {
			System.out.println("not null");
		}
	}

}
