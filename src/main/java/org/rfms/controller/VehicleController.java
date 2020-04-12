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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/vehicle")
public class VehicleController {

	@Autowired
	private VehicleService vehicleService;

	@GetMapping("get")
	public ResponseEntity<Response> get() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.get(), new Date()));
	}

	@PostMapping("save")
	public ResponseEntity<Response> save(@RequestBody Vehicle veh) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.save(veh), new Date()));
	}

	@PutMapping("update")
	public ResponseEntity<Response> update(@RequestBody Vehicle veh) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(vehicleService.save(veh), new Date()));
	}

	@DeleteMapping("delete")
	public ResponseEntity<Response> delete(@RequestParam("id") int id) {
	    vehicleService.delete(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(true, new Date()));
	}
}
