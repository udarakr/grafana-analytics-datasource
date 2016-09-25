import _ from "lodash";
import * as TableModel from 'app/core/table_model';

export class AnalyticsDatasource {

    constructor(instanceSettings, $q, backendSrv) {
        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;

        this.q = $q;
        this.backendSrv = backendSrv;
    }

    query(options) {
        let opts = angular.copy(options);
        let query = this.buildQueryParameters(opts);

        if (query.targets.length <= 0) {
            return this.q.when([]);
        }

        return this.q.all(_.map(query.targets, target => {
            return this.buildSeries(target);
        })).then(results => {
            return {'data': results} 
        });;

    }

    testDatasource() {
        return this.backendSrv.datasourceRequest({
            url: this.url + "/tables",
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return { status: "success", message: "Analytics Data source is working", title: "Success" };
            }
        });
    }

    metricFindQuery(options) {
        if(options.query === 'table'){
            return this.getTables(options.target);
        }else if(options.query === 'metric'){
                return this.q.when([
                    {'text': 'select*'}
                ]);
        }

        return this.q.when([]);
    }

    buildQueryParameters(options) {
        options.targets = _.filter(options.targets, target => {
            return target.metric;
        });

        return options;
    }

    getTables(target) {
        return this.backendSrv.datasourceRequest({
            url: this.url + '/tables',
            method: 'GET'
        }).then(function(resp){
            return _.map(resp.data, function(v){
                return {'text': v}
            });
        }, function(resp, a,b,c){
            console.error(resp, a,b,c)
        });
    }

    getTableData(target) {
        return this.backendSrv.datasourceRequest({
            url: this.url + '/tables/' + target.table,
            method: 'GET'
        });
    }

    getSchema(target) {
        return this.backendSrv.datasourceRequest({
            url: this.url + '/tables/' + target.table + "/schema",
            method: 'GET'
        }).then(function(resp){
            return resp.data;
        }, function(resp, a,b,c){
            console.error(resp, a,b,c)
        });
    }

    buildCoulmns(resp, table){
        var keys = Object.keys(resp.data[1].values);
        table.columns = [];
        for(var i = 0, length = keys.length; i <= length; i++) {
            if(keys[i]){
                table.columns.push({'text' : keys[i]});
            }
        }
        return keys;
    }

    buildSeries(target) {
        let self = this;
        var keys;
        if(target.metric === 'select*'){
            var table = new TableModel.default();
            let rows = [];

            return this.getTableData(target).then(resp => {
                keys= this.buildCoulmns(resp, table);
                return self.q.all(_.map(resp.data, branch => {
                    let row = branch.values;
                    rows.push(row);
                }));
            }).then(function(){;
                _.forEach(rows, row => {
                    var keys = Object.keys(row);
                    var r = [];
                    for (var i = 0; i < keys.length; i++) {
                        var k = keys[i];
                        r.push(row[k]);
                    }
                   table.rows.push(r);
                });
                return table;
            });
        }
        return [];
    }
}


