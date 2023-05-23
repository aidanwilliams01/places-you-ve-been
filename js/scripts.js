function ListOfPlaces() {
  this.places = {};
}

function Place(placeLocation, landmarks, time, notes) {
  this.placeLocation = placeLocation;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

ListOfPlaces.prototype.addPlace = function(place) {
  this.places[place.placeLocation] = place;
};