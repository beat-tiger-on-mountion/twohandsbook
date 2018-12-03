package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Students  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日  
    *
 */
@Entity
@Table(name="tbl_students")
public class Students {
	private int id;
	private String name;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

}
