package com.weixin.schooltime.service;

import java.util.ArrayList;
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
	    		List<Schooltime> list=this.schoolTimeDaoImpl.findAll();
				List<Schooltime> list2=new ArrayList<>();
		     	for(Schooltime a1:list) {
		     		Schooltime w=new Schooltime();
		     		w.setId(a1.getId());
		     		w.setGo(a1.getGo());
		     		w.setBack(a1.getBack());
		     		w.setRemark(a1.getRemark());
		     		w.setsTime(a1.getsTime());
		     		list2.add(w);
		     	}
		     	return list2;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			}
			
	    }
}
