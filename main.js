// SOLUTION USING 3 ARRAYS

// GET VICTIMS

// var victimNames = []
// var victimPhones = []
// var victimStreets = []

// var numberOfVictims = prompt("How many VICTIMS are there?")

// for (var i = 1; i <= numberOfVictims; i++) {
// 	var victimName = prompt("Please enter the NAME for victim #" + i)
// 	victimNames.push(victimName)
// 	var victimPhone = prompt("Please enter the PHONE NUMBER for victim #" + i)
// 	victimPhones.push(victimPhone)
// 	var victimStreet = prompt("Please enter the STREET for victim #" + i)
// 	victimStreets.push(victimStreet)
// }

// GET VOLUNTEERS 

// var volunteerNames = []
// var volunteerPhones = []
// var volunteerStreets = []

// var numberOfVolunteers = prompt("How many VOLUNTEERS are there?")

// for (var i = 1; i <= numberOfVolunteers; i++) {
// 	var volunteerName = prompt("Please enter the NAME for volunteer #" + i)
// 	volunteerNames.push(volunteerName)
// 	var volunteerPhone = prompt("Please enter the PHONE NUMBER for volunteer #" + i)
// 	volunteerPhones.push(volunteerPhone)
// 	var volunteerStreet = prompt("Please enter the STREET for volunteer #" + i)
// 	volunteerStreets.push(volunteerStreet)
// }

// alert("# of VICTIMS: " + numberOfVictims + "\nNames: " + victimNames.join(", ") + "\n\n# of VOLUNTEERS: " + numberOfVolunteers + "\nNames: " + volunteerNames.join(", "))

// SOLUTION USING 2 ARRAYS OF OBJECTS

// GET VICTIMS

// var victims = []

// var numberOfVictims = prompt("How many VICTIMS are there?")

// for (var i = 0; i < numberOfVictims; i++) {

// 	var person = {}

// 	person.name = prompt("Please enter the NAME for victim #" + (i + 1))
// 	person.phone = prompt("Please enter the PHONE NUMBER for victim #" + (i + 1))
// 	person.street = prompt("Please enter the STREET for victim #" + (i + 1))
// 	victims.push(person)
// }

// GET VOLUNTEERS 		

// var volunteers = []

// var numberOfVolunteers = prompt("How many VOLUNTEERS are there?")

// for (var i = 0; i < numberOfVolunteers; i++) {

// 	var person = {}

// 	person.name = prompt("Please enter the NAME for volunteer #" + (i + 1))
// 	person.phone = prompt("Please enter the PHONE NUMBER for volunteer #" + (i + 1))
// 	person.street = prompt("Please enter the STREET for volunteer #" + (i + 1))
// 	volunteers.push(person)
// }

// alert("# of VICTIMS: " + numberOfVictims + "\nNames: " + victims.map( function(item) { return item.name}).join(", ") + "\n\n# of VOLUNTEERS: " + numberOfVolunteers + "\nNames: " + volunteers.map( function(item) { return item.name}).join(", "))

// SOLUTION FOR UNLIMITED VICTIMS AND VOLUNTEERS

// GET VICTIMS

var victims = []

var thereAreMore = true

while (thereAreMore) {

	var person = {}

	var personNumber = 1

	person.name = prompt("Please enter the NAME for victim #" + personNumber)
	person.phone = prompt("Please enter the PHONE NUMBER for victim #" + personNumber)
	person.street = prompt("Please enter the STREET for victim #" + personNumber)
	victims.push(person)

	if (confirm("Would you like do add another victim?")) {
		personNumber++
	} else {
		thereAreMore = false
	}
}

// GET VOLUNTEERS 		

var volunteers = []

var thereAreMore = true

while (thereAreMore) {

	var person = {}

	var personNumber = 1

	person.name = prompt("Please enter the NAME for volunteer #" + personNumber)
	person.phone = prompt("Please enter the PHONE NUMBER for volunteer #" + personNumber)
	person.street = prompt("Please enter the STREET for volunteer #" + personNumber)
	volunteers.push(person)
	if (confirm("Would you like do add another volunteer?")) {
		personNumber++
	} else {
		thereAreMore = false
	}
}

alert("# of VICTIMS: " + victims.length + "\nNames: " + victims.map( function(item) { return item.name }).join(", ") + "\n\n# of VOLUNTEERS: " + volunteers.length + "\nNames: " + volunteers.map( function(item) { return item.name}).join(", "))


// SOLUTION FOR PERSON IN NEED STREET MATCHING

var personInNeed = prompt("Please enter the NAME of a person in need and we'll provide a list of volunteers on the same street.")

var streetOfPersonInNeed = victims.filter( function(item) {
	if (item.name === personInNeed) {
		return item
	}
})

var streetMatch = volunteers.filter( function(item) {
 if (item.street === streetOfPersonInNeed[0].street) {
  return item 
}}).map(function(item) {
  	return item.name
  }).join(", ")

if (streetMatch.length > 0) {
	alert("The following volunteers live on the same street: \n" + streetMatch)
} else {
	alert("There are no volunteers living on that street. Sorry.")
}

// var victims = [
// 	{name : "John",
// 	phone : "123",
// 	street: "main"},
// 	{name : "Peter",
// 	phone : "456",
// 	street: "main"},
// 	{name : "Brad",
// 	phone : "456",
// 	street: "other"}
// ]

// var volunteers = [
// 	{name : "Betty",
// 	phone : "123",
// 	street: "main"},
// 	{name : "Paul",
// 	phone : "456",
// 	street: "other"},
// 	{name : "Steph",
// 	phone : "123",
// 	street: "main"}
// ]









