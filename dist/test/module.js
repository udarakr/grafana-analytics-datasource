'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _query_ctrl = require('./query_ctrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnalyticsConfigCtrl = function AnalyticsConfigCtrl() {
  _classCallCheck(this, AnalyticsConfigCtrl);
};

AnalyticsConfigCtrl.templateUrl = 'partials/config.html';

var AnalyticsQueryOptionsCtrl = function AnalyticsQueryOptionsCtrl() {
  _classCallCheck(this, AnalyticsQueryOptionsCtrl);
};

AnalyticsQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

exports.Datasource = _datasource.AnalyticsDatasource;
exports.QueryCtrl = _query_ctrl.AnalyticsDatasourceQueryCtrl;
exports.ConfigCtrl = AnalyticsConfigCtrl;
exports.QueryOptionsCtrl = AnalyticsQueryOptionsCtrl;
//# sourceMappingURL=module.js.map
