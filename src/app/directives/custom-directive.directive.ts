import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: false,
})
export class CustomDirectiveDirective implements OnInit {
  @Input('color') colorProps!: string;
  @Input('appCustomDirective') appCustomDirectiveProps!: string;

  @Output() colorChange = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('ngOnInit');

    console.log('appCustomDirective');
    console.log('element', this.element);

    this.element.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid red');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '0 0 10px 0 rgba(241, 227, 227, 0.5)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'all 1.9s ease');
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  @HostBinding('style.color') color: string = 'lime';
  @HostBinding('attr.color') attr: string = 'lime';
  @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.background') bgColor = 'transparent';

  //   @HostBinding('style.color') color = null; // или undefined
  //   @HostBinding('attr.color') attr: any;
  //   @HostBinding('class.color') class = false;

    // @HostListener('document:click', ['$event.target']) handleClick(data: any) {
    //   // console.log('click!');
    //   console.log('data', data);
    // }

  @HostListener('click') handleClick(data: any) {
    this.getRandomColor();
  }

  @HostListener('mouseenter') handleMouseenter(data: any) {
    this.bgColor = 'orange';
  }
  @HostListener('mouseleave') handleMouseleave(data: any) {
    this.bgColor = 'transparent';
  }

  ngOnChanges() {
    console.log('colorProps', this.colorProps);
    console.log('appCustomDirectiveProps', this.appCustomDirectiveProps);

    // this.bgColor = this.appCustomDirectiveProps;
  }

  getRandomColor() {
    const newColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    this.bgColor = newColor;

    this.colorChange.emit(newColor);
  }
}
