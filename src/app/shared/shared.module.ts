import { NgModule } from '@angular/core';

import { MenuItems } from '@app/shared/config-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from '@app/shared/accordion';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
