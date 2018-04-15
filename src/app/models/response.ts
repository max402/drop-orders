import {Area} from './area.model';
import {City} from './city.model';
import {Address} from './address.model';

export interface ResponseArea {
  data: Area[];
}

export interface ResponseCity {
  data: City[];
}

export interface ResponseAddress {
  data: Address[];
}



