/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffsidebarComponent } from './offsidebar.component';

import { SettingsService } from '../../core/settings/settings.service.ts';
import { ThemesService } from '../../core/themes/themes.service';
import { TranslatorService } from '../../core/translator/translator.service';
import { TranslateService, TranslateLoader } from 'ng2-translate/ng2-translate';
import { SharedModule } from '../../shared/shared.module';

describe('Component: Offsidebar', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            providers: [SettingsService, ThemesService, TranslatorService]
        }).compileComponents();
    });

    it('should create an instance', async(inject([SettingsService, ThemesService, TranslatorService],
        (settingsService, themesService, translatorService) => {
            let component = new OffsidebarComponent(settingsService, themesService, translatorService);
            expect(component).toBeTruthy();
    })));
});
