
  package org.rfms.controller;
  
  import static org.junit.Assert.*;
  
  import org.junit.Test;
  import org.junit.runner.RunWith;
  import org.mockito.InjectMocks;
  import org.mockito.Mock;
  import org.mockito.Mockito;
import org.rfms.entity.TableHeaderDetails;
import org.rfms.repository.SqlCurdRepository;
import org.springframework.boot.test.context.SpringBootTest;
  import org.springframework.test.context.ActiveProfiles;
  import org.springframework.test.context.junit4.SpringRunner;
  
  
  @RunWith(SpringRunner.class)
  
  @SpringBootTest
  
  @ActiveProfiles({ "test" })
  public class VehicleHeaderDetailsTest
  {
  
  @InjectMocks
  public VehicleHeaderController vehicleHeader;
  
  @Mock
  public SqlCurdRepository serviceCrud;
  
  //Test method for returnHeaderDetails method
  
  
  @Test
  public void tableDetailsHeader() throws Exception {
  
  //ARRANGE
  
  //Create an object for TableHeader
  TableHeaderDetails tableHeader = new TableHeaderDetails();
  //Create an object for VehicleHeaderController
 // VehicleHeaderController vehicleHeader = new VehicleHeaderController();
  
  
  
  Mockito.when(serviceCrud.findTotalVehicles()).thenReturn(10);
  Mockito.when(serviceCrud.kilometerCovered()).thenReturn(100);
  
  
  //ACT
  tableHeader = vehicleHeader.returnHeaderDetails();
  
  
  
  //ASSERT
  assertNotNull(tableHeader);
  assertEquals(10, tableHeader.getTotalVehicles());
  assertEquals(100.0, tableHeader.getKmCovered(), 0.01);
  
  }
  
  
  }
 