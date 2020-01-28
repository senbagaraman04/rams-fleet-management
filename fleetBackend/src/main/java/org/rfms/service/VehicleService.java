package org.rfms.service;

import java.util.List;

import org.rfms.dao.VehicleDAO;
import org.rfms.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

	@Autowired
	private VehicleDAO studentDAO;

	public List<Vehicle> get() {
		return studentDAO.get();
	}

	public Vehicle save(Vehicle student) {
		return studentDAO.save(student);
	}

	public void delete(int id) {
		studentDAO.delete(id);
	}
}
