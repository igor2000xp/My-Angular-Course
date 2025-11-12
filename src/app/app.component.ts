import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  colorProperty: string = 'orange';

  setColor(newColor: string) {
    this.colorProperty = newColor;
  }

  @HostBinding('style.background') bgColor = 'transparent';

  // @HostListener('click') handleClick(data: string) {
  //   console.log('click from AppComponent', data);
  //   this.bgColor = data;
  // }

  handleClick(data: string) {
    console.log('click from AppComponent', data);
    this.setColor(data);
  }
}
