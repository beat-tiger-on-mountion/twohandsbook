package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Time  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日 
    *
 */

public class Time {
	private int id;
	private String upgo;
	private String downgo;
	private String upback;
	private String downback;
	private int classsId;

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

	public int getClasssId() {
		return classsId;
	}

	public void setClasssId(int classsId) {
		this.classsId = classsId;
	}

}
