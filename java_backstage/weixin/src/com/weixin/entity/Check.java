package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * 
    * @ClassName: Check  
    * @Description: TODO  
    * @author xueyunqing 
    * @date 2018年12月3日  
    *
 */
@Entity
@Table(name="tbl_check")
public class Check {
	private int id;
	private String cTime;
	private String absence;
	private String delay;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getcTime() {
		return cTime;
	}

	public void setcTime(String cTime) {
		this.cTime = cTime;
	}

	public String getAbsence() {
		return absence;
	}

	public void setAbsence(String absence) {
		this.absence = absence;
	}

	public String getDelay() {
		return delay;
	}

	public void setDelay(String delay) {
		this.delay = delay;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}
}
