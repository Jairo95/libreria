import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map';

import {Book} from '../models/Book';

@Injectable()
export class BookService {

  url: string = 'localhost:1337';

  constructor(
    private http: Http
  ) { }


  getBooks():any{
    return this.http.get("http://localhost:1337/books");
  }

}
