package com.weixin.schooltime.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.entity.Activity;
import com.weixin.entity.Schooltime;
import com.weixin.schooltime.dao.SchoolTimeDaoImpl;

@Service
@Transactional(readOnly=false)
public class SchoolTimeServiceImpl {
	@Resource
	private SchoolTimeDaoImpl schoolTimeDaoImpl;
	
	public void save(Schooltime entity) {
		try {
			schoolTimeDaoImpl.save(entity);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	 public List<Schooltime> list(){
	    	try {
				return this.schoolTimeDaoImpl.findAll();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return null;
	    }
}
