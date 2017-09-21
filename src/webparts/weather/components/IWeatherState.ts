
export interface IWeatherState {
    status: string;
    items: IListItem[];
    temp: string;
  }

  export interface IListItem {
    location?: {
        "name": string,
        "region": string,
        "country": string,
        "lat": string,
        "lon": string,
        "tz_id": string,
        "localtime_epoch": string,
        "localtime": string
    };
    current?: {
        "last_updated_epoch": string,
        "last_updated": string,
        "temp_c": string,
        "temp_f": string,
        "is_day": string,
        "condition": {
            "text": string,
            "icon": string,
            "code": string
        },
        "wind_mph": string,
        "wind_kph": string,
        "wind_degree": string,
        "wind_dir": string,
        "pressure_mb": string,
        "pressure_in": string,
        "precip_mm": string,
        "precip_in": string,
        "humidity": string,
        "cloud": string,
        "feelslike_c": string,
        "feelslike_f": string,
        "vis_km": string,
        "vis_miles": string
    };
}