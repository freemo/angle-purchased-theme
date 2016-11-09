import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { TranslateService, TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        Ng2BootstrapModule,
        ToasterModule
    ],
    providers: [
        TranslateService
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule,
        RouterModule,
        Ng2BootstrapModule,
        ToasterModule
    ]
})
export class SharedModule { }
