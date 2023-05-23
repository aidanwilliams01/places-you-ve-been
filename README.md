Describe: ListOfPlaces()

Test: "It should return an object with one property (places)"
Code: new ListOfPlaces();
Expected Output: ListOfPlaces {places: {…}}

Test: "It should add a place to a list of places"
Code: listOfPlaces.addPlace(place);
listOfPlaces.places;
Expected Output: undefined
{placeholder: Place}

Describe: Place()

Test: "It should return an object with four properties (location, landmarks, time, notes)"
Code: new Place('placeholder', 'placeholder', 'placeholder', 'placeholder')
Expected Output: Place {location: 'placeholder', landmarks: 'placeholder', time: 'placeholder', notes: 'placeholder'}