package com.example.demo.exception;

public class CitizenNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CitizenNotFoundException(int id) {
		super("Citizen Not Found with "+id +" Please Provide Correct Details");
	}
}
