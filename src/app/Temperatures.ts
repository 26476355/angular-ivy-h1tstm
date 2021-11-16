export interface temperature{
  date : Date;
  temp : number;
  humidity:number;
  windspeed : number;
  safe: boolean
  Time:string
 }
 
 export const temperatures = [{
   date:"2020-11-05",
   Time : "22:00:00.000+0000",
   temp:20.0,
   humidity:30,
   windSpeed:300,
   safe:true
 },
 {
          date:"2020-11-06",
          Time:"22:00:00.000+0000",
          temp:40.0,
          humidity:10,
          windSpeed:300,
          safe:true
 },
 {
   date:"2020-11-07",
   Time:"22:00:00.000+0000",
          temp:50.0,
          humidity:30,
          windSpeed:300,
          safe:true
 },
 {
   date:"2020-11-08",
   Time:"22:00:00.000+0000",
   temp:90.0,
   humidity:60,
   windSpeed:6000,
   safe:true
 },
 {
   date:"2020-11-09",
   Time:"22:00:00.000+0000",
          temp:770.0,
          humidity:100,
          windSpeed:8900,
          safe:false
 },
 {
   
   date:"2020-11-10",
   Time:"22:00:00.000+0000",
   temp:220.0,
   humidity:30,
   windSpeed:3003,
   safe:false
 }
 ];