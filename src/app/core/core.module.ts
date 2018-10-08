import { NgModule} from '@angular/core';
import { HttpService} from '@app/core/services/http.service';

@NgModule({
  imports: [],
  providers: [
    HttpService,
  ],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor( ) {}
}
