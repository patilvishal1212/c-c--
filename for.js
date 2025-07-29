// for(let r=1; r<=5; r++){
//     let line = " ";
//     for(let c= 1; c<= r; c++){
//        line += "*";
//     }
//     console.log(line);
    
// }



// let randomnumber = math.floor(wath.random() * 11);

// let userguess = prompt("Guess the number between 1 and 10! ");


// while (randomnumber  = userguess){
//     userguess = prompt("wrong guess, Guess Again!" )
// }

// console.log("You guess the number");




// let message = 'Hello, World!';  // declare and assign
// message = 'Goodbye, World!';    // reassign
// console.log(message);           // print to console



// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 4)); 

// for(let v=1; v<=10; v++){
//     console.log(v);
// }


// let score = 75;

// switch (true) {
//   case (score >= 90):
//     console.log('Excellent');
//     break;
//   case (score >= 70 && score <= 89):
//     console.log('Good');
//     break;
//   case (score >= 50 && score <= 69):
//     console.log('Pass');
//     break;
//   default:
//     console.log('Fail');
// }



function greet1(){
    console.log(this)
}

const obj = {
    name : 'vishu',
    age : 23,
    greet: function (){
        console.log(this);
        

        const innerfunction =() =>{
            console.log(this);
            
        };
        innerfunction();
    },

};

obj.greet();
