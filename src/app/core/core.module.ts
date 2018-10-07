import { NgModule} from '@angular/core';
import { HttpService} from './services/http.service';

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
