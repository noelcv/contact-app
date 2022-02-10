let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.type = "text/javascript";

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

const addForm = document.querySelector("#add-form");
const inputFirstName = document.querySelector("#input-first-name");
const inputLastName = document.querySelector("#input-last-name");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const inputAddress = document.querySelector("#input-address");

const mainTable = document.querySelector("#main-table");
const tableHead = document.querySelector("#table-head");

const tableBody = document.querySelector("#table-body");

const rows = tableBody.children;
const searchArea = document.querySelector("#search-area");



const restartButton = document.querySelector("#restart-contact-button");


const clearFields = () => {

    document.getElementById("input-first-name").value = "";
    document.getElementById("input-last-name").value = "";
    document.getElementById("input-phone-number").value = "";
    document.getElementById("input-address").value = "";
}


const addRow = () => {
    
    //get the values
    const getFirstNameInput = inputFirstName.value.charAt(0).toUpperCase() + inputFirstName.value.substring(1).toLowerCase();
    const getLastNameInput =  inputLastName.value.charAt(0).toUpperCase() + inputLastName.value.substring(1).toLowerCase();
    const getPhoneNumberInput = inputPhoneNumber.value;
    const getAddressInput = inputAddress.value;


    //create field validation rules 

    //create an instance of a Contact
    let newContact = new Contact(getFirstNameInput,getLastNameInput,getPhoneNumberInput, getAddressInput);

    addressBook.push(newContact);
    console.log(addressBook);

    //create the tr and tds
    const row = document.createElement("tr");

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = `${newContact._firstName}`;
    tdFirstName.classList = "td-entry";

    const tdLastName = document.createElement('td');
    tdLastName.textContent = `${newContact._lastName}`;
    tdLastName.classList = "td-entry";

    const tdPhoneNumber = document.createElement('td');
    tdPhoneNumber.textContent = `${newContact._phoneNumber}`;
    tdLastName.classList = "td-entry";

    const tdAddress = document.createElement('td');
    tdAddress.textContent = `${newContact._address}`;
    tdAddress.classList = "td-entry";

    const editButton = document.createElement('button');
    editButton.textContent = "edit";
    editButton.classList = "button-edit-alt"

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "delete"
    deleteButton.classList = "button-delete-alt"
    
    tableBody.appendChild(row);
    row.appendChild(tdFirstName);
    row.appendChild(tdLastName);
    row.appendChild(tdPhoneNumber);
    row.appendChild(tdAddress);
    row.appendChild(editButton);
    row.appendChild(deleteButton);
    
    return row;
}

//Event Listener to create contact and add row
addForm.addEventListener("submit", (event) => {
    event.preventDefault();

        const row = addRow();

        tableBody.appendChild(row);
        clearFields();
    })


tableBody.addEventListener("click", (event) => {

    event.stopPropagation();

    if(event.target.tagName === "BUTTON") {
            const button = event.target;
            const row = button.parentNode;
            const tableBody = row.parentNode;
            if(button.textContent === "delete") {
    
             tableBody.removeChild(row);
            } else if (button.textContent === "edit") {
                const tdFirstName = row.children[0];
                const tdLastName = row.children[1];
                const tdPhoneNumber = row.children[2];
                const tdAddress = row.children[3];

                const inputFirstName = document.createElement("input");
                inputFirstName.type = "text";
                inputFirstName.value = tdFirstName.textContent.charAt(0).toUpperCase() + tdFirstName.textContent.substring(1).toLowerCase();
                row.insertBefore(inputFirstName, tdFirstName);
                row.removeChild(tdFirstName);

    

                const inputLastName = document.createElement("input");
                inputLastName.type = "text";
                inputLastName.value = tdLastName.textContent.charAt(0).toUpperCase() + tdLastName.textContent.substring(1).toLowerCase();
                row.insertBefore(inputLastName, tdLastName);
                row.removeChild(tdLastName);

                

                const inputPhoneNumber = document.createElement("input");
                inputPhoneNumber.type = "number";
                inputPhoneNumber.value = tdPhoneNumber.textContent;
                row.insertBefore(inputPhoneNumber, tdPhoneNumber);
                row.removeChild(tdPhoneNumber);

                const inputAddress = document.createElement("input");
                inputAddress.type = "textarea";
                inputAddress.value = tdAddress.textContent;
                row.insertBefore(inputAddress, tdAddress);
                row.removeChild(tdAddress);


                button.textContent = "save";

            } else if (button.textContent === "save") {
                const inputFirstName = row.children[0];
                const inputLastName = row.children[1];
                const inputPhoneNumber = row.children[2];
                const inputAddress = row.children[3];

                const tdFirstName = document.createElement('td');
                tdFirstName.textContent = inputFirstName.value.charAt(0).toUpperCase() + inputFirstName.value.substring(1).toLowerCase();                ;
                row.insertBefore(tdFirstName, inputFirstName);
                row.removeChild(inputFirstName);

                const tdLastName = document.createElement('td');
                tdLastName.textContent = inputLastName.value.charAt(0).toUpperCase() + inputLastName.value.substring(1).toLowerCase();
                row.insertBefore(tdLastName, inputLastName);
                row.removeChild(inputLastName);

                const tdPhoneNumber = document.createElement('td');
                tdPhoneNumber.textContent = inputPhoneNumber.value;
                row.insertBefore(tdPhoneNumber, inputPhoneNumber);
                row.removeChild(inputPhoneNumber);

                const tdAddress = document.createElement('td');
                tdAddress.textContent = inputAddress.value;
                row.insertBefore(tdAddress, inputAddress);
                row.removeChild(inputAddress);

                //this will create a new contact with the updated values, but it doesn't remove the original contact 
                const editedContact = new Contact(inputFirstName.value, inputLastName.value, inputPhoneNumber.value, inputAddress.value);
                addressBook.push(editedContact);

                console.log(editedContact);
                console.log(addressBook);

                button.textContent = "edit";
            }

        }


})

//event listener to clear the fields
restartButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearFields();
})


console.log(rows);

//227:243 searchTable() citation: AB Nation Programmers, "Build a Search Bar & Filter Table Using JavaScript", Youtube Video;
//change the function to display the results somewhere else
const searchTable = () => {
    let filter = document.getElementById("input-search-form").value.toUpperCase();
    console.log(filter);
    
    for(let i = 0 ; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[0];

        if (td) {
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                rows[i].getElementsByClassName.display = "";
            } else {
                rows[i].style.display = "none";
            }
        } 
    }
}

