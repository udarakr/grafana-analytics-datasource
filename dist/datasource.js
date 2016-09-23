"use strict";

System.register(["lodash", "app/core/table_model"], function (_export, _context) {
    "use strict";

    var _, TableModel, _createClass, AnalyticsDatasource;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_lodash) {
            _ = _lodash.default;
        }, function (_appCoreTable_model) {
            TableModel = _appCoreTable_model;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("AnalyticsDatasource", AnalyticsDatasource = function () {
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
            }());

            _export("AnalyticsDatasource", AnalyticsDatasource);
        }
    };
});
//# sourceMappingURL=datasource.js.map
