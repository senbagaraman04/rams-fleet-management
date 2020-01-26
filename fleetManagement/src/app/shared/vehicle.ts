export interface VEHICLE {  
    vehicleNumber: number; //Last four number is enough
    vehicleName: string; //Easily Identifieable name, which can be used for testing also
    dateOfEntry: string; 
    city:string;
    driverName: string;
    driverNumber: number;
    startingMeter: number; 
    endingMeter: number;
    totalToday: number; 
  }