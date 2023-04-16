import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiResponse } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
  return next.handle(req);
}

  public getBooks(book: String, author: String):Observable<ApiResponse> {
    if (book.length >= 2 && author.length < 2) {
      return this.http.get<ApiResponse>('https://openlibrary.org/search.json?title=' + book);
    }
    else if (book.length < 2 && author.length >= 2) {
      return this.http.get<ApiResponse>('https://openlibrary.org/search.json?author=' + author);
    }
    else {
      return this.http.get<ApiResponse>('https://openlibrary.org/search.json?author=' + author + '&title=' + book);
    }
  }
}
