package com.weixin.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * 
    * @ClassName: Classes  
    * @Description: TODO  
    * @author xueyunqing
    * @date 2018年12月3日 
    *
 */
@Entity
@Table(name="tbl_classes")
public class Classes {
	private int classId;
	private int grade;
	private int classInt;
	private Schools school;
	private Set<Activity> activities = new HashSet<>();
	private Set<Check> checks = new HashSet<>();
	private Set<Homework> homeworks = new HashSet<>();
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public int getClassInt() {
		return classInt;
	}

	public void setClassInt(int classInt) {
		this.classInt = classInt;
	}

	@ManyToOne
	@JoinColumn(name="schoolId")
	public Schools getSchool() {
		return school;
	}

	public void setSchool(Schools school) {
		this.school = school;
	}

	@OneToMany(mappedBy="classs",targetEntity=Activity.class)
	public Set<Activity> getActivities() {
		return activities;
	}

	public void setActivities(Set<Activity> activities) {
		this.activities = activities;
	}

	@OneToMany(mappedBy="classs",targetEntity=Check.class)
	public Set<Check> getChecks() {
		return checks;
	}

	public void setChecks(Set<Check> checks) {
		this.checks = checks;
	}

	@OneToMany(mappedBy="classs",targetEntity=Homework.class)
	public Set<Homework> getHomeworks() {
		return homeworks;
	}

	public void setHomeworks(Set<Homework> homeworks) {
		this.homeworks = homeworks;
	}

	
	

}