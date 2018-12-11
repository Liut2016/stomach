import { Routes } from '@angular/router';
import {GeneralComponentsListComponent} from '@app/generalComponents/general-components-list/general-components-list.component';
import { GeneralComponentsMdComponent } from '@app/generalComponents/general-components-md/general-components-md.component';

export const GeneralComponentsRoutes: Routes = [{
    path: '',
    children: [
      {
        path: 'components',
        component: GeneralComponentsListComponent
      },
      {
        path: 'markdown',
        component: GeneralComponentsMdComponent
      }
    ]
}];
