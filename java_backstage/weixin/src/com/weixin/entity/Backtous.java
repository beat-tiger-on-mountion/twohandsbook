package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * 
    * @ClassName: Backtous  
    * @Description: TODO  
    * @author xueyunqing 
    * @date 2018年12月3日  
    *
 */

public class Backtous {
	private int id;
	private int userId;
	private String bBody;
	private String bTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getbBody() {
		return bBody;
	}

	public void setbBody(String bBody) {
		this.bBody = bBody;
	}

	public String getbTime() {
		return bTime;
	}

	public void setbTime(String bTime) {
		this.bTime = bTime;
	}

}
