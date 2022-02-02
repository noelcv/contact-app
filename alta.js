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


// UI class: Handles UI tasks

class Interface {
    static displayContacts() {
        const addressBook = [ ]; 
    

    const contacts = addressBook;

    contacts.forEach((contact) => Interface.addContactToCollection(contact));
    }

    static addContactToCollection(contact) {
        const tableBody = document.querySelector("#table-body");

        const row = document.createElement("tr");

        row.innerHTML = `
        <td class="load-first-letter">${contact._firstName.charAt(0)}</td>
        <td class="load-first-name">${contact._firstName}</td>
        <td class="load-last-name">${contact._lastName}</td>
        <td class="load-phone-number">${contact._phoneNumber}</td>
        <td class="load-phone-number">${contact._address}</td>
        <td><a href="#" class="button-edit-alt">Edit</a></td>
        <td><a href="#" class="button-delete-alt">Delete</a></td>
        
        `;

        tableBody.appendChild(row);
    }

    static editContact(element) {
        if(element.classList.contains("button-edit-alt")) {
            console.log(true)

            //store the values for the selected element
            let loadFirstName = element.parentElement.parentElement.childNodes[3].innerText;
            let loadLastName = element.parentElement.parentElement.childNodes[5].innerText;
            let loadPhoneNumber = element.parentElement.parentElement.childNodes[7].innerText;
            let loadAddress = element.parentElement.parentElement.childNodes[9].innerText;
            
            //confirm that the values are properly referenced
            

            //toggle the interface to switch between "Add Contact" and "Edit Contact"
            document.querySelector("#add-contact").style.display = "none";
            document.querySelector("#edit-contact").style.display = "inline-block";

            //pass the stored values to the fields of the Edit form
            document.getElementById("edit-first-name").value = loadFirstName;
            document.getElementById("edit-last-name").value = loadLastName;
            document.getElementById("edit-phone-number").value = loadPhoneNumber;
            document.getElementById("edit-address").value = loadAddress;

            //Event: submit the Edit Form with addEventListener 
            document.querySelector("#edit-contact").addEventListener("submit", (event)  => {

                event.preventDefault();

                //get new values and capitalize first letter for First Name and Last Name;
                let getNewFirstName = document.getElementById("edit-first-name").value;
                let newFirstName = getNewFirstName.charAt(0).toUpperCase()+getNewFirstName.substring(1).toLowerCase();
                let getNewLastName = document.getElementById("edit-last-name").value;
                let newLastName = getNewLastName.charAt(0).toUpperCase()+getNewLastName.substring(1).toLowerCase();
                let newPhoneNumber = document.getElementById("edit-phone-number").value;
                let newAddress = document.getElementById("edit-address").value;
                
                //confirm that the edit form is working and the values are properly stored
                

                ///OR Try to pass them using a setter method

                //pass new values into the target element
 
                //element.parentElement.parentElement.childNodes[3].innerText = newFirstName;
                //element.parentElement.parentElement.childNodes[5].innerText = newLastName;
                //element.parentElement.parentElement.childNodes[7].innerText = newPhoneNumber;
                //element.parentElement.parentElement.childNodes[9].innerText = newAddress;

                    //delete element
                    element.parentElement.parentElement.remove();

                    //create an instance of a Contact
                    const newEditedContact = new Contact(newFirstName, newLastName, newPhoneNumber, newAddress);

                    //add Contact to Interface
                    Interface.addContactToCollection(newEditedContact);
            
                console.log(newEditedContact)

                Interface.clearUserInputs();

                //toggle the interface to switch between "Edit Contact" and "Add Contact"
                document.querySelector("#add-contact").style.display = "inline-block";
                document.querySelector("#edit-contact").style.display = "none";

            })
        } 
    } 


    static deleteContact(element) {
        if(element.classList.contains("button-delete-alt")) { 
            element.parentElement.parentElement.remove();
        }
    }  

    static clearUserInputs() {
        //clear add-contact form fields
        document.getElementById("input-first-name").value = "";
        document.getElementById("input-last-name").value = "";
        document.getElementById("input-phone-number").value = "";
        document.getElementById("input-address").value = "";

        //clear edit-contact form fields
        document.getElementById("edit-first-name").value = "";
        document.getElementById("edit-last-name").value = "";
        document.getElementById("edit-phone-number").value = "";
        document.getElementById("edit-address").value = "";

    }

    

}

//Store Class: Handles Storage



//event: Display Contacts

document.addEventListener("DOMContentLoaded", Interface.displayContacts);


//event: add a Contact

document.querySelector("#add-contact").addEventListener("submit", (event)  => {
    
    event.preventDefault();
    //get values
    const getFirstName = document.getElementById("input-first-name").value;
    const firstNameInput = getFirstName.charAt(0).toUpperCase()+getFirstName.substring(1).toLowerCase();
    const getLastName = document.getElementById("input-last-name").value;
    const lastNameInput = getLastName.charAt(0).toUpperCase()+getLastName.substring(1).toLowerCase();
    const getPhoneNumber = document.getElementById("input-phone-number").value;
    const getAddress = document.getElementById("input-address").value;


    //Validation
     if(firstNameInput === "" || getPhoneNumber === "") {
        alert("this field is required"); 
    } else {

    //create an instance of a Contact
    const newContact = new Contact(firstNameInput,lastNameInput,getPhoneNumber,getAddress);

    //add Contact to Interface
    Interface.addContactToCollection(newContact);

    //clear input fields
    Interface.clearUserInputs();
    }


})


//Event: Reset input fields for adding new contact
    //document.querySelector("#reset-new-contact-button").addEventListener("click", (event) => {
        //Interface.clearUserInputs();
     //})



//Event: Edit contact in Interface
document.querySelector("#table-body").addEventListener("click", (event) => {
    Interface.editContact(event.target);
    
});



//Event: Delete contact with stop propagation.

document.querySelector("#table-body").addEventListener("click", (event) => {
    Interface.deleteContact(event.target)
});






