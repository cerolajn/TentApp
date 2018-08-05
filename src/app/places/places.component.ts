import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class Place {

  _id:String;
  place_name: String;
  place_owner: String;
  place_price:String;
 // place_image: [Image];
  placeavailability:Boolean;
  placestart_day:Date;
  placeend_day:Date;
}
