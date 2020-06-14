package org.rfms.repository;

 import java.util.List;
 import java.util.Optional;
//
 import org.springframework.data.jpa.repository.Query;
 import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
 

public interface SqlCurdRepository extends CrudRepository<TableHeaderDetails, Long>
{

 
   @Query( value = "SELECT count(vehicle_number)  FROM Student",nativeQuery=true)
    int findTotalVehicles();
    
 }
