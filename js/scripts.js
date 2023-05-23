function ListOfPlaces() {
  this.places = {};
}

function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

ListOfPlaces.prototype.addPlace = function(place) {
  this.places[location] = place;
};