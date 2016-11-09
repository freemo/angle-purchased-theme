/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

import { UserblockService } from '../sidebar/userblock/userblock.service.ts';
import { SettingsService } from '../../core/settings/settings.service.ts';

describe('Component: Header', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserblockService, SettingsService]
        }).compileComponents();
    });

    it('should create an instance', async(inject([UserblockService, SettingsService], (userblockService, settingsService) => {
        let component = new HeaderComponent(userblockService, settingsService);
        expect(component).toBeTruthy();
    })));
});
