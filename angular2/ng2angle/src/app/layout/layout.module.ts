import { NgModule } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/header/header.component';
import { NavsearchComponent } from '../layout/header/navsearch/navsearch.component';
import { OffsidebarComponent } from '../layout/offsidebar/offsidebar.component';
import { UserblockComponent } from '../layout/sidebar/userblock/userblock.component';
import { UserblockService } from '../layout/sidebar/userblock/userblock.service';
import { FooterComponent } from '../layout/footer/footer.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        UserblockService
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        UserblockComponent,
        HeaderComponent,
        NavsearchComponent,
        OffsidebarComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent,
        SidebarComponent,
        UserblockComponent,
        HeaderComponent,
        NavsearchComponent,
        OffsidebarComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
