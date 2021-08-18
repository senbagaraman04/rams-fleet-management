import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
*
* @author: Senbagaraman
*
* */

@Injectable()
export class LocalRowDataStorageService {

    private rowDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    selectedRowData: Observable<any> = this.rowDataSource.asObservable();

    constructor() {
        if (localStorage.getItem('rowData')) {
            this.rowDataSource.next(JSON.parse(localStorage.getItem('rowData')));
        }
    }

    selectionEvent(rowData) {
        localStorage.setItem('rowData', JSON.stringify(rowData));
        this.rowDataSource.next(rowData);
    }
}
