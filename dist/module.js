'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var AnalyticsDatasource, AnalyticsDatasourceQueryCtrl, AnalyticsConfigCtrl, AnalyticsQueryOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      AnalyticsDatasource = _datasource.AnalyticsDatasource;
    }, function (_query_ctrl) {
      AnalyticsDatasourceQueryCtrl = _query_ctrl.AnalyticsDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', AnalyticsConfigCtrl = function AnalyticsConfigCtrl() {
        _classCallCheck(this, AnalyticsConfigCtrl);
      });

      AnalyticsConfigCtrl.templateUrl = 'partials/config.html';

      _export('QueryOptionsCtrl', AnalyticsQueryOptionsCtrl = function AnalyticsQueryOptionsCtrl() {
        _classCallCheck(this, AnalyticsQueryOptionsCtrl);
      });

      AnalyticsQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', AnalyticsDatasource);

      _export('QueryCtrl', AnalyticsDatasourceQueryCtrl);

      _export('ConfigCtrl', AnalyticsConfigCtrl);

      _export('QueryOptionsCtrl', AnalyticsQueryOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
