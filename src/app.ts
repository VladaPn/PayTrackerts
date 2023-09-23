//console.log("evega app");
//const anchor = document.querySelector('a')!;
//console.log(anchor.href);

//const form = document.querySelector('form')!;

//class
//import { Payment } from "./classes/payment.js";
//import { Invoice } from "./classes/invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

class Invoice implements HasFormatter{
  constructor(
      readonly client:string,
      private details:string,
      public amount:number,
  ){}
  format(){
      return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}


class Payment implements HasFormatter{
  constructor(
      readonly recipient:string,
      private details:string,
      public amount:number,
  ){}
  format(){
      return `${this.recipient} owes ${this.amount} for ${this.details}`;
  }
}

class ListTemplate{
  constructor(
    private container:HTMLUListElement
  ){}

  render(item:HasFormatter, heading:string,pos:'start'|'end'){
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText=heading;

    li.append(h4);

    const p = document.createElement('p');
    p.innerText=item.format();

    li.append(p);

    if(pos==='start'){
      this.container.prepend(li);
    }else{
      this.container.append(li);
    }
  }
}

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne = new Invoice('yoshi','web',250);
docTwo = new Payment('mario', 'plumbing',200);

let docs : HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


interface isPerson{
  name: string;
  age:number;
  speak(a:string):void;
  spend(a:number):number;
}

const me:isPerson={
  name:"Vlada",
  age:27,
  speak(a:string):void{
    console.log(a)
  },
  spend(a:number):number{
    return a;
  }
}
console.log(me);

let someone : isPerson;

const greetPerson = (person:isPerson)=>{
console.log("Hello",person.name)
}
greetPerson(me);

//class Invoice {
  //readonly client:string;
  //private details:string;
  //public amount:number;

  //constructor(
   // readonly client:string,
    // private details:string,
     // public amount:number
  //){
    
  //}

  //format(){
  //  return `${this.client} owes £${this.amount} for ${this.details}`;
  //}
//}

const invOne = new Invoice('mario','work on website',50);
const invTwo = new Invoice('luigi','work on luigi website',250);

let invoices:Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
  console.log(inv.client,inv.amount,inv.format())
});


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement; 
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();

  let doc:HasFormatter;
  if(type.value==='invoice'){
    doc= new Invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
  }

  list.render(doc,type.value,'end');
  
})
const addUID = <T>(obj:T)=>{
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid}
}

let docJedan = addUID({name:"yoshi", age:40})
let docDva = addUID("hello")

//console.log(docJedan);
//console.log(docDva);

interface Resource<T> {
  uid:Number;
  resourceName:string;
  data:T;
}