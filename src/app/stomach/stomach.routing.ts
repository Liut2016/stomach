import { Routes } from '@angular/router';
import { StomachFormComponent } from '@app/stomach/stomach-form/stomach-form.component';
import { StomachOverviewComponent } from '@app/stomach/stomach-overview/stomach-overview.component';
import { StomachFilterComponent } from '@app/stomach/stomach-filter/stomach-filter.component';

export const StomachRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'overview',
      component: StomachOverviewComponent
    },
    {
      path: 'detail/:PID/:ZYH',
      component: StomachFormComponent
    },
    {
      path: 'filter',
      component: StomachFilterComponent
    }
  ]
}];
