import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ResponseAddress, ResponseArea, ResponseCity} from './models/response';

@Injectable()
export class NpService {
  npUrl = 'https://api.novaposhta.ua/v2.0/json/';
  apikey = 'abfd39654d60ff2d5551a9142285beaa';

  constructor(private httpClient: HttpClient) {}

  getAreas() {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "getAreas"}';
    return this.httpClient.post<ResponseArea>(this.npUrl, requestBody);
  }

  getCities() {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "getCities"}';
    return this.httpClient.post<ResponseCity>(this.npUrl, requestBody);
  }

  searchSettlements(searchString, limit) {
    const requestBody = '{ "apiKey": "' + this.apikey + '", "modelName": "Address", "calledMethod": "searchSettlements"}';
    this.httpClient.post<ResponseAddress>(this.npUrl, requestBody);
  }

}
