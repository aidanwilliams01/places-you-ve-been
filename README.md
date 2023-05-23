Describe: ListOfPlaces()

Test: "It should return an object with one property (places)"
Code: new ListOfPlaces();
Expected Output: ListOfPlaces {places: {…}}

Test: "It should add a place to a list of places"
Code: let listOfPlaces = new ListOfPlaces();
let place = new Place('placeholder', 'placeholder', 'placeholder', 'placeholder')
listOfPlaces.addPlace(place);
listOfPlaces.places;
Expected Output: undefined
undefined
undefined
{placeholder: Place}

Test: "It should add a place to a list of places using a unique ID"
Code: let listOfPlaces = new ListOfPlaces();
let place = new Place('placeholder', 'placeholder', 'placeholder', 'placeholder')
listOfPlaces.addPlace(place)
listOfPlaces.places[1]
Expected Output: undefined
undefined
undefined
Place {placeLocation: 'placeholder', landmarks: 'placeholder', time: 'placeholder', notes: 'placeholder', id: 1}

Describe: Place()

Test: "It should return an object with four properties (location, landmarks, time, notes)"
Code: new Place('placeholder', 'placeholder', 'placeholder', 'placeholder')
Expected Output: Place {location: 'placeholder', landmarks: 'placeholder', time: 'placeholder', notes: 'placeholder'}