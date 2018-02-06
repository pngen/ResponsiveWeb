// define the functions
function Card(name,email,address,phone) {
	this.name = name;
	this.email = email;
	this.address = address;
	this.phone = phone;
	this.printCard = printCard;
}

function printCard() {
	var nameLine = "<strong>Name: </strong>" + this.name + "<br>\n";
	var emailLine = "<strong>Email: </strong>" + this.email + "<br>\n";
	var addressLine = "<strong>Address: </strong>" + this.address + "<br>\n";
	var phoneLine = "<strong>Phone: </strong>" + this.phone + "<hr>";
	document.write(nameLine, emailLine, addressLine, phoneLine);
}

// Create the objects

var sue = new Card("Sue Sathers", "sue@sathers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876");
var fred = new Card("Fred Fanboy", "fred@gfanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-1344");
var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344");
		
// Now print them
sue.printCard();
fred.printCard();
jimbo.printCard();