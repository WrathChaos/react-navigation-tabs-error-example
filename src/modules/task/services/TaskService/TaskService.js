import CitizenRequest from '../../../../services/api-client/CitizenRequest';
import PHARMACY_ACTIONS from './redux/action-types.constant';

export default class TaskService {
  static getAll(type) {
    if (type === 'onDuty') {
      return (dispatch) => CitizenRequest.crGet(PHARMACY_URLS.GET_ALL_PHARMACIES_ON_DUTY)
        .then((pharmacies) => pharmacies.map((t) => new Pharmacy(t)))
        .then((pharmacies) => dispatch({
          type: PHARMACY_ACTIONS.GET_ALL_PHARMACIES,
          payload: pharmacies,
        }));
    }

    return (dispatch) => CitizenRequest.crGet(PHARMACY_URLS.GET_ALL_PHARMACIES)
      .then((pharmacies) => pharmacies.map((t) => new Pharmacy(t)))
      .then((pharmacies) => dispatch({
        type: PHARMACY_ACTIONS.GET_ALL_PHARMACIES,
        payload: pharmacies,
      }));
  }
}
