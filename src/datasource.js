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

    //Since we don't have / EP which returns 200 using /tables EP
    testDatasource() {
        return this.backendSrv.datasourceRequest({
            url: this.url + "/tables",
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return { status: "success", message: "Analytics data source is working", title: "Success" };
            }
        });
    }
}
