package com.weixin.entity;

/**
 * 
    * @ClassName: Notice  
    * @Description: TODO  
    * @author xueyunqing 
    * @date 2018年12月3日   
    *
 */
public class Notice {
	private int id;
	private String nTime;
	private String nBody;
	private int userId;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getnTime() {
		return nTime;
	}

	public void setnTime(String nTime) {
		this.nTime = nTime;
	}

	public String getnBody() {
		return nBody;
	}

	public void setnBody(String nBody) {
		this.nBody = nBody;
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

}
