'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnalyticsDatasource = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _table_model = require('app/core/table_model');

var TableModel = _interopRequireWildcard(_table_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnalyticsDatasource = exports.AnalyticsDatasource = function () {
    function AnalyticsDatasource(instanceSettings, $q, backendSrv) {
        _classCallCheck(this, AnalyticsDatasource);

        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;

        this.q = $q;
        this.backendSrv = backendSrv;
    }

    _createClass(AnalyticsDatasource, [{
        key: 'query',
        value: function query(options) {
            var _this = this;

            var opts = angular.copy(options);
            var query = this.buildQueryParameters(opts);

            if (query.targets.length <= 0) {
                return this.q.when([]);
            }

            return this.q.all(_lodash2.default.map(query.targets, function (target) {
                return _this.buildSeries(target);
            })).then(function (results) {
                return { 'data': results };
            });;
        }
    }, {
        key: 'testDatasource',
        value: function testDatasource() {
            return this.backendSrv.datasourceRequest({
                url: this.url + "/tables",
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return { status: "success", message: "Analytics Data source is working", title: "Success" };
                }
            });
        }
    }, {
        key: 'metricFindQuery',
        value: function metricFindQuery(options) {
            if (options.query === 'table') {
                return this.getTables(options.target);
            } else if (options.query === 'metric') {
                return this.q.when([{ 'text': 'select*' }]);
            }

            return this.q.when([]);
        }
    }, {
        key: 'buildQueryParameters',
        value: function buildQueryParameters(options) {
            options.targets = _lodash2.default.filter(options.targets, function (target) {
                return target.metric;
            });

            return options;
        }
    }, {
        key: 'getTables',
        value: function getTables(target) {
            return this.backendSrv.datasourceRequest({
                url: this.url + '/tables',
                method: 'GET'
            }).then(function (resp) {
                return _lodash2.default.map(resp.data, function (v) {
                    return { 'text': v };
                });
            }, function (resp, a, b, c) {
                console.error(resp, a, b, c);
            });
        }
    }, {
        key: 'getTableData',
        value: function getTableData(target) {
            return this.backendSrv.datasourceRequest({
                url: this.url + '/tables/' + target.table,
                method: 'GET'
            });
        }
    }, {
        key: 'getSchema',
        value: function getSchema(target) {
            return this.backendSrv.datasourceRequest({
                url: this.url + '/tables/' + target.table + "/schema",
                method: 'GET'
            }).then(function (resp) {
                return resp.data;
            }, function (resp, a, b, c) {
                console.error(resp, a, b, c);
            });
        }
    }, {
        key: 'buildCoulmns',
        value: function buildCoulmns(resp, table) {
            var keys = Object.keys(resp.data[1].values);
            table.columns = [];
            for (var i = 0, length = keys.length; i <= length; i++) {
                if (keys[i]) {
                    table.columns.push({ 'text': keys[i] });
                }
            }
            return keys;
        }
    }, {
        key: 'buildSeries',
        value: function buildSeries(target) {
            var _this2 = this;

            var self = this;
            var keys;
            if (target.metric === 'select*') {
                var table;

                var _ret = function () {
                    table = new TableModel.default();

                    var rows = [];

                    return {
                        v: _this2.getTableData(target).then(function (resp) {
                            keys = _this2.buildCoulmns(resp, table);
                            return self.q.all(_lodash2.default.map(resp.data, function (branch) {
                                var row = branch.values;
                                rows.push(row);
                            }));
                        }).then(function () {
                            ;
                            _lodash2.default.forEach(rows, function (row) {
                                var keys = Object.keys(row);
                                var r = [];
                                for (var i = 0; i < keys.length; i++) {
                                    var k = keys[i];
                                    r.push(row[k]);
                                }
                                table.rows.push(r);
                            });
                            return table;
                        })
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
            return [];
        }
    }]);

    return AnalyticsDatasource;
}();
//# sourceMappingURL=datasource.js.map
