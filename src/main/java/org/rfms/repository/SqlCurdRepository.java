package org.rfms.repository;

 import org.rfms.entity.TableHeaderDetails;
//
 import org.springframework.data.jpa.repository.Query;
 import org.springframework.data.repository.CrudRepository;
 

public interface SqlCurdRepository extends CrudRepository<TableHeaderDetails, Long>
{

 
   @Query( value = "SELECT count(vehicleNumber)  FROM vehicle",nativeQuery=true)
    int findTotalVehicles();
  
  
    @Query( value = "SELECT sum(totalMeter)  FROM vehicle",nativeQuery=true)
    int kilometerCovered();
    
 }
