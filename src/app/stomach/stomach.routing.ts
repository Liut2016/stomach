import { Routes } from '@angular/router';
import { StomachFormComponent } from '@app/stomach/stomach-form/stomach-form.component';
import { StomachOverviewComponent } from '@app/stomach/stomach-overview/stomach-overview.component';

export const StomachRoutes: Routes = [{
    path: '',
    component: StomachOverviewComponent
},
    {path: 'detail/:PID',
    component: StomachFormComponent
}];