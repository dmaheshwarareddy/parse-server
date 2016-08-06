import AdaptableController from './AdaptableController';
import { AnalyticsAdapter } from '../Adapters/Analytics/AnalyticsAdapter';

export class AnalyticsController extends AdaptableController {
  appOpened(req) {
    return Promise.resolve().then(() => {
      this.adapter.appOpened(req.body, req);
    }).then((response) => {
      return { response: response || {} };
    }).catch((err) => {
      return { response: {} };
    });
  }

  trackEvent(req) {
    return Promise.resolve().then(() => {
      return this.adapter.trackEvent(req.params.eventName, req.body, req);
    }).then((response) => {
      return { response: response || {} };
    }).catch((err) => {
      return { response: {} };
    });
  }

  expectedAdapterType() {
    return AnalyticsAdapter;
  }
}

export default AnalyticsController;
