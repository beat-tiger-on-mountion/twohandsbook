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
    	return this.activityDaoImpl.findAll();
    }
}
