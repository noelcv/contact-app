$(document).ready(function() {

//Contact Class: represents a Contact

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

// Interface

const addressBook = [];

const addForm = $(this).find("#add-form");

// create a function to add a contact to the Collection
const addRow = () => {
    
    //get the values from the form
    const getFirstName = $(this).find('#input-first-name').val();
    const inputFirstName = getFirstName.charAt(0).toUpperCase()+getFirstName.substring(1).toLowerCase();
    const getLastName = $(this).find("#input-last-name").val();
    const inputLastName = getLastName.charAt(0).toUpperCase()+getLastName.substring(1).toLowerCase();
    const inputPhoneNumber = $(this).find("#input-phone-number").val();
    const inputAddress = $(this).find("#input-address").val();
    
    //create an instance of a Contact
    let newContact = new Contact(inputFirstName, inputLastName, inputPhoneNumber, inputAddress);
    addressBook.push(newContact);
    
    //create the tr and tds
    $('#table-body').append(
        '<tr class="row"><td class="td-entry" id="td-first-name" pattern=".{2,35}" required>'+newContact.firstName+'</td>'
        +'<td class="td-entry" id="td-last-name" pattern=".{2,35}" required>'+newContact.lastName+'</td>'
        +'<td class="td-entry" id="td-phone-number" type="tel" minlength="3" maxlength="18" required>'+newContact.phoneNumber+'</td>'
        +'<td class="td-entry" id="td-address"type="textarea" pattern=".{2,70}" required>'+newContact.address+'</td>'
        +'<td>'+'<button class="button-edit-alt" value="edit">'+'Edit'+'</button>'+'</td>'
        +'<td>'+'<button class="button-delete-alt" value="delete">'+'Delete'+'</button>'+'</td>'
        +'</tr>')
}

//create a function to clear user inputs
const clearFields = () => {

    $("#input-first-name").val("");
    $("#input-last-name").val("")
    $("#input-phone-number").val("");
    $("#input-address").val("");
}

//Event Listener to validate inputs, create contact, add row and clear user inputs

addForm.on("submit", (event) => {
        
    event.preventDefault();
    addRow();
    clearFields();
    })

//Event listener for the different possible table actions: delete row, edit and save contact.
$(".table-body").on("click", (event) => {

    event.stopPropagation();

    const button = $(event.target);
    
    if(button.hasClass("button-delete-alt")) {
        console.log(true)    
        button.parent().parent().remove();
        console.log(addressBook); 
    }

    if(button.hasClass("button-edit-alt")) {
        button.on("click", (event) => {
            event.preventDefault();
        
        console.log(button);
        let row = button.closest("tr");

        let delButton = row.find(".button-delete-alt");
        delButton.hide()

        row.find(".td-entry")        
            .addClass("editing-mode")
            .attr("contenteditable", "true")
            .focus();

        button.html("save")
            .removeClass("button-edit-alt")
            .addClass("save-button")
            .attr("id", "save-button");
        })
    }

    if(button.hasClass("save-button")) {
        button.on("click", (event) => {
            event.preventDefault();

            let row = button.closest('tr');

            let originalFirstName = row.find("#td-first-name").html();
            let originalLastName = row.find("#td-last-name").html();
            let originalPhoneNumber = row.find("#td-phone-number").html();
            let originalAddress = row.find("#td-address").html();

            //create validation rules and error alerts for each field
            if(originalFirstName.length < 2) {
                alert("First Name: Not so short, my friend! This field requires 2 characters");
                event.stopImmediatePropagation();                
            } else if(originalLastName.length < 2) {
                alert("Last Name: Too short for a family name. Please, type at least 2 letters");
                event.stopImmediatePropagation(); 
            } else if(originalPhoneNumber.length < 3) {
                alert("A phone number needs at least 3 numbers");
                event.stopImmediatePropagation(); 
            } else if(originalAddress.length < 5) {
                alert("Address: Too short! Please, type at least 5 characters");
                event.stopImmediatePropagation(); 
            }
            else {row.find(".td-entry")        
                    .removeClass("editing-mode")
                    .attr("contenteditable", "false")
                    .focusout();

                    button.html("Edit")
                        .removeAttr("save-button")
                        .removeClass("save-button")
                        .addClass("button-edit-alt")
                        .attr("id", "button-edit-alt");

                    let delButton = row.find(".button-delete-alt");
                        delButton.show();
            }
        })
    }

});

const restartButton = $(this).find("#restart-contact-button");
//event listener to clear the fields
restartButton.on("click", (event) => {
    event.preventDefault();
    clearFields();
})

//add an event listener to filter the table and display the search result
//lines 186:191 adapted from "Filter Table Data with JQuery | Create a Search Bar & Filter Table | Filter HTML table with Jquery" 
//source: https://www.youtube.com/watch?v=xCsGWCS0FR8&ab_channel=TheProviders

$("#input-search-form").on("keyup", function(){
    let userInput = $(this).val().toLowerCase();
    $("#main-table tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1)
    })
})

});
