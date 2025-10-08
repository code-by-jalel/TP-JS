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
function add(a:number,b:number):number{
    return a+b;
}
function greet(name:string,age ?:number):void{
    if(age===undefined){
        console.log(`bonjour ${name}`);
    }else{
        console.log(`bonjour ${name}, tu as ${age} ans`);
    }
}
function power(base:number,exp:number=2){
    let p=1;
    for(var i =0;i<exp;i++){
        p=p*base;
    }
    return p;
}
function combine(a:number|string,b:number|string):number|string{
    if(typeof a =="number" && typeof b == "number"){
        return a+b;
    }
    if(typeof a =="string" && typeof b == "string"){
        return a+b;
    }
    throw new Error("Arguments must be both numbers or both strings");
}
//exercice 6
//1.
class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public greet():void{
        console.log(`greetings ${this.name},tu as ${this.age}`);
    }   
}
//2.
class student extends person{
    school:string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
}
//3.
abstract class shape{
    public abstract area():number;
}
class Rectangle extends shape {
    width:number;
    height:number;
    public constructor(width: number, height: number) {
        super();
        this.width=width;
        this.height=height;
    }
    public area(): number {
        return this.width * this.height;
    }
}
class circle extends shape{
    radius:number;
    public constructor(radius:number){
        super();
        this.radius=radius;
    }
    public area():number{
        return Math.PI*this.radius*this.radius;
    }
}
//4.
interface Drivable {
    drive(): void;
}
class Car implements Drivable {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    drive(): void {
        console.log(`${this.brand} is driving`);
    }
}
//exercice 7
// 1.
function identity<T>(value: T): T {
  return value;
}
// 2.
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
// 3.
class Repository<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  getAll(): T[] {
    return this.items;
  }
}
// 4.
interface ApiResponse<T> {
  data: T;
  error?: string;
}
//exercice 8
import { add } from "./math";

console.log(add(5, 3));

import type { Role } from "./types";

const role: Role = "User";
console.log(role);