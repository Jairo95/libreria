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

  getCategories():any{
    return this.http.get("http://localhost:1337/categories");
  }

  getEditorials():any{
    return this.http.get("http://localhost:1337/editorials");
  }

  getAuthors():any{
    return this.http.get("http://localhost:1337/authors");
  }

  downloadBook(
    idBook: number
  ):any{
    return this.http.get("http://localhost:1337"
    + "/downloadbook?idbook=" + idBook,
    { responseType: ResponseContentType.Blob }).map(
            (res) => {
                return new Blob([res.blob()], {type: 'application/pdf' })
            });

  }

  uploadBook(
    name:string,
    version:string,
    idcategory:number,
    ideditorial:number,
    idauthor:number,
    iduser:number,
    file: any
  ): any{

    let createURL = "http://localhost:1337/createbook?name="
    + name +"&status=1&version="+version + "&idcategory="+ idcategory
    + "&ideditorial="+ ideditorial+"&idauthor=" + idauthor +"&iduser=" + iduser;
    return this.http
      .post("http://localhost:1337/Usuario",file);
  }

}
