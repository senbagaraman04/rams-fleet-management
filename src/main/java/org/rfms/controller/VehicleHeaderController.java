package org.rfms.controller;

import java.util.ArrayList;
import java.util.List;

import org.rfms.repository.SqlCurdRepository;
import org.rfms.repository.TableHeaderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * RestController Class to for Vehicle Header Part
 * 
 * @author Senbagaraman Manoharan
 */

@RestController
public class VehicleHeaderController
{
    @Autowired
    public SqlCurdRepository serviceCrud;
    
    /**
     * Gets the full data for the vehicle header
     */
    @GetMapping("/getVehicleHeaderDetails")
    public TableHeaderDetails returnHeaderDetails() {
        System.out.println("Reached return Header Details Method");
        
        TableHeaderDetails tableHeaderDetails = new TableHeaderDetails();
        
        int totalCount = serviceCrud.findTotalVehicles();
        
        int kilometerCovered = serviceCrud.kilometerCovered();
        System.out.println(kilometerCovered);
        tableHeaderDetails.setTotalVehicles(totalCount);
        tableHeaderDetails.setKmCovered(kilometerCovered);
        
        
        System.out.println("Returned List<TableHeaderDetails>, leaving the method");
        
        return tableHeaderDetails;
    }
}
