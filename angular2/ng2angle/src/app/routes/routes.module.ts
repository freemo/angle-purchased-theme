import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuService } from '../core/menu/menu.service';

import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { SpinnersComponent } from './elements/spinners/spinners.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';
import { GridComponent } from './elements/grid/grid.component';
import { GridmasonryComponent } from './elements/gridmasonry/gridmasonry.component';
import { TypographyComponent } from './elements/typography/typography.component';
import { IconsfontComponent } from './elements/iconsfont/iconsfont.component';
import { IconsweatherComponent } from './elements/iconsweather/iconsweather.component';
import { ColorsComponent } from './elements/colors/colors.component';
import { InteractionComponent } from './elements/interaction/interaction.component';
import { NotificationComponent } from './elements/notification/notification.component';

import { SharedModule } from '../shared/shared.module';

import appMenu from './menu';
import appRoutes from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        HomeComponent,
        ButtonsComponent,
        SpinnersComponent,
        DropdownComponent,
        GridComponent,
        GridmasonryComponent,
        TypographyComponent,
        IconsfontComponent,
        IconsweatherComponent,
        ColorsComponent,
        InteractionComponent,
        NotificationComponent
    ],
    exports: [
        RouterModule,
        HomeComponent,
        ButtonsComponent,
        SpinnersComponent,
        DropdownComponent,
        GridComponent,
        GridmasonryComponent,
        TypographyComponent,
        IconsfontComponent,
        IconsweatherComponent,
        ColorsComponent,
        InteractionComponent,
        NotificationComponent
    ]
})

export class RoutesModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
