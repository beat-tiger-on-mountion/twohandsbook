package com.weixin.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Schools  
    * @Description: TODO  
    * @author xueyunqing  
    * @date 2018年12月3日   
    *
 */
@Entity
@Table(name="tbl_schools")
public class Schools {
	private int schoolId;
	private String schoolName;
	private String privince;
	private String city;
	private String county;
	private Set<Classes> classses = new HashSet<>(0);

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(int schoolId) {
		this.schoolId = schoolId;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getPrivince() {
		return privince;
	}

	public void setPrivince(String privince) {
		this.privince = privince;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	@OneToMany(mappedBy="school",targetEntity=Classes.class)
	public Set<Classes> getClassses() {
		return classses;
	}

	public void setClassses(Set<Classes> classses) {
		this.classses = classses;
	}
	

}
