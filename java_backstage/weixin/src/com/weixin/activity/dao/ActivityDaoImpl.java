package com.weixin.activity.dao;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.weixin.entity.Activity;
import com.weixin.util.BaseDao;

@Repository
public class ActivityDaoImpl extends BaseDao<Activity>{
     @Resource
     private SessionFactory sessionFactory;
     
     public List<Activity> findAll(){
       Session session=this.sessionFactory.getCurrentSession();
       Query q=session.createQuery("from Activity");
       System.out.println(q);
       return q.list();
     }
}
