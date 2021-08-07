import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  private _url='';
  constructor(private _http:HttpClient) { }

  postdata(data:any):Observable<any[]>{
    return this._http.post<any[]>(this._url, data).pipe();
  }
}
