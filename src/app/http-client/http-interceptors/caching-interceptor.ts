import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { searchUrl } from "../package-search/package-search.service";
import { RequestCache } from "../request-cache.service";
import { Observable, of } from "rxjs";
import { tap, startWith } from "rxjs/operators";

@Injectable()

export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!isCachable(req)) { return next.handle(req) }

        const cachedResponse = this.cache.get(req);
        if (req.headers.get('x-refresh')) {
            const result$ = sendRequest(req, next, this.cache);
            return cachedResponse ? result$.pipe(startWith(cachedResponse)) : result$;
        }

        return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
    }
}

function isCachable(req: HttpRequest<any>) {
    return req.method === 'GET' && req.url.indexOf(searchUrl) > -1;
}

function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });
    return next.handle(noHeaderReq).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                cache.put(req, event);
            }
        })
    )
}

