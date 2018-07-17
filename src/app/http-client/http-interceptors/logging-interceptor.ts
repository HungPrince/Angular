import { Injectable } from "@angular/core";
import { MessageService } from "../message.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from "@angular/common/http";
import { tap, finalize } from "rxjs/operators";


@Injectable()

export class LoggingInterceptor implements HttpInterceptor {
    constructor(private messenger: MessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const started = Date.now();
        let ok: string;

        return next.handle(req).pipe(
            tap(
                event => ok = event instanceof HttpResponse ? 'Succeeded' : '',
                error => ok = 'failed'
            ),
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}"
                ${ok} in ${elapsed} ms.`;
                this.messenger.add(msg);
            })
        )
    }
}