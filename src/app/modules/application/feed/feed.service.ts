import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Feed } from './feed';




@Injectable({
  providedIn: 'root'
})
export class FeedService {

  url = 'https://rss.app/feeds/DTDaQVpFOBsJ2mN2.xml?dfbvdfb'; // api rest fake
/*
  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/xml' })
  }

  // Obtem todos os feeds
  getAllFeeds(): Observable<Feed> {
    return this.http.get<Feed>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  */
}
