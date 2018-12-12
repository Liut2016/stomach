import { Routes } from '@angular/router';
import {MammaryFormComponent} from '@app/mammary/mammary-form/mammary-form.component';
import {MammaryOverviewComponent} from '@app/mammary/mammary-overview/mammary-overview.component';

export const MammaryRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'detail/:PID',
            component: MammaryFormComponent
        },
        {
            path: 'overview',
            component: MammaryOverviewComponent
        }
    ]
}];
