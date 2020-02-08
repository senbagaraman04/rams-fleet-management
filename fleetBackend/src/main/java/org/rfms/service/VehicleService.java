package org.rfms.service;

import java.util.List;

import org.rfms.dao.VehicleDAO;
import org.rfms.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

	@Autowired
	private VehicleDAO vehcileDAO;

	public List<Vehicle> get() {
		return vehcileDAO.get();
	}

	public Vehicle save(Vehicle vehicle) {
		return vehcileDAO.save(vehicle);
	}

	public void delete(int id) {
	    vehcileDAO.delete(id);
	}
}
