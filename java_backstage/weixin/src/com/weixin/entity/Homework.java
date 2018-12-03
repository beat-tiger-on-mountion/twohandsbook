package com.weixin.entity;
/**
 * 
    * @ClassName: Homework  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018Äê12ÔÂ3ÈÕ  
    *
 */
public class Homework {
	private int id;
	private String hTime;
	private String hBody;
	private int classId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String gethTime() {
		return hTime;
	}

	public void sethTime(String hTime) {
		this.hTime = hTime;
	}

	public String gethBody() {
		return hBody;
	}

	public void sethBody(String hBody) {
		this.hBody = hBody;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

}
