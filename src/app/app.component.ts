import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
export interface ApiResponse {
  numFound: number;
  docs: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Library';

  

  inputAuthor: string = ""
  inputBook: string = ""
  bookOutput: number = 0 
  booksArray: Array<any> = []
  isShow = false

  constructor(
    private apiService: ApiService,
  ) {
    
}

public btnSearchClicked(): void {
  if (this.inputBook.length >= 2 || this.inputAuthor.length >= 2) {
    this.apiService.getBooks(this.inputBook, this.inputAuthor).subscribe((data:ApiResponse) => {
      console.log(data);
      this.bookOutput = data.numFound;
      this.booksArray = data.docs;
      console.log(this.booksArray);
      this.isShow = true;
    })
  }

}


 
  
}


