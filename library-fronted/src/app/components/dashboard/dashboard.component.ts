import { Component, OnInit } from '@angular/core';

import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';
import {Author} from '../../models/Author';
import {Category} from '../../models/Category';
import {Editorial} from '../../models/Editorial';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  categories: Category[] = [];
  editoriales: Editorial[] = [];
  authors: Author[] = [];
  idBook: number;
  nameBook: string;
  descriptionBook: string;
  versionBook: string;
  datePublicationBook: Date;
  isbn: string;
  codeCategory: number;
  codeEditorial: number;
  codeAuthor: number;
  status: string = '1';

  constructor(
    private bookService: BookService
  ) {

 }

  ngOnInit(
    ) {
      console.log("Project: ");
      this.getBooks();
      this.getAuthors();
      this.getCategories();
      this.getEditorials();
  }


  getBooks(){
    console.log("Entra?");
    this.bookService.getBooks().subscribe(
                (res:any) => {
                  console.log("Response: ",res.json());
                  this.books = res.json().books as Book[];
                  console.log("Books: ", this.books);
                },
                (error) => {
                  console.log("Error cargando libros: ",error);
                }
            );
  }

  getCategories(){
    console.log("Entra?");
    this.bookService.getCategories().subscribe(
                (res:any) => {
                  console.log("Response: ",res.json());
                  this.categories = res.json().categories as Category[];
                  console.log("categories: ", this.categories);
                },
                (error) => {
                  console.log("Error cargando categorias: ",error);
                }
            );
  }

  getEditorials(){
    console.log("Entra?");
    this.bookService.getEditorials().subscribe(
                (res:any) => {
                  console.log("Response: ",res.json());
                  this.editoriales = res.json().editorials as Editorial[];
                  console.log("editorials: ", this.editoriales);
                },
                (error) => {
                  console.log("Error cargando editoriales: ",error);
                }
            );
  }

  getAuthors(){
    console.log("Entra?");
    this.bookService.getAuthors().subscribe(
                (res:any) => {
                  console.log("Response: ",res.json());
                  this.authors = res.json().authors as Author[];
                  console.log("Authors: ", this.authors);
                },
                (error) => {
                  console.log("Error cargando autores: ",error);
                }
            );
  }

  downloadBook(){
    this.bookService.downloadBook(this.idBook).
    subscribe(
      (res) => {
        console.log("Respuesta componente: ", res);
        var fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      },
      (error) => {
        console.log("Error pdf", error);
      });

  }

  downloadBookId(book: any){
    this.bookService.downloadBook(book.id).
    subscribe(
      (res) => {
        console.log("Respuesta componente: ", res);
        var fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      },
      (error) => {
        console.log("Error pdf", error);
      });
  }

}
