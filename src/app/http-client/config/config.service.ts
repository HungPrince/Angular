import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

export interface Config {
    heroesUrl: string;
    textfile: string;
}

@Injectable()

export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get<Config>(this.configUrl)
            .pipe(
                retry(3),
                catchError(this.handleError)
            )
    }

    getConfig_1() {
        return this.http.get(this.configUrl);
    }

    getConfig_2() {
        return this.http.get<Config>(this.configUrl);
    }

    getConfig_3() {
        return this.http.get<Config>(this.configUrl)
            .pipe(catchError(this.handleError));
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
            this.configUrl, { observe: 'response' });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occured: ', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    makeIntentionalError() {
        return this.http.get('not/a/real/url')
            .pipe(
                catchError(this.handleError)
            );
    }
}