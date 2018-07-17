import { Component } from "@angular/core";
import { DowloaderService } from "./dowloader.service";

@Component(
    {
        selector: 'app-downloader',
        templateUrl: './dowloader.component.html',
        providers: [DowloaderService]
    }
)

export class DownloaderComponent {
    contents: string;
    constructor(private downloaderService: DowloaderService) {

    }

    clear() {
        this.contents = undefined;
    }

    download() {
        this.downloaderService.getTextFile('assets/textfile.txt')
            .subscribe(results => {
                this.contents = results;
            })
    }
}