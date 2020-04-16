import { Injectable } from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/7iiGa9leB9mZiIQqTB2p',
      userSettings);
// return of(userSettings);
  }
}
