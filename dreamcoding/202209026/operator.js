// 1. string concatenation
console.log('my'+ 'cat');
console.log(`string literals: 1+2`)


// 2. numeric operators
console.log(1+1); 


// 3. increment  and ddecrenent oprators
let counter = 2;
const preIncrement = ++counter;

// 4. assingment operators
let x = 3;
let y = 5;
// x += y = 

// 6. logical operators : ||(or), &&, !
const value1 = true;
const value2 = 4 < 2;

function check(){
  for(let i = 0; i < 10; i++){
    //wasting time
    console.log('^^*');
  }
  return true;
}

// 7. equlity

// 8. conditional operators : if
const name = 'dif';
console.log('welcome');
if(name ==='difjl'){
 console.log() 
}

const brower = 'IE';
switch (brower){

}

// 11. loops

let i = 3;
while (i>0){
  console.log(`while : ${i}`);
  i--;
}

// do {
//   console.log(`do while: ${i}`);
//   i--;

// }

for(let i = 0; i<=10; i++){
  if(i%2 == 0){
   continue;
  }
  console.log(`q1. ${i}`);
}

for(let i = 0; i<11; i++){
  if(i>8){
    break;
  }
  console.log(`${i}`);
}