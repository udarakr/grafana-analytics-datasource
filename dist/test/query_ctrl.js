'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnalyticsDatasourceQueryCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdk = require('app/plugins/sdk');

require('./css/query-editor.css!');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnalyticsDatasourceQueryCtrl = exports.AnalyticsDatasourceQueryCtrl = function (_QueryCtrl) {
    _inherits(AnalyticsDatasourceQueryCtrl, _QueryCtrl);

    function AnalyticsDatasourceQueryCtrl($scope, $injector, uiSegmentSrv, $q) {
        _classCallCheck(this, AnalyticsDatasourceQueryCtrl);

        var _this = _possibleConstructorReturn(this, (AnalyticsDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(AnalyticsDatasourceQueryCtrl)).call(this, $scope, $injector));

        _this.scope = $scope;
        _this.q = $q;
        _this.uiSegmentSrv = uiSegmentSrv;

        _this.target.table = _this.target.table || '';
        _this.target.metric = _this.target.metric || '';

        _this.tableSegment = uiSegmentSrv.getSegmentForValue(_this.target.table, 'select table');
        _this.metricSegment = uiSegmentSrv.getSegmentForValue(_this.target.metric, 'select metric');
        return _this;
    }

    _createClass(AnalyticsDatasourceQueryCtrl, [{
        key: 'getTables',
        value: function getTables() {
            return this.datasource.metricFindQuery({ 'query': 'table', 'target': this.target }).then(this.uiSegmentSrv.transformToSegments(false));
        }
    }, {
        key: 'getMetricSegments',
        value: function getMetricSegments() {
            return this.datasource.metricFindQuery({ 'query': 'metric', 'target': this.target }).then(this.uiSegmentSrv.transformToSegments(false));
        }
    }, {
        key: 'tableChanged',
        value: function tableChanged() {
            this.target.table = this.tableSegment.value;
            this.panelCtrl.refresh();
        }
    }, {
        key: 'metricSegmentChanged',
        value: function metricSegmentChanged() {
            this.target.metric = this.metricSegment.value;
            this.panelCtrl.refresh();
        }
    }]);

    return AnalyticsDatasourceQueryCtrl;
}(_sdk.QueryCtrl);

AnalyticsDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
//# sourceMappingURL=query_ctrl.js.map
