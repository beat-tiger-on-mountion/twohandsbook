package com.weixin.check.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.weixin.entity.Check;
import com.weixin.util.BaseDao;

@Repository
public class CheckDaoImpl extends BaseDao<Check> {
	@Resource
    private SessionFactory sessionFactory;

	@Override
	public List<Check> find(String hql, Object[] params) throws Exception {
		// TODO Auto-generated method stub
		return super.find(hql, params);
	}
		
    
}
