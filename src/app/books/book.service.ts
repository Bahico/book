import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookModel} from "./book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly http: HttpClient
  ) { }

  query() {
    return this.http.get<BookModel[]>('http://admin.libbobur.uz/services/bookms/api/books?page=0&size=4&sort=id,desc')
  }
}
