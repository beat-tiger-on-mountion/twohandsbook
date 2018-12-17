//package com.weixin.course.dao;
//
//import java.util.List;
//
//import javax.annotation.Resource;
//
//import org.hibernate.Query;
//import org.hibernate.Session;
//import org.hibernate.SessionFactory;
//import org.springframework.stereotype.Repository;
//
//import com.weixin.entity.Course;
//import com.weixin.util.BaseDao;
//
//@Repository
//public class CourseDaoImpl extends BaseDao<Course>{
//	@Resource
//	private SessionFactory sessionFactory;
//	
//	
//	public void insertCourse(List list0,List list1,List list2,List list3,List list4) {
//		Session session = this.sessionFactory.getCurrentSession();
//		Query query=session.createQuery("insert into Course(monday,tuesday,wednesday,thursday,friday) values(?,?,?,?,?)");
//		query.setParameter(0, list0);
//		query.setParameter(1, list1);
//		query.setParameter(2, list2);
//		query.setParameter(3, list3);
//		query.setParameter(4, list4);
//
//		
//
//		query.executeUpdate();
//
//	}
//}
