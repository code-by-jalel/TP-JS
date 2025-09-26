
// Exercice 1 
var x = 10;     
let y = 20;    
const z = 30; 
{
var x = 100; 
let y = 200; 
const z = 300;
console.log("dans le bloc :", x, y, z);
}

console.log("pas dans le bloc :", x, y, z);

//question piège
//erreur : Assignment to constant variable.

//exercice 2
//version fléchée
const sommme = (a, b) => {
    return a + b;
;

//return implicite
const somme2 = (a, b) => a + b;

console.log(somme2(5, 7));

//exercice 3
const user = { name: "jalel", age: 20, city: "Tunis" };
const { name, age } = user;
console.log(name, age); 

//exercice 4 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const fusion = [...arr1, ...arr2];
console.log(fusion); 

const obj1 = { a: 1, b: 2 };
const copie = { ...obj1, b: 99 }; 
console.log(copie);

// Exercice 5 
const livre = {
    titre: "harry potter",
    auteur: "jalel ben romdhane",
    annee: 1999,
    output() {
        return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
};

console.log(livre.output());

// Exercice 6 
class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }

    getMention() {
        if (this.note >= 16) return "Très bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "Échec";
    }
}

const e1 = new Etudiant("jalel", 17);
const e2 = new Etudiant("zayd", 12);
const e3 = new Etudiant("bayrem", 8);

console.log(e1.nom, ":", e1.getMention());
console.log(e2.nom, ":", e2.getMention());
console.log(e3.nom, ":", e3.getMention());

//exercice 7 
const notes = [12, 5, 17, 9, 20];

//moyenne
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
console.log("moyenne :", moyenne);

//tri décroissant
const triDesc = [...notes].sort((a, b) => b - a);
console.log("tri décroissant :", triDesc);

//filtre notes
const admis = notes.filter(n => n >= 10);
console.log("notes >= 10 :", admis);
