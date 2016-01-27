import {GridOptions,GridColumn,GridData} from './ng2-bootstrap-grid/gridOptions';
export class PersonData extends GridData {
    constructor(
        public id : string,
        public name : string
    ){}
}