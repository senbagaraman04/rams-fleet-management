// package org.rfms.dao;

// import java.util.List;

// import org.rfms.entity.Vehicle;
// import org.rfms.entity.Driver;
// import org.rfms.repository.DriverRepository;
// import org.rfms.repository.VehicleRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Repository;

// @Repository
// public class DriverDAO {

// 	@Autowired
// 	private DriverRepository driverRepository;

// 	public List<Driver> get() {
// 		return driverRepository.findAll();
// 	}

// 	public Driver save(Driver student) {
// 		return driverRepository.save(student);
// 	}

// 	public void delete(int id) {
// 	    driverRepository.deleteById(id);
// 	}
// }
