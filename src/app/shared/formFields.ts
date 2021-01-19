/**
 * 
 * Easily Identifieable name should be followed, which can be used for testing also
 */

export interface VEHICLE {  
     id : number;
    vehicleNumber: string; 
    vehicleName: string; 
    dateStart: string; 
    cityOfTravel:string;
    driverName: string;
    driverNumber: number;
    startingMeter: number; 
    endingMeter: number;
    totalMeter: number; 
  }


  export interface DRIVER {
    id: number;
    driverName: string;
    driverNumber:string;
    batchNumber:string;
    licenseNumber: string;
    expiryDateLicense: string;
    expiryDateBatch:string;
    
  }