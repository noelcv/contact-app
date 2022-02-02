
let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.type = "text/javascript";









$("#add-contact-form").on("submit", function(event) {

    event.preventDefault();
    
    let getFirstName = $(this).find('#label-first-name').val();
    let firstName = getFirstName.charAt(0).toUpperCase()+getFirstName.substring(1).toLowerCase();
    
    let getLastName = $(this).find('#label-last-name').val();
    let lastName = getLastName.charAt(0).toUpperCase()+getLastName.substring(1).toLowerCase(); //add validation rule to capitalize other surnames
    
    let getPhoneNumber = $(this).find('#label-phone-number').val();
    let phoneNumber = getPhoneNumber;
    
    let getAddress = $(this).find("#label-address").val();
    let address = getAddress;

    $("#span-log-profile-first-name").text(firstName);
    $("#span-log-profile-last-name").text(lastName);
    $("#span-log-profile-phone-number").text(getPhoneNumber);
    $("#span-log-profile-address").text(address);
    $("#main-contact").css("display", "none")
    $("#contact-profile").css("display", "on");

   
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Phone Number: " + phoneNumber);
    console.log("Address: " + address);

})

$(document).ready(function() {

});



/*
class Contact {
    constructor(firstName, lastName, phoneNumber, address) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get address() {
        return this._address;
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }

    set phoneNumber(newPhoneNumber) {
        this._phoneNumber = newPhoneNumber;
    }

    set address(newAddress) {
        this._address = newAddress;
    }

}


const addContact = (firstName, lastName, phoneNumber, address) => {
    const newContact = new Contact(firstName, lastName, phoneNumber, address);
    addressBook.push(newContact);
}




const editContact = () => {
    
}

const addressBook = {
    _contacts: [
        {firstName: firstName, lastName:lastName, phoneNumber:phoneNumber, address:address}
    ],

addContact(firstName, lastName, phoneNumber, address) {
   let contact = {firstName: firstName, lastName: lastName, phoneNumber:phoneNumber, address:address};
   this._contacts.push(contact)
}

};*/