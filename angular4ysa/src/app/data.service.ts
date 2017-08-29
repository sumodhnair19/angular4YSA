import { Injectable } from '@angular/core';
import { TableData } from './table.format';
import { Data } from './mock-data';

@Injectable()
export class TableService {
    getData(): Promise<TableData[]> {
        return Promise.resolve(Data);
    } // stub
}