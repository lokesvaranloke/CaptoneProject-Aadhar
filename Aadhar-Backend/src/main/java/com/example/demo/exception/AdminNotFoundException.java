package com.example.demo.exception;

public class AdminNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public AdminNotFoundException(int id) {
		super("Admin Not Found with "+id +" Please Provide Correct Details");
	}

}
