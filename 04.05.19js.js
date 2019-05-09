'use srict'; 


let persone={
    name: "John",
    age:25,
    isMarried: false
};
 console.log(persone.name);

 //let answer = confirm("Are you here?");
 //console.log(answer);
 
 let answer = prompt("Are you 18?", "Yes");
 console.log(typeof(answer));
 

 let incr = 10,
     decr = 10;

     console.log(++incr);
     console.log(--decr);

     console.log(5%2);
     console.log("2"==2);
     console.log("2"===2);

     let isChecked = true,
         isClose = true;

         console.log(isChecked || isClose);
