

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


const mainTable = $(this).find("#main-table");
const tableHead = $(this).find("#table-head");

const tableBody = $(this).find("#table-body");

const rows = tableBody.children;
const searchArea = $(this).find("#search-area");


const addRow = () => {
    
    //get the values from the form
    const inputFirstName = $(this).find('#input-first-name').val();
    const inputLastName = $(this).find("#input-last-name").val();
    const inputPhoneNumber = $(this).find("#input-phone-number").val();
    const inputAddress = $(this).find("#input-address").val();
    //create field validation rules 

    //create an instance of a Contact
    let newContact = new Contact(inputFirstName, inputLastName, inputPhoneNumber, inputAddress);

    addressBook.push(newContact);
    

    //create the tr and tds
    $('#table-body').append(
        '<tr class="row"><td class="td-entry">'+newContact.firstName+'</td>'
        +'<td class="td-entry">'+newContact.lastName+'</td>'
        +'<td class="td-entry">'+newContact.phoneNumber+'</td>'
        +'<td class="td-entry">'+newContact.address+'</td>'
        +'<td>'+'<button class="button-edit-alt" value="edit">'+'Edit'+'</button>'+'</td>'
        +'<td>'+'<button class="button-delete-alt" value="delete">'+'Delete'+'</button>'+'</td>'
        +'</tr>')

        console.log(addressBook);
        console.log(inputFirstName);
        console.log(inputLastName);
        console.log(inputPhoneNumber);
        console.log(inputAddress);
}

const clearFields = () => {

    $("#input-first-name").val("");
    $("#input-last-name").val("")
    $("#input-phone-number").val("");
    $("#input-address").val("");
}

//Event Listener to create contact, add row and clear user inputs
addForm.on("submit", (event) => {
    event.preventDefault();
    addRow();
    clearFields();
    })


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
        console.log(button)
        let row = button.closest('tr')
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
            let row = button.closest('tr')
            row.find(".td-entry")        
                .removeClass("editing-mode")
                .attr("contenteditable", "false")
                .focusout();

            button.html("Edit")
                 .removeAttr("save-button")
                  .removeClass("save-button")
                  .addClass("button-edit-alt")
                  .attr("id", "button-edit-alt");
                
            console.log("now it's working");
            console.log(button);
        })
    }





const restartButton = $(this).find("#restart-contact-button");

//event listener to clear the fields
restartButton.on("click", (event) => {
    event.preventDefault();
    clearFields();
})

});




//227:243 searchTable() citation: AB Nation Programmers, "Build a Search Bar & Filter Table Using JavaScript", Youtube Video;
/*change the function to display the results somewhere else
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

or

const searchTable = (value) => {
    $(".table-body").each(function () {
        let found = "false";
        $(this).each(function(){
            if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                if(found === "true") {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            }
        })
    })
}
 

$("#input-search-form").keyup(function() {
    searchTable($(this).val());
})

$(this).before('<form action="#" method="GET" id="edit-form">'+
        '<td><input type="text" class="edit-entry" id="edit-first-name" name="edit-first-name" value="" placeholder="First name" required></td>' 
        +'<td><input type="text" class="edit-entry-alt"id="edit-last-name" name="edit-last-name" placeholder="Last name" required></td>'
        +'<td><input type="number" class="edit-entry" id="edit-phone-number" name="edit-phone-number" minlenght="3" maxlength="12" placeholder="00352-000-000-000" required></td>' 
        +'<td><input type="textarea" class="edit-entry" id="edit-address" name="edit-address" placeholder="Num, Street, City" required></td>'
        +'</form>')
        
*/
});