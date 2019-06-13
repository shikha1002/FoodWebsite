import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appdropdowndirevtive]'
})
export class dropDownDirective{
   @HostBinding('class.open') isOpen:boolean=false;

    @HostListener('click') adddropdown(){
        this.isOpen=!this.isOpen;
    }
}