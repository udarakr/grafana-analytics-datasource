import {AnalyticsDatasource} from './datasource';
import {AnalyticsDatasourceQueryCtrl} from './query_ctrl';

class AnalyticsConfigCtrl {}
AnalyticsConfigCtrl.templateUrl = 'partials/config.html';

class AnalyticsQueryOptionsCtrl {}
AnalyticsQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
  AnalyticsDatasource as Datasource,
  AnalyticsDatasourceQueryCtrl as QueryCtrl,
  AnalyticsConfigCtrl as ConfigCtrl,
  AnalyticsQueryOptionsCtrl as QueryOptionsCtrl
};
