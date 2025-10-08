import { Library } from "./services/library";
import { Book } from "./models/book";

const library = new Library();

const book1: Book = { id: 1, title: "TS Avancé", author: "Lassoued", year: 2024, available: true };
library.addBook(book1);
library.borrow(1);

console.log(library.search("TS"));