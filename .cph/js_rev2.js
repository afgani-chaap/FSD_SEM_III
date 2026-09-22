let a=10;
let b=10;
console.log(a==b);
console.log(a===b);
console.log(a+b);
console.log(a>5 && a<20);
let marks =75;
if(marks>=90){
    console.log("A");
}
else if (marks>=60){
    console.log("B");
}
else{
    console.log("C");
}
for(let i=0;i<=5;i++){
    console.log(i);
}
let num=0;
while(num<=10){
    console.log(num);
    num+=2;
}

function add(x,y){
    return x+y;
}
console.log(add(5,3));
const greet =(name="guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Uddhav"));

