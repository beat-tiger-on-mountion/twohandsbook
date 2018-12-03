package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Activity  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日  
    *
 */

public class Activity {
	private int id;
	private String aTime;
	private String aBody;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getaTime() {
		return aTime;
	}

	public void setaTime(String aTime) {
		this.aTime = aTime;
	}

	public String getaBody() {
		return aBody;
	}

	public void setaBody(String aBody) {
		this.aBody = aBody;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

}
