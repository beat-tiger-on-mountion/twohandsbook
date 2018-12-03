package com.weixin.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Comments  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日 
    *
 */

public class Comments {
	private int id;
	private String cBody;
	private int thumbs;
	private String comments;
	private int userId;
	private int classId;
	private boolean anonymity;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getcBody() {
		return cBody;
	}

	public void setcBody(String cBody) {
		this.cBody = cBody;
	}

	public int getThumbs() {
		return thumbs;
	}

	public void setThumbs(int thumbs) {
		this.thumbs = thumbs;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

	public boolean isAnonymity() {
		return anonymity;
	}

	public void setAnonymity(boolean anonymity) {
		this.anonymity = anonymity;
	}

}
