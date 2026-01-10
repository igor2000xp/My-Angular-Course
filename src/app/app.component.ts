import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CutTextPipe } from './pipes/cut-text.pipe';

@Component({
    selector: 'app-root',
    imports: [CommonModule, DatePipe, CutTextPipe],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true
})
export class AppComponent {
  title = 'angular-course-2026';

  user = {
    name: 'Yura',
    age: '27',
  };

  tooltip = 'Я подсказка для ссылки';

  inlineStyles = {
    width: '50%',
    background: 'green',
  };

  cssClass = 'blue';

  someNumber = '70';

  someDate = new Date();
}
