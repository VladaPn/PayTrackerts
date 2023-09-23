console.log('test');

let greet : Function;

greet = ()=>{
    console.log("Hello from func");
}

//greet = "hello"

const add = (a:number,b:number,c?:number|string) =>{
    console.log(a+b);
}

add(10,15);

const minus = (a:number,b:number)=>{
    return a+b;
}
let result = minus(10,7);

const logDetail = (uid:string | number, item:string)=>{
    console.log(`${item} has uid of ${uid}`);
}
const greet2 = (user:{name:string, uid:string | number})=>{
    console.log(`${user.name} has ${user.uid}`)
}

type StringOrNum = string | number;

let calc : (a:number, b:number,c:string)=>number;
calc = (numOne:number,numTwo:number, operation:string)=>{
    if (operation==="add"){
        return numOne+numTwo;
    }else if(operation==="diff"){
        return numOne-numTwo;
    }else{
        return numOne*numTwo;
    }
}