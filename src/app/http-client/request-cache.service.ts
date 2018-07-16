import { HttpResponse, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export abstract class RequestCache {
    abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
    abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void
}

const maxAge = 30000;

@Injectable()

export class RequestCatchWithMap implements RequestCache {
    cache = new Map<string, RequestCacheEntry>();

    constructor(private messenger: MessageService) { }

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        const isExpired = cached.lastRead < (Date.now() - maxAge);
        const expired = isExpired ? isExpired : '';
        this.messenger.add(
            `Found ${expired} cached response for "${url}".`
        );
        return isExpired ? undefined : cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.urlWithParams;
        this.messenger.add(`Caching response form ${url}`);
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        const expired = Date.now() - maxAge;
        this.cache.forEach(entry => {
            if (entry.lastRead < expired) {
                this.cache.delete(entry.url);
            }
        })

        this.messenger.add(`Request cached size: ${this.cache.size}`)
    }

}