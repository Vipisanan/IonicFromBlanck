import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {TestComponent} from '../test/test.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            },
            {
                path: 'test',
                component: TestComponent
            }
        ])
    ],
    declarations: [
        HomePage,
        TestComponent
    ]
})
export class HomePageModule {
}
