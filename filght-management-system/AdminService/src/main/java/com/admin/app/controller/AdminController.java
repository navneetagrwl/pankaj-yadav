package com.admin.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.admin.app.entity.Admin;
import com.admin.app.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/api/v1.0/flight/admin/signup")
	public ResponseEntity<Admin> signUp(@RequestBody Admin adminDetails){
		adminService.signUpAdmin(adminDetails);
		return null;
	}
	
	@PostMapping("/api/v1.0/flight/admin/signin")
	public String signIn(@RequestParam Map<String,String> allParams){
		String authToken = adminService.signInAdmin(allParams);
		return authToken;
	}

}
