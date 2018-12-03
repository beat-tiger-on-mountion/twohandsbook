package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Time  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日 
    *
 */

@Entity
@Table(name="tbl_time")
public class Time {
	private int id;
	private String upgo;
	private String downgo;
	private String upback;
	private String downback;
	private Classes classs;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUpgo() {
		return upgo;
	}

	public void setUpgo(String upgo) {
		this.upgo = upgo;
	}

	public String getDowngo() {
		return downgo;
	}

	public void setDowngo(String downgo) {
		this.downgo = downgo;
	}

	public String getUpback() {
		return upback;
	}

	public void setUpback(String upback) {
		this.upback = upback;
	}

	public String getDownback() {
		return downback;
	}

	public void setDownback(String downback) {
		this.downback = downback;
	}
	
	@ManyToOne
	@JoinColumn(name="classId")
	public Classes getClasss() {
		return classs;
	}

	public void setClasss(Classes classs) {
		this.classs = classs;
	}


}
