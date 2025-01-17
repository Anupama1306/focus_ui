import {NgModule} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";
 import { SearchComponent } from '../layout/components/aside/tabs/projects-tab/search/search.component';
import { InlineSVGModule } from 'ng-inline-svg-2/lib_commonjs/inline-svg.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KeeniconComponent,
    SearchComponent,
    
  ],
  imports: [
    CommonModule,
    InlineSVGModule, // Import InlineSVGModule for inlineSVG support
    FormsModule,
  ],
  exports: [
    KeeniconComponent,
     SearchComponent
  ]
})
export class SharedModule {
}
