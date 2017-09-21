declare interface IWeatherWebPartStrings {
  PropertyPaneZipcode: string;
  BasicGroupName: string;
  ZipcodeFieldLabel: string;
}

declare module 'WeatherWebPartStrings' {
  const strings: IWeatherWebPartStrings;
  export = strings;
}
