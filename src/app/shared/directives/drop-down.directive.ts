import {
    Directive,
    HostListener,
    ElementRef,
    Input,
    SimpleChanges,
    OnChanges
} from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective implements OnChanges {
    constructor(private elem: ElementRef) {}

    @HostListener('document:click', ['$event'])
    clickout() {
        if (this.elem.nativeElement.contains(event.target)) {
            this.elem.nativeElement.nextSibling.classList.toggle('open');
        } else {
            this.elem.nativeElement.nextSibling.classList.remove('open');
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
    }
}
