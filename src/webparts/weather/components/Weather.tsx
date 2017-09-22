import * as React from 'react';
import styles from './Weather.module.scss';
import { css } from 'office-ui-fabric-react';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { IWeatherProps } from './IWeatherProps';
import { IWeatherState, IListItem } from './IWeatherState'
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';

export default class Weather extends React.Component<IWeatherProps, IWeatherState> {
  constructor(props: IWeatherProps, state: IWeatherState) {
    super(props);

    this.state = {
      status: this.listNotConfigured(this.props) ? 'Please configure list in Web Part properties' : 'Ready',
      items: [],
      temp: ""
    };
  }

  public componentWillReceiveProps(nextProps: IWeatherProps): void {
    this.getWeatherCondition({location: nextProps.zipcode, apiKey: nextProps.weatherApiKey});
  }

  public render(): JSX.Element {
    const items: JSX.Element[] = this.state.items.map((item: IListItem, i: number): JSX.Element => {
        return (
          <div key={item.location.name} className='ms-bgColor-neutralSecondary'>
            <img className={css(styles.topWeather)} src={item.current.condition.icon}/>
            <span className='ms-font-xxl ms-fontColor-neutralLight'>{item.location.name}: 
              {this.state.temp}&deg;F - {item.current.condition.text} with {item.current.humidity}&#37; humidity</span>
          </div>
        );
    });

    return (
      <div className={styles.weather2}>
          <div className={css(styles.weatherContainer)} style={{backgroundImage: `url('http://loremflickr.com/700/300/${this.props.zipcode}')`}}>
            <div className='ms-Grid-col ms-u-lg12 ms-u-xl12'>
              {items}
            </div>
        </div>
      </div>
    );
}


public componentDidMount() {
  console.log("componentDidMount!!");
  this.getWeatherCondition({location: this.props.zipcode, apiKey: this.props.weatherApiKey});
}

private getWeatherCondition(options : any): void {
  var loc = options.location;
  var apiKey = options.apiKey;
  var httpClientOptions : IHttpClientOptions = {};

  httpClientOptions.headers = {
      'Accept': 'application/json;odata=nometadata'
  };

  this.props.basicHttpClient.get(`https://api.apixu.com/v1/current.json?q=${loc}&key=${apiKey}`,
      HttpClient.configurations.v1,
      httpClientOptions
      )
      .then((response: HttpClientResponse): Promise<IListItem> => {
          return response.json();
      })
      .then((response: IListItem): void => {
          this.setState({
              status: `Successfully loaded ${response} items`,
              items: [response],
              temp: response.current.temp_f
          });
          }, (error: any): void => {
          this.setState({
              status: 'Loading all items failed with error: ' + error,
              items: [],
              temp: ""
          });
      });
}

private listNotConfigured(props: IWeatherProps): boolean {
  return props.zipcode === undefined ||
    props.zipcode === null ||
    props.zipcode.length === 0 ||
    props.weatherApiKey === undefined ||
    props.weatherApiKey === null ||
    props.weatherApiKey.length === 0;
  }
}