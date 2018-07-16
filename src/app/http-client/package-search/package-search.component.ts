import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { NpmPackageInfo, PackageSearchService } from "./package-search.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
    selector: 'app-package-search',
    templateUrl: './package-search.component.html',
    providers: [PackageSearchService]
})

export class PackageSearchComponent {
    withRefresh = false;
    packages$: Observable<NpmPackageInfo[]>;
    private searchText$ = new Subject<string>();

    constructor(private searchService: PackageSearchService) { }

    search(packageName: string) {
        this.searchText$.next(packageName);
    }

    ngOnInit() {
        this.packages$ = this.searchText$.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(packageName =>
                this.searchService.search(packageName, this.withRefresh))
        );
    }

    toggleRefresh() {
        this.withRefresh = !this.withRefresh;
    }
}