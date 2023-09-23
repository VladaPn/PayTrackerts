//console.log("evega app");
//const anchor = document.querySelector('a')!;
//console.log(anchor.href);
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes ${this.amount} for ${this.details}`;
    }
}
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web', 250);
docTwo = new Payment('mario', 'plumbing', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: "Vlada",
    age: 27,
    speak(a) {
        console.log(a);
    },
    spend(a) {
        return a;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
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
const invOne = new Invoice('mario', 'work on website', 50);
const invTwo = new Invoice('luigi', 'work on luigi website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docJedan = addUID({ name: "yoshi", age: 40 });
let docDva = addUID("hello");
