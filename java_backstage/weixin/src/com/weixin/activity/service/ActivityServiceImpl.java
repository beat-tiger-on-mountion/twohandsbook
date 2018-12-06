package com.weixin.activity.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.activity.dao.ActivityDaoImpl;
import com.weixin.entity.Activity;

@Service
@Transactional(readOnly=false)
public class ActivityServiceImpl {
    @Resource
    private ActivityDaoImpl activityDaoImpl;
    
    public List<Activity> list(){
    	try {
			return this.activityDaoImpl.findAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
    }
}
