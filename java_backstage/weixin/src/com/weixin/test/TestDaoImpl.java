package com.weixin.test;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.weixin.entity.TestEntity;


@Repository
public class TestDaoImpl {
	@Resource
	private SessionFactory sessionFactory;

	public List<TestEntity> find(int first, int last) {

		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from TestEntity where id between :first and :last");
		query.setParameter("first", first);
		query.setParameter("last", last);
		List<TestEntity> list = query.list();
		return list;
	}
}
