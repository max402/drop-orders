import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/operators';
import {ResponseAddress, ResponseArea, ResponseCity} from './models/response';

@Injectable()
export class NpService {
  npUrl = 'https://api.novaposhta.ua/v2.0/json/';
  apikey = '0dc2558314e8f3fa52ca16491b6f1c52';

  constructor(private httpClient: HttpClient) {}

  getAreas() {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "getAreas"}';
    return this.httpClient.post<ResponseArea>(this.npUrl, requestBody);
  }

  getCities() {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "getCities"}';
    return this.httpClient.post<ResponseCity>(this.npUrl, requestBody);
  }

  searchSettlements(cityName, limit) {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "searchSettlements"},' +
                        '"methodProperties": {"CityName": "' + cityName + '", "Limit": ' + limit + '} }';
    this.httpClient.post<ResponseAddress>(this.npUrl, requestBody);
  }

}
