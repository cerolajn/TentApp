import { Injectable } from '@angular/core';
import { Place } from './places.component';
import { Http, Response } from '@angular/http';



@Injectable()
export class PlaceService {
  private placesUrl = '/api/places';
  constructor(private http: Http) {}
  


