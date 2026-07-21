let x=1;
let y=2;
let z=3;

x=y;
y=z;
z=x;

console.log(x,y,z); //2,3,2 9(ex.1)


function grade(score){
let ret;

if(score >= 80){
    ret = "D";
}else if(score >= 50){
    ret = "P";
}else {
    ret = "F";
}
return ret;
}

console.log(grade(32)); // (ec.2)


let calLeapYear = (num) => {
    let leapnum;
    if(num%400==0){
      leapnum= "It is leapyear";  
      return leapnum;
    }else if ((num%100 !=0) && (num%4==0)){
      leapnum= "It is leapyear";  
      return leapnum;
    }else{
       leapnum="It is not leapyear";
      return leapnum;
    }
}
console.log(calLeapYear(1));