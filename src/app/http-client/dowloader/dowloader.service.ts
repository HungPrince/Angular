import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "../message.service";
import { tap } from "rxjs/operators";

@Injectable()


export class DowloaderService {
    constructor(private http: HttpClient, private messenger: MessageService) { }

    getTextFile(filename: string) {
        return this.http.get(filename, { responseType: 'text' })
            .pipe(
                tap(
                    data => this.log(filename, data),
                    error => this.logError(filename, error)
                )
            );
    }

    private log(filename: string, data: string) {
        const message = `DownloadedService downloaded "${filename}" and got "${data}"`;
        this.messenger.add(message);
    }

    private logError(filename: string, error: any) {
        const message = `DownloaderService failed to download "${filename}"; got error "${error.message}"`;
        this.messenger.add(message);
    }
}