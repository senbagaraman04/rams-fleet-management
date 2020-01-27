package com.rfms.fleetmanagement.model;



/*
 * 
 * Vehicle Detail class: contains all the necessary fields related to vehicle details class.
 */


public class VehicleDetail
{
 
    
    private String vehicleName;
    private String vehicleNumber;
    private String driverName; 
    private String driverNumber;
    private String dateStart; 
    private int  startingMeter; 
    private int  endingMeter;
    private int  totalMeter;
    private String cityOfTravel;
    
    /**
     * @return the vehicleName
     */
    public String getVehicleName()
    {
        return vehicleName;
    }
    /**
     * @param vehicleName the vehicleName to set
     */
    public void setVehicleName(String vehicleName)
    {
        this.vehicleName = vehicleName;
    }
    /**
     * @return the vehicleNumber
     */
    public String getVehicleNumber()
    {
        return vehicleNumber;
    }
    /**
     * @param vehicleNumber the vehicleNumber to set
     */
    public void setVehicleNumber(String vehicleNumber)
    {
        this.vehicleNumber = vehicleNumber;
    }
    /**
     * @return the driverName
     */
    public String getDriverName()
    {
        return driverName;
    }
    /**
     * @param driverName the driverName to set
     */
    public void setDriverName(String driverName)
    {
        this.driverName = driverName;
    }
    /**
     * @return the driverNumber
     */
    public String getDriverNumber()
    {
        return driverNumber;
    }
    /**
     * @param driverNumber the driverNumber to set
     */
    public void setDriverNumber(String driverNumber)
    {
        this.driverNumber = driverNumber;
    }
    /**
     * @return the dateStart
     */
    public String getDateStart()
    {
        return dateStart;
    }
    /**
     * @param dateStart the dateStart to set
     */
    public void setDateStart(String dateStart)
    {
        this.dateStart = dateStart;
    }
    /**
     * @return the startingMeter
     */
    public int getStartingMeter()
    {
        return startingMeter;
    }
    /**
     * @param startingMeter the startingMeter to set
     */
    public void setStartingMeter(int startingMeter)
    {
        this.startingMeter = startingMeter;
    }
    /**
     * @return the endingMeter
     */
    public int getEndingMeter()
    {
        return endingMeter;
    }
    /**
     * @param endingMeter the endingMeter to set
     */
    public void setEndingMeter(int endingMeter)
    {
        this.endingMeter = endingMeter;
    }
    /**
     * @return the totalMeter
     */
    public int getTotalMeter()
    {
        return totalMeter;
    }
    /**
     * @param totalMeter the totalMeter to set
     */
    public void setTotalMeter()
    {
        this.totalMeter = getEndingMeter() - getStartingMeter();
    }
    /**
     * @return the cityOfTravel
     */
    public String getCityOfTravel()
    {
        return cityOfTravel;
    }
    /**
     * @param cityOfTravel the cityOfTravel to set
     */
    public void setCityOfTravel(String cityOfTravel)
    {
        this.cityOfTravel = cityOfTravel;
    }
  
    
}
