package org.rfms.dao;

import java.util.List;

import org.rfms.entity.Vehicle;
import org.rfms.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class VehicleDAO {

	@Autowired
	private VehicleRepository vehicleRepository;

	public List<Vehicle> get() {
		return vehicleRepository.findAll();
	}

	public Vehicle save(Vehicle student) {
		return vehicleRepository.save(student);
	}

	public void delete(int id) {
	    vehicleRepository.deleteById(id);
	}
}
