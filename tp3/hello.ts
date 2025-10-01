//exercice 1
console.log("Hello TypeScript!");

//exercice 2
//variable
let Name: string;
let age: number;
let isAdmin: boolean;
//array
const scores: number[] = [];
//tuple
let etudiant: [string,number];
//enum
enum role{
    user = "USER",
    admin = "ADMIN",
    SuperAdmin = "SUPERADMIN"
};
//exercice 3
//1.
let id :number | string;
//2.
type A = {
    name:string;
}
type B = {
    age:number;
}
type C = A&B;
//3.
type status = 'pending' | 'done' | 'canceled';
//4.
let value : unknown = "bonjour ^^";
if(typeof value == "string"){
    const len = value.length;
    console.log(len);
}
//exercice 4
interface user {
    id:number;
    name:string;
    email?:string;
    readonly isAdmin:boolean;
};
let user1:user = {
    id:1,
    name:"jalel",
    isAdmin:false
}
interface admin extends user{
    permissions: string[];
}
//exercice 5
