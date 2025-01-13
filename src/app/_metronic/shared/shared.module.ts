import {NgModule} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";
// import { SearchComponent } from '../layout/components/aside/tabs/projects-tab/search/search.component';

@NgModule({
  declarations: [
    KeeniconComponent,
    // SearchComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    KeeniconComponent,
    // SearchComponent
  ]
})
export class SharedModule {
}
