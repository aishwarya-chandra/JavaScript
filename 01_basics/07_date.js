let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let date = new Date(2023, 0, 23) //month indexing from 0
// console.log(date.toDateString());

// let newdate = new Date(2023, 0, 23, 5, 3)
// console.log(newdate.toLocaleString());

// let date1 = new Date("2023-01-14")
// console.log(date1.toLocaleString());

let date2 = new Date("01-14-2023")
// console.log(date2.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp); //value in miliseconds from 1970 to now
// console.log(date2.getTime()); //value in miliseconds from 1970 to 1-14-23
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //0 index month
console.log(newDate.getDay() + 1); //0 index days

newDate.toLocaleDateString('default',{
    weekday: "long"
})



