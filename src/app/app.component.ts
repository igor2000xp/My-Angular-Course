import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Inject,
} from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserService } from './services/user.service';
import {
    ADMIN_RANDOM_SERVICE_TOKEN,
    TOKEN,
    USER_RANDOM_SERVICE_TOKEN,
} from './tokens/token';
import { ChildComponent } from './components/child/child.component';
import { RandomService } from './services/random.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [AsyncPipe, ChildComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DataService,
        // строка
        { provide: TOKEN, useValue: 'Какие-то строковые данные', multi: true },
        // число
        { provide: TOKEN, useValue: 1, multi: true },
        // булево
        { provide: TOKEN, useValue: true, multi: true },
        // объект
        { provide: TOKEN, useValue: { name: 'Вася' }, multi: true },
        // массив
        { provide: TOKEN, useValue: [1, 2, 3], multi: true },
    ],
})
export class AppComponent {
    users$: Observable<any>;

    dataService3 = inject(DataService);

    constructor(
        private dataService: DataService,
        @Inject(TOKEN) private token: string // @Inject(DataService) private dataService2: DataService, // @Inject(USER_RANDOM_SERVICE_TOKEN) // private userRandomService: string, // @Inject(ADMIN_RANDOM_SERVICE_TOKEN) private adminRandomService: string
    ) {
        this.users$ = this.dataService.getUsers();
        console.log('this.token', this.token);
        // console.log('this.dataService', this.dataService);
        // console.log('this.dataService2', this.dataService2);
        // console.log('this.dataService3', this.dataService3);
        // console.log('this.userRandomService', this.userRandomService);
        // console.log('this.adminRandomService', this.adminRandomService);
    }
}

// class Injector {
//     private container = new Map();

//     constructor(private providers: any[] = []) {
//         this.providers.forEach((service) =>
//             this.container.set(service, new service())
//         );
//     }

//     get(service: any) {
//         const serviceInstance = this.container.get(service);

//         if (!serviceInstance) throw new Error('Service not provided');

//         return serviceInstance;
//     }
// }
