import {QueryCtrl} from 'app/plugins/sdk';
import './css/query-editor.css!'

export class AnalyticsDatasourceQueryCtrl extends QueryCtrl {

    constructor($scope, $injector, uiSegmentSrv, $q)  {
        super($scope, $injector);

        this.scope = $scope;
        this.q = $q;
        this.uiSegmentSrv = uiSegmentSrv;

        this.target.table = this.target.table || '';

        this.repoSegment = uiSegmentSrv.getSegmentForValue(this.target.table, 'select table');
    }

    gettables() {
        return {}
    }

    tableChanged() {
        this.target.table = this.repoSegment.value;
        //this.panelCtrl.refresh();
    }
}

AnalyticsDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

