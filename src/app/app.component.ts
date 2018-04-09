import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NpService} from './np.service';
import {Observable} from 'rxjs/Observable';
import {ResponseArea} from './np.interfaces/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NpService]
})
export class AppComponent implements OnInit {

  areas = [];

  constructor(private npService: NpService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.npService.getAreas()
      .subscribe(areas => {
        areas.data.map(area => this.areas.push(area.Description));
      });
    // const npUrl = 'https://api.novaposhta.ua/v2.0/json/';
    // const apikey = 'abfd39654d60ff2d5551a9142285beaa';
    // let requestBody = '{ "apiKey": "' + apikey + '", "modelName": "Address", "calledMethod": "getAreas"}';
    // let objectObservable = this.httpClient.post<ResponseArea>(npUrl, requestBody)
    //   .subscribe(areas => { areas.data.map(area => this.areas.push(area.Description)); });
    //   //.subscribe(area => console.log(area));
    // console.log(objectObservable);
    // // return objectObservable.map((area) => area.data);
  }

}
