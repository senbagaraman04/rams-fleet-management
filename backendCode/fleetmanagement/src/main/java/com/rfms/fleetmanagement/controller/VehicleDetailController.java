package com.rfms.fleetmanagement.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rfms.fleetmanagement.model.VehicleDetail;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VehicleDetailController
{
    private List<VehicleDetail> vehicles = createList();
    
    @RequestMapping(value = "/employees", method = RequestMethod.GET, produces = "application/json")
    public List<VehicleDetail> firstPage() {
        return vehicles;
    }

    private List<VehicleDetail> createList()
    {
        List<VehicleDetail> temporaryVehicleList = new ArrayList<>();
        VehicleDetail vDetail = new VehicleDetail();
        vDetail.setCityOfTravel("Salem");
        vDetail.setDateStart("12/12/12");
        vDetail.setDriverName("Raman");
        vDetail.setDriverNumber("0123456789");
        vDetail.setStartingMeter(100);
        vDetail.setEndingMeter(200);
        vDetail.setVehicleName("Ace");
        vDetail.setVehicleNumber("ST 12 ST 1234");
        vDetail.setTotalMeter();
        temporaryVehicleList.add(vDetail);
        
        VehicleDetail vDetail2 = new VehicleDetail();
        vDetail2.setCityOfTravel("Chennai");
        vDetail2.setDateStart("12/12/12");
        vDetail2.setDriverName("Raman");
        vDetail2.setDriverNumber("01023456789");
        vDetail2.setStartingMeter(300);
        vDetail2.setEndingMeter(900);
        vDetail2.setVehicleName("Ace 2");
        vDetail2.setVehicleNumber("ST 13 ST 1235");
        vDetail2.setTotalMeter();
        temporaryVehicleList.add(vDetail2);
        
        return temporaryVehicleList;
    }
}
