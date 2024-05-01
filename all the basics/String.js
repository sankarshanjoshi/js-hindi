let name = "sanku"
let surname = "joshi"
console.log(name+" "+surname);//this is primitive

//instead use this
//make use of backtick ``
console.log(`my name is ${name} and my surname is ${surname}`);

//can also use toUpperCase
console.log(`my name is ${name.toUpperCase()} and my surname is ${surname}`);



 
//one more effective way of declaring array is using new keyword
let nameone = new String('haha this is also sankarshan');
console.log(nameone);
//it returns something different as telling it is string 

//some functions related to string
console.log(nameone.length); 
console.log(nameone[0]);
console.log(nameone.charAt(3));
