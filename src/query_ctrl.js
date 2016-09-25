import {QueryCtrl} from 'app/plugins/sdk';
import './css/query-editor.css!'

export class AnalyticsDatasourceQueryCtrl extends QueryCtrl {

    constructor($scope, $injector, uiSegmentSrv, $q)  {
        super($scope, $injector);

        this.scope = $scope;
        this.q = $q;
        this.uiSegmentSrv = uiSegmentSrv;

        this.target.table = this.target.table || '';
        this.target.metric = this.target.metric || '';

        this.tableSegment = uiSegmentSrv.getSegmentForValue(this.target.table, 'select table');
        this.metricSegment = uiSegmentSrv.getSegmentForValue(this.target.metric, 'select metric');
    }

    getTables() {
        return this.datasource.metricFindQuery({'query': 'table', 'target': this.target})
            .then(this.uiSegmentSrv.transformToSegments(false));
    }

    getMetricSegments() {
        return this.datasource.metricFindQuery({'query': 'metric', 'target': this.target})
            .then(this.uiSegmentSrv.transformToSegments(false));
    }

    tableChanged() {
        this.target.table = this.tableSegment.value;
        this.panelCtrl.refresh();
    }

    metricSegmentChanged() {
        this.target.metric = this.metricSegment.value;
        this.panelCtrl.refresh();
    }
}

AnalyticsDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

