import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
    // mqttdata: any;
    datas: string;

    constructor(private service: ApiService) {
    }

    ngOnInit() {

        console.log('called test app...................');
        this.getData();
    }

    getData() {
        this.service.getDatas()
            .subscribe(d => {
                console.log(d);
            });
    }
}

