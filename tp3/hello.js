var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//exercice 1
console.log("Hello TypeScript!");
//exercice 2
//variable
var Name;
var age;
var isAdmin;
//array
var scores = [];
//tuple
var etudiant;
//enum
var role;
(function (role) {
    role["user"] = "USER";
    role["admin"] = "ADMIN";
    role["SuperAdmin"] = "SUPERADMIN";
})(role || (role = {}));
;
//exercice 3
//1.
var id;
//4.
var value = "bonjour ^^";
if (typeof value == "string") {
    var len = value.length;
    console.log(len);
}
;
var user1 = {
    id: 1,
    name: "jalel",
    isAdmin: false
};
//exercice 5
function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age === undefined) {
        console.log("bonjour ".concat(name));
    }
    else {
        console.log("bonjour ".concat(name, ", tu as ").concat(age, " ans"));
    }
}
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    var p = 1;
    for (var i = 0; i < exp; i++) {
        p = p * base;
    }
    return p;
}
function combine(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    throw new Error("Arguments must be both numbers or both strings");
}
//exercice 6
//1.
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        console.log("greetings ".concat(this.name, ",tu as ").concat(this.age));
    };
    return person;
}());
//2.
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return student;
}(person));
//3.
var shape = /** @class */ (function () {
    function shape() {
    }
    return shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(shape));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}(shape));
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " is driving"));
    };
    return Car;
}());
