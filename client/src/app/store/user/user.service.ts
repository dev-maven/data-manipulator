

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {
apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + 'users');
    }


    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.apiUrl + 'users/' + id);
    }


}
