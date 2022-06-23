import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BorderSytle]'
})
export class BorderBoxDirective {
// 
// private elem:ElementRef;
// BorderColor:string="green";
@Input() BColor:string="yellow";
@Input('BorderSytle') default:string="darkgreen";  //BorderSytle="pink"

  constructor(private elem:ElementRef) {
    // this.elem = _elem
    // elem.nativeElement.style.border=`3px solid red`;
    // elem.nativeElement.style.border=`3px solid ${this.BorderColor}`;
    elem.nativeElement.style.border=`3px solid ${this.BColor}`;
   }

  //  @HostListener('event')  functionName(){}
  @HostListener('mouseover') onMouseover(){
    this.elem.nativeElement.style.border=`3px solid ${this.default}`;
  }
  @HostListener('mouseout') onMouseout(){
    this.elem.nativeElement.style.border=`3px solid ${this.BColor}`;
  }
}


