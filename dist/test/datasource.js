"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnalyticsDatasource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _table_model = require("app/core/table_model");

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
        key: "testDatasource",
        value: function testDatasource() {
            return this.backendSrv.datasourceRequest({
                url: this.url + "/tables",
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return { status: "success", message: "Analytics data source is working", title: "Success" };
                }
            });
        }
    }]);

    return AnalyticsDatasource;
}();
//# sourceMappingURL=datasource.js.map
