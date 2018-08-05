import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.component';
import { Http, Response } from '@angular/http';
import { PlaceService} from '../../places.service'
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers:[PlaceService]
})
export class AddPlaceComponent implements OnInit {

  place: Place[]
  selectedPlace:Place

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService
    .getPlaces()
    .then((place: Place[]) => {
      this.place = place.map((place) => {
               return place;
      });
    });
}

private getIndexOfPlaces = (placeId: String) => {
  return this.place.findIndex((place) => {
    return place._id === placeId;
  });
}

selectPlaces(place: Place) {
  this.selectedPlace = place;
}
  }


 /* createPlace() 
  {
    var place: Place = {
      place_name: '',
      place_owner: '',
      place_price:'',
    };

}*/
