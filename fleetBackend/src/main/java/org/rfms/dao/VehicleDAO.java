package org.rfms.dao;

import java.util.List;

import org.rfms.entity.Vehicle;
import org.rfms.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class VehicleDAO {

	@Autowired
	private VehicleRepository studentRepository;

	public List<Vehicle> get() {
		return studentRepository.findAll();
	}

	public Vehicle save(Vehicle student) {
		return studentRepository.save(student);
	}

	public void delete(int id) {
		studentRepository.deleteById(id);
	}
}
