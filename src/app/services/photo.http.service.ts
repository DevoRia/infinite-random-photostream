import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  concatMap, interval, map, take, toArray,
} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotoHttpService {
  constructor(private http: HttpClient) { }

  fetchNextPhotos() {
    return interval(100).pipe(
      take(10),
      concatMap(() => this.fetchPhoto()),
      toArray(),
    );
  }

  fetchPhoto() {
    return this.http.get(environment.photoServer, {
      observe: 'response',
      responseType: 'text',
    }).pipe(map((response) => response.url));
  }
}
