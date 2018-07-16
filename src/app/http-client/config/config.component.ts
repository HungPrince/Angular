import { Component } from "@angular/core";
import { Config, ConfigService } from "./config.service";


@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styles: ['.error {color: red;}'],
    providers: [ConfigService]
})

export class ConfigComponent {
    error: any;
    headers: string[];
    config: Config;

    constructor(private configService: ConfigService) { }

    clear() {
        this.config = undefined;
        this.error = undefined;
        this.headers = undefined;
    }

    showConfig() {
        this.configService.getConfig()
            .subscribe((data: Config) => {
                this.config = { ...data }
            }, error => this.error = error
            )
    }

    showConfig_v1() {
        this.configService.getConfig_1()
            .subscribe((data: Config) => this.config = {
                heroesUrl: data['heroesUrl'],
                textfile: data['textfile']
            });
    }

    showConfig_v2() {
        this.configService.getConfig()
            .subscribe((data: Config) => this.config = { ...data });
    }

    showConfigResponse() {
        this.configService.getConfigResponse()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`);
                this.config = { ...resp.body };
            })
    }

    makeError() {
        this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
    }
}