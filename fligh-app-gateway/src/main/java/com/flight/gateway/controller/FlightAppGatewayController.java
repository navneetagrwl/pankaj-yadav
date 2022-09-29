package com.flight.gateway.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.admin.app.entity.Flight;

@RestController
public class FlightAppGatewayController {
	
	@Autowired
	RestTemplate restTemplate;
	
	/*
	 * @GetMapping("/flights/{flightNumber}") public String
	 * getStudents(@PathVariable Integer flightNumber) {
	 * System.out.println("getting flight details for "+flightNumber);
	 * 
	 * String response = restTemplate.exchange(
	 * "http://flight-admin-service//api/v1.0/flight/airline/{flightnumber}",
	 * HttpMethod.GET ,null,new ParameterizedTypeReference<String>()
	 * {},flightNumber).getBody();
	 * 
	 * System.out.println("Response received as : "+response);
	 * 
	 * return "Flight number "+flightNumber+ "\n flight details "+response; }
	 */
	
	@GetMapping("/flight/{flightNumber}")
	public ResponseEntity<Flight> getFlightdetailById(@PathVariable Integer flightNumber) {
		System.out.println("getting flight details for "+flightNumber);
		
		ResponseEntity<Flight> response = restTemplate.exchange("http://flight-admin-service/api/v1.0/flight/airline/{flightnumber}", HttpMethod.GET
				,null,new ParameterizedTypeReference<Flight>() {},flightNumber);
		
		System.out.println("Response received as : "+response);
		return response;
	}
	
	@GetMapping("/flight")
	public ResponseEntity<List<Flight>> getFlights() {
		ResponseEntity<List<Flight>> response = restTemplate.exchange("http://flight-admin-service/api/v1.0/flight/airline/list", HttpMethod.GET
				,null,new ParameterizedTypeReference<List<Flight>>() {});
		
		System.out.println("Response received as : "+response);
		return response;
	}
	
	@PostMapping("/flight/register")
	public ResponseEntity<Flight> registerFlight(@RequestBody Flight flight) {
		HttpEntity<Flight> requestBody = new HttpEntity<Flight>(flight);
		System.out.println("requestBody:   "+requestBody.getBody());
		ResponseEntity<Flight> response = restTemplate.exchange("http://flight-admin-service/api/v1.0/flight/airline/register", HttpMethod.POST
				,requestBody,new ParameterizedTypeReference<Flight>() {});
		
		System.out.println("Response received as : "+response.getBody());
		return response;
	}
	
	
	@GetMapping("/flight")
	public ResponseEntity<List<Flight>> searchFlightsByDestination(@RequestParam Map<String,String> allParams) {
		
		/*
		 * Map<String, String> params = new HashMap<>(); params.put("flightSource",
		 * flightSource); params.put("email", email);
		 * 
		 * HttpEntity<String> response = restOperations.exchange( urlTemplate,
		 * HttpMethod.GET, entity, String.class, params );
		 */
		//String result = restTemplate.getForObject("http://example.com/hotels?state={state}&country={country}", String.class,"NY","USA");
		ResponseEntity<List<Flight>> response = restTemplate.exchange("http://localhost:8083/api/v1.0/flight/search?source={source}&destination={destination}",
				HttpMethod.GET,null,new ParameterizedTypeReference<List<Flight>>() {},"delhi","mumbai");
		
		System.out.println("Response received as : "+response.getBody());
		return response;
	}

}
