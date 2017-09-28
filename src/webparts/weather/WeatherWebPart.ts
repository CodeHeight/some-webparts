import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WeatherWebPartStrings';
import Weather from './components/Weather';
import { IWeatherProps } from './components/IWeatherProps';
import { IWeatherState } from './components/IWeatherState';
import { IWeatherWebPartProps } from './IWeatherWebPartProps';

export default class WeatherWebPart extends BaseClientSideWebPart<IWeatherWebPartProps> {

  public render(): void {
    var weatherAppApiKey : string = "6b5b2f67bad748fb9ff222828171404";
    
        const element: React.ReactElement<IWeatherProps> = React.createElement(Weather, {
          basicHttpClient: this.context.httpClient,
          weatherApiKey: weatherAppApiKey,
          zipcode: this.properties.zipcode,
        });

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneZipcode
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('zipcode', {
                  label: strings.ZipcodeFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
