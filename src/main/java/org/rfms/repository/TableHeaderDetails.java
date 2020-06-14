package org.rfms.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table(name = "students")

/*
 * Contains all the properties to return the data for Vehicle Details Page
 */
public class TableHeaderDetails
{
    
    
    private int totalVehicles;
    private double  kmCovered;
    private int  totalDrivers;
    private double petrolConsumed;
    private int vehicleService;
    private int insuranceRenewal;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    /**
     * @return the totalVehicles
     */
    public int getTotalVehicles()
    {
        return totalVehicles;
    }
    /**
     * @param totalVehicles the totalVehicles to set
     */
    public void setTotalVehicles(int totalVehicles)
    {
        this.totalVehicles = totalVehicles;
    }
    /**
     * @return the kmCovered
     */
    public double getKmCovered()
    {
        return kmCovered;
    }
    /**
     * @param kmCovered the kmCovered to set
     */
    public void setKmCovered(double kmCovered)
    {
        this.kmCovered = kmCovered;
    }
    /**
     * @return the totalDrivers
     */
    public int getTotalDrivers()
    {
        return totalDrivers;
    }
    /**
     * @param totalDrivers the totalDrivers to set
     */
    public void setTotalDrivers(int totalDrivers)
    {
        this.totalDrivers = totalDrivers;
    }
    /**
     * @return the petrolConsumed
     */
    public double getPetrolConsumed()
    {
        return petrolConsumed;
    }
    /**
     * @param petrolConsumed the petrolConsumed to set
     */
    public void setPetrolConsumed(double petrolConsumed)
    {
        this.petrolConsumed = petrolConsumed;
    }
    /**
     * @return the vehicleService
     */
    public int getVehicleService()
    {
        return vehicleService;
    }
    /**
     * @param vehicleService the vehicleService to set
     */
    public void setVehicleService(int vehicleService)
    {
        this.vehicleService = vehicleService;
    }
    /**
     * @return the insuranceRenewal
     */
    public int getInsuranceRenewal()
    {
        return insuranceRenewal;
    }
    /**
     * @param insuranceRenewal the insuranceRenewal to set
     */
    public void setInsuranceRenewal(int insuranceRenewal)
    {
        this.insuranceRenewal = insuranceRenewal;
    }
   
}
