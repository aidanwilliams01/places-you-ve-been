function ListOfPlaces() {
  this.places = {};
  this.currentId = 0;
}

function Place(placeLocation, landmarks, time, notes) {
  this.placeLocation = placeLocation;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

ListOfPlaces.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

ListOfPlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};