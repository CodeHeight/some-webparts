import { HttpClient } from '@microsoft/sp-http';

export interface IWeatherProps {
  basicHttpClient: HttpClient;
  weatherApiKey: string;
  zipcode: string;
}
