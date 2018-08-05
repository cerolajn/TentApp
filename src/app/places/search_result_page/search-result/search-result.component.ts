import { Component, OnInit } from '@angular/core';
import { Places } from '../places.component';
import { AddPlaceComponent } from './add_place_page/add-place/add-place.component';
import { PlaceService } from '../../places.service';


@Component({
  selector: 'place-list',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers:[PlaceService]
})
export class SearchResultComponent implements OnInit {
 
  places: Place[]
  selectedPlace: Place
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService
    .getPlaces()
    .then((places: Place[]) => {
      this.places = places.map((place) => {
        if (!place.name) {
          place.name = {
            location: '',
            owner: '',
            price:'',
          }
        }
        return place;
      });
    });

    private getIndexOfPlaces = (placeId: String) => {
      return this.places.findIndex((place) => {
        return place._id === placeId;
      });
  }

  selectPlace(place: Place) {
    this.selectedPlace = place
  }

  createNewPlace() {
    var place: Place = {
      name: '',
      location: '',
      owner:'',
      price:'',
      }
    };

    // By default, a newly-created contact will have the selected state.
    this.selectPlace(Place);
  }

  deletePlace = (placeId: String) => {
    var idx = this.getIndexOfPlace(placeId);
    if (idx !== -1) {
      this.places.splice(idx, 1);
      this.selectPlace(null);
    }
    return this.places;
  }

  addPlace = (place: Place) => {
    this.places.push(places);
    this.selectPlace(places);
    return this.places;
  }

  updatePlace = (place: Place) => {
    var idx = this.getIndexOfPlace(palce._id);
    if (idx !== -1) {
      this.places[idx] = places;
      this.selectPlaces(places);
    }
    return this.places;
  }
  
 

}
