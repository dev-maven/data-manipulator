

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Platform, PlatformSummary } from './platform.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class PlatformService {
apiUrl = environment.apiUrl;


    constructor(private http: HttpClient) {

    }

    getPlatforms(): Observable<PlatformSummary> {
        return this.http.get<PlatformSummary>(this.apiUrl + 'platforms');
    }

    getPlatform(id: number): Observable<Platform> {
        return this.http.get<Platform>(this.apiUrl + 'platforms/' + id);
    }


}
