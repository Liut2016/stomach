import { Routes } from '@angular/router';
import { ExportComponent } from '@app/configuration/export/export.component';

export const ConfigurationRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'export',
      component: ExportComponent
    }
  ]
}];
