/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */
@Component({
    selector: 'grid',
    template: require('./grid.html'),
    directives: [(<any>window).ag.grid.AgGridNg2]
})

export class Grid {
    gridOptions = <any>{};

    columnDefs = [{
        headerName: 'Make',
        field: 'make'
    }, {
            headerName: 'Model',
            field: 'model'
        }, {
            headerName: 'Price',
            field: 'price',
            cellClass: 'rightJustify',
            cellRenderer: function(params: any) {
                return '$' + params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //thanks http://stackoverflow.com/users/28324/elias-zamaria
            }
        }];
    // put data directly onto the controller
    rowData = [{
        make: 'Toyota',
        model: 'Celica',
        price: 35000
    }, {
            make: 'Ford',
            model: 'Mondeo',
            price: 32000
        }, {
            make: 'Porsche',
            model: 'Boxter',
            price: 72000
        }];

    constructor() {
        //
    }

    onReady() {
        this.gridOptions.api.sizeColumnsToFit();
        this.gridOptions.api.showLoadingOverlay();
    }

}
