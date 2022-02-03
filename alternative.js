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


const addForm = document.querySelector("#add-form");
const tableBody = document.querySelector("#table-body");
const inputFirstName = document.querySelector("#input-first-name");
const inputLastName = document.querySelector("#input-last-name");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const inputAddress = document.querySelector("#input-address");

const restartButton = document.querySelector("#restart-contact-button");


const clearFields = () => {

    document.getElementById("input-first-name").value = "";
    document.getElementById("input-last-name").value = "";
    document.getElementById("input-phone-number").value = "";
    document.getElementById("input-address").value = "";
}


const addRow = () => {
        
    const row = document.createElement("tr");

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = inputFirstName.value.charAt(0).toUpperCase() + inputFirstName.value.substring(1).toLowerCase();

    const tdLastName = document.createElement('td');
    tdLastName.textContent = inputLastName.value.charAt(0).toUpperCase() + inputLastName.value.substring(1).toLowerCase();

    const tdPhoneNumber = document.createElement('td');
    tdPhoneNumber.textContent = inputPhoneNumber.value;

    const tdAddress = document.createElement('td');
    tdAddress.textContent = inputAddress.value;

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

                button.textContent = "edit";
            }

        }


    })




restartButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearFields();
})
