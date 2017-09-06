import { Component, OnInit } from '@angular/core';

import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(
    ) {
      console.log("Project: ");
      this.getBooks();
  }


  getBooks(){
    console.log("Entra?");
    this.bookService.getBooks().subscribe(
                (res:any) => {
                  console.log("Response: ",res.json());
                  this.books = res.json() as Book[];
                  console.log("Books: ", this.books);
                },
                (error) => {
                  console.log("Error: ",error);
                }
            );
  }

}
