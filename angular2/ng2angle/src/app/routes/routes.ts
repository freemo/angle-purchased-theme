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

const routes = [
    { path: 'home', component: HomeComponent },

    {
        path: 'elements',
        children: [
            { path: 'buttons', component: ButtonsComponent},
            { path: 'interaction', component: InteractionComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'spinners', component: SpinnersComponent },
            { path: 'dropdown', component: DropdownComponent },
            { path: 'grid', component: GridComponent },
            { path: 'gridmasonry', component: GridmasonryComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'iconsfont', component: IconsfontComponent },
            { path: 'iconsweather', component: IconsweatherComponent },
            { path: 'colors', component: ColorsComponent }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];

export default routes;
