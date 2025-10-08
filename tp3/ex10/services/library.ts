import { Book } from "../models/Book";
import { Repository } from "../utils/Repository";

export class Library {
  private books = new Repository<Book>();

  addBook(book: Book) {
    this.books.add(book);
  }

  removeBook(id: number) {
    this.books.remove(id);
  }

  search(title: string): Book[] {
    return this.books.getAll().filter(b => b.title.includes(title));
  }

  borrow(id: number): void {
    const book = this.books.getAll().find(b => b.id === id);
    if (book && book.available) book.available = false;
  }

  returnBook(id: number): void {
    const book = this.books.getAll().find(b => b.id === id);
    if (book && !book.available) book.available = true;
  }
}
