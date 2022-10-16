import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { LikedModel } from '../models/LikedModel';
import { CarsModel } from '../models/CarsModel';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.json_apiUrl;
  }

  
  httpGet<T>(urlPath: string): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl + urlPath)
      // .pipe(map((response: T) => {
      //   return response;
      // }),
      //   catchError((err) => {
      //     console.log(err);
      //     return of([]);
      //   })
      // );
  }
  httpPost(model: any, urlPath:string): Observable<any> {
    debugger;
    return this.http.post<any>(this.baseUrl + urlPath, model)
    // pipe(map((response: any) => {
    //   return response;
    // }),
    //   catchError((err) => {
    //     console.log(err);
    //     return of([]);
    //   })
    // );
  
      
  }
}
