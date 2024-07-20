


export class Person{
    // public name:string;
    // private address:string;

    constructor(public name:string, 
        private address:string='No address'
    ){
        this.name=name;
        this.address=address;
    }
}

// export class Hero extends Person{
    
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string,
//     ){
//             super(realName,'New York');
//     }
// }

export class Hero{
    
    // public person:Person;

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
           
    }
}
const person=new Person('Tony stark','New York');
const ironMan = new Hero('IronMan',45,'Tony', person);



console.log(ironMan)