package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.AdminNotFoundException;
import com.example.demo.exception.CitizenNotFoundException;
import com.example.demo.model.Admin;
import com.example.demo.model.Citizen;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.CitizenRepository;



@RestController
@RequestMapping("/aadhar")
public class RestAPIController {

	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	CitizenRepository citizenRepo;
	
	//Admin 
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/admin")
	public  List<Admin> getAllAdmin() {
		return adminRepo.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/admin/{id}")
	public Admin getAdminById(@PathVariable("id") Integer id) {
		Optional<Admin> optionalAdmin = adminRepo.findById(id);
		
		if(optionalAdmin.isEmpty()) {
			throw new AdminNotFoundException(id);
		}
		
		return optionalAdmin.get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/admin")
	public Admin addAdmin(@RequestBody Admin admin) {
		return adminRepo.save(admin);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(value = "/admin")
	public Admin updateAdmin(@RequestBody Admin admin) {
		return adminRepo.save(admin);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(value = "/admin")
	public void deleteAdmin(@PathVariable("id") Integer id) {
		 adminRepo.deleteById(id);
	}
	
	// citizen
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/citizen")
	public List<Citizen> getAllCitizen() {
		return citizenRepo.findAll(); 
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/citizen/{id}")
	public Citizen getCitizenById(@PathVariable("id") Integer id) {
		Optional<Citizen> optionalCitizen = citizenRepo.findById(id);
		
		if(optionalCitizen.isEmpty()) {
			throw new CitizenNotFoundException(id);
		}
		
		return optionalCitizen.get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/citizen")
	public Citizen addCitizen(@RequestBody Citizen citizen) {
		return citizenRepo.save(citizen);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(value = "/citizen")
	public Citizen updateCitizen(@RequestBody Citizen citizen) {
		return citizenRepo.save(citizen);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(value = "/citizen/{id}")
	public void deleteCitizen(@PathVariable("id") Integer id) {
		citizenRepo.deleteById(id);
	}
}
