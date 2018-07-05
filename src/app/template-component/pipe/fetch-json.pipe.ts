import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
    name: 'fetchJson',
    pure: false
})
export class FetchJsonPipe implements PipeTransform {

    private cachedData: any;
    private cachedUrl: string = '';

    constructor(private httpClient: HttpClient) { }

    transform(url: string): any {
        if (url !== this.cachedUrl) {
            this.cachedData = null;
            this.cachedUrl = url;
            this.httpClient.get(url).subscribe(result => this.cachedData = result);
        }
        return this.cachedData;
    }
}
