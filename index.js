
const addressBook = {
    _contacts: [
        {firstName: firstName, lastName:lastName, phoneNumber:phoneNumber, address:address}
    ],

addContact(firstName, lastName, phoneNumber, address) {
   let contact = {firstName: firstName, lastName: lastName, phoneNumber:phoneNumber, address:address};
   this._contacts.push(contact)
}

};

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

$('#input-search-form').text(firstName.contact)