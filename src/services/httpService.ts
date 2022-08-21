import axios from 'axios';
import { t } from 'i18next';
import { SubscribeRequest } from '../interfaces/subscribeRequest.interface';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

async function subscribe(req: SubscribeRequest) {
  return api.post('/subscribe', req).catch(function (error: Error) {
    if (error.message.endsWith('400')) {
      alert(t('emailError'));
    } else {
      alert(error.message);
    }
  });
}

const httpService = {
  subscribe,
};

export default httpService;
