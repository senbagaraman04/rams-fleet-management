package org.rfms.controller;

import java.util.Date;

import org.rfms.entity.Vehicle;
import org.rfms.model.Response;
import org.rfms.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VehicleController {

	@Autowired
	private VehicleService vehicleService;

	@GetMapping("/vehicle")
	public ResponseEntity<Response> get() {
	    System.out.println("Get Method of Vehicle Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.get(), new Date()));
	}

	@PostMapping
	public ResponseEntity<Response> save(@RequestBody Vehicle veh) {
	    System.out.println("Save Method of Vehicle Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.save(veh), new Date()));
	}

	@PutMapping
	public ResponseEntity<Response> update(@RequestBody Vehicle veh) {
	    
	    System.out.println("Update Method of Vehicle Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.save(veh), new Date()));
	}

	@DeleteMapping
	public ResponseEntity<Response> delete(@RequestParam("id") int id) {
	    vehicleService.delete(id);
	       System.out.println("Delete Method of Vehicle Controller");

		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(true, new Date()));
	}
}
