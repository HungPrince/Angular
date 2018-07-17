import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "../message.service";
import { map, tap, last, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()

export class UploaderService {
    constructor(private http: HttpClient, private messenger: MessageService) { }

    // if uploading mutiples file chang to
    // const formData = new FormData();
    // files.forEach(f => {
    // formData.append(f.name, f)
    // new HttpRequest('POST', '/upload/file', formData, {reportProgress: true});
    // });

    upload(file: File) {
        if (!file) { return; }
        const req = new HttpRequest('POST', '/upload/file', file, {
            reportProgress: true
        });
        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)),
            tap(message => this.showProgress(message)),
            last(),
            catchError(this.handleError(file))
        )
    }

    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${file.name}" of size ${file.size}`;
            case HttpEventType.UploadProgress:
                const percentDone = Math.round(100 * event.loaded / event.total);
                return `File "${file.name}" is ${percentDone} loaded`;
            case HttpEventType.Response:
                return `File "${file.name}" was complete uploaded!`;
            default:
                return `File "${file.name}" suprising upload event: ${event.type}.`;
        }
    }

    private handleError(file: File) {
        const userMessage = `${file.name} upload failed`;

        return (error: HttpErrorResponse) => {
            console.error(error);
            const message = (error.error instanceof Error) ? error.error.message :
                `server retured code ${error.status} with body "${error.error}"`
            this.messenger.add(`${userMessage} ${message}`);
            return of(userMessage);
        }
    }

    private showProgress(message: string) {
        this.messenger.add(message);
    }

}