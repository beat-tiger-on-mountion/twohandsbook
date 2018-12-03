package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Onduty  
    * @Description: TODO  
    * @author xueyunqing 
    * @date 2018年12月3日   
    *
 */

public class Onduty {
	private int id;
	private String monday;
	private String tuesday;
	private String wednesday;
	private String thursday;
	private String friday;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMonday() {
		return monday;
	}

	public void setMonday(String monday) {
		this.monday = monday;
	}

	public String getTuesday() {
		return tuesday;
	}

	public void setTuesday(String tuesday) {
		this.tuesday = tuesday;
	}

	public String getWednesday() {
		return wednesday;
	}

	public void setWednesday(String wednesday) {
		this.wednesday = wednesday;
	}

	public String getThursday() {
		return thursday;
	}

	public void setThursday(String thursday) {
		this.thursday = thursday;
	}

	public String getFriday() {
		return friday;
	}

	public void setFriday(String friday) {
		this.friday = friday;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

}
