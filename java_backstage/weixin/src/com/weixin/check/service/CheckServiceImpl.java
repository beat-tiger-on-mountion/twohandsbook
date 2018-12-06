package com.weixin.check.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.check.dao.CheckDaoImpl;
import com.weixin.entity.Check;
/**
 * 
    * @ClassName: CheckServiceImpl  
    * @Description: 查询请假和迟到学生  
    * @author xueyunqing  
    * @date 2018年12月6日  
    *
 */
@Service
@Transactional(readOnly=true)
public class CheckServiceImpl {
	@Resource
    private CheckDaoImpl checkDaoImpl;
	
	//查询请假学生
	public List<Check>  findAbsence(){
		List<Check> list1=new ArrayList<Check>();
		List<Check> list;
		Object[] object =new Object[1];
		object[0]="0";
		try {
			list = this.checkDaoImpl.find("from Check where delay =?",object);
			for(Check r: list) {
				Check r1=new Check();
				r1.setId(r.getId());
				r1.setcTime(r.getcTime());
				r1.setAbsence(r.getAbsence());
				r1.setDelay(r.getDelay());
				list1.add(r1);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
		
	  return list1;
	}
	
	//查询迟到学生
	public List<Check> findDelay(){
		List<Check> list1=new ArrayList<Check>();
		List<Check> list;
		Object[] object =new Object[1];
		object[0]="0";
		try {
			list = this.checkDaoImpl.find("from Check where absence =?",object);
			for(Check r: list) {
				Check r1=new Check();
				r1.setId(r.getId());
				r1.setcTime(r.getcTime());
				r1.setAbsence(r.getAbsence());
				r1.setDelay(r.getDelay());
				list1.add(r1);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
		
	  return list1;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
