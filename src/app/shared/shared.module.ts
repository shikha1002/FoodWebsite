import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dropDownDirective } from './dropdown.directive';


@NgModule({
    declarations:[dropDownDirective],
    exports:[
        CommonModule,
        dropDownDirective
    ]
})
export class ShareModule{}