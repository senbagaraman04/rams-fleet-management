package org.rfms.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "driver")
public class Driver implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String driverName; 
    private String driverNumber;
    private String email;
    private String batchNumber;
    private String licenseNumber;
    private String expiryDate;
    
    
    /**
     * @return the id
     */
    public int getId()
    {
        return id;
    }
    /**
     * @param id the id to set
     */
    public void setId(int id)
    {
        this.id = id;
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
     * @return the email
     */
    public String getEmail()
    {
        return email;
    }
    /**
     * @param email the email to set
     */
    public void setEmail(String email)
    {
        this.email = email;
    }
    /**
     * @return the batchNumber
     */
    public String getBatchNumber()
    {
        return batchNumber;
    }
    /**
     * @param batchNumber the batchNumber to set
     */
    public void setBatchNumber(String batchNumber)
    {
        this.batchNumber = batchNumber;
    }
    /**
     * @return the licenseNumber
     */
    public String getLicenseNumber()
    {
        return licenseNumber;
    }
    /**
     * @param licenseNumber the licenseNumber to set
     */
    public void setLicenseNumber(String licenseNumber)
    {
        this.licenseNumber = licenseNumber;
    }
    /**
     * @return the expiryDate
     */
    public String getExpiryDate()
    {
        return expiryDate;
    }
    /**
     * @param expiryDate the expiryDate to set
     */
    public void setExpiryDate(String expiryDate)
    {
        this.expiryDate = expiryDate;
    }

    
    
    
}
