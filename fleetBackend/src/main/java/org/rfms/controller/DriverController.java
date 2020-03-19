package org.rfms.controller;

import java.util.Date;

import org.rfms.entity.Driver;
import org.rfms.model.Response;
import org.rfms.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@Controller("/driver")
public class DriverController {

	@Autowired
	private DriverService driverService;

	@GetMapping
	public ResponseEntity<Response> get() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.get(), new Date()));
	}

	@PostMapping
	public ResponseEntity<Response> save(@RequestBody Driver driv) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.save(driv), new Date()));
	}

	@PutMapping
	public ResponseEntity<Response> update(@RequestBody Driver driv) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.save(driv), new Date()));
	}

	@DeleteMapping
	public ResponseEntity<Response> delete(@RequestParam("id") int id) {
	    driverService.delete(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(true, new Date()));
	}
}
