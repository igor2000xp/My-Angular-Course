import { Component, Inject } from '@angular/core';
import { TOKEN } from '../../tokens/token';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    providers: [{ provide: TOKEN, useValue: 1 }],
})
export class ChildComponent {
    constructor(@Inject(TOKEN) private token: number) {
        // console.log('child token', this.token);
    }
}
