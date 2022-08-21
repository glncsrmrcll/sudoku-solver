import { AxiosResponse } from 'axios';
import { BaseSyntheticEvent, Component } from 'react';
import { WithTranslation } from 'react-i18next';
import { SubscribeRequest } from '../interfaces/subscribeRequest.interface';
import { SubscribeResponse } from '../interfaces/subscribeResponse.interface';
import httpService from '../services/httpService';

export default class SubscribeForm extends Component<
  WithTranslation,
  SubscribeRequest
> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = { email: '', difficulty: 'easy' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: BaseSyntheticEvent): void {
    if (event.target.type === 'text') {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ difficulty: event.target.value });
    }
  }

  handleSubmit(event: BaseSyntheticEvent): void {
    event.preventDefault();

    const { t } = this.props;

    httpService
      .subscribe(this.state)
      .then((resp: AxiosResponse<SubscribeResponse> | void) => {
        if (resp)
          alert(
            t('subscribed', {
              diff: resp.data.difficulty,
              email: resp.data.email,
            })
          );
      });
  }

  render() {
    const { t } = this.props;

    return (
      <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl py-3 text-teal-500">{t('weekly')}</h2>
        <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder={t('emailPlaceholder')}
              aria-label="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="flex items-center py-2">
            <select
              className="block appearance-none w-full bg-white border border-teal-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={this.state.difficulty}
              onChange={this.handleChange}
            >
              <option value="easy">{t('difficulty1')}</option>
              <option value="medium">{t('difficulty2')}</option>
              <option value="hard">{t('difficulty3')}</option>
            </select>
          </div>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
            {t('signUp')}
          </button>
        </form>
      </div>
    );
  }
}
