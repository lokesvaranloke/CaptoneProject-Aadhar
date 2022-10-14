package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Citizen {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int citizenid;
	private String name;
	private String dob;
	private String emailid;
	private String number;
	private String gender;
	private String address;
	
	public Citizen() {
		
	}
	
	public Citizen(String name, String dob, String emailid, String number, String gender,
			String address) {
		super();
		this.name = name;
		this.dob = dob;
		this.emailid = emailid;
		this.number = number;
		this.gender = gender;
		this.address = address;
	}

	public int getCitizenid() {
		return citizenid;
	}

	public void setCitizenid(int citizenid) {
		this.citizenid = citizenid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
