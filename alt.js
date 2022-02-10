let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.type = "text/javascript";



const addressBook = [];

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


/*const domFirstName = document.getElementById("input-first-name").value;
const domLastName = document.getElementById("input-last-name").value;
const domPhoneNumber = document.getElementById("input-phone-number").value;
const domAddress = document.getElementById("input-address").value;
 n   
console.log(domFirstName);
console.log(domLastName);
console.log(domPhoneNumber)
console.log(domAddress)
*/

const addContact = (a,b,c,d) => {
  let newContact = new Contact();
  newContact.firstName = a;
  newContact.lastName = b;
  newContact.phoneNumber = c;
  newContact.address = d;

  addressBook.push(newContact);
}


$("#submit-new-contact-button").on("submit", function(event) {

event.preventDefault();

let getFirstName = $(this).find('#input-first-name').val();
let firstNameInput = getFirstName.charAt(0).toUpperCase()+getFirstName.substring(1).toLowerCase();

let getLastName = $(this).find('#input-last-name').val();
let lastNameInput = getLastName.charAt(0).toUpperCase()+getLastName.substring(1).toLowerCase(); //add validation rule to capitalize other surnames

let getPhoneNumber = $(this).find('#input-phone-number').val();
let phoneNumberInput = getPhoneNumber;

let getAddress = $(this).find("#input-address").val();
let addressInput = getAddress;

addContact(firstNameInput, lastNameInput, phoneNumberInput, addressInput)
console.log(addressBook)
})




$(document).ready(function() {

});

/* 
$("#td-first-name").attr("");






$("#button-add-contact-alt").on("click", function(event) {

    event.preventDefault();
    $(".table-body").html();
})


$("#button-edit-alt").on("click", function(event) {

    event.preventDefault();

    $("#td-first-name").show()
    $(".table-entry").append();


})

$("#button-delete-alt").on("click", function(event) {

    event.preventDefault();

    $(".table-entry").remove();


*/