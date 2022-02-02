Codeworks Assignment: Build a simple address book app with HTML, CSS, JavaScript and JQuery.

Here, I will document the evolution:
1.the first step was to put the ball rolling and create an HTML structure to play around and start visualizing how the app will look like: what kind of buttons, workflows, etc.


Here I will also add some things that will be needed:

functions to:
    - addContact();
    - editContact();
    - deleteContact();


class Contact(firstName, lastName, phoneNumber, address): 
   -additionally, we will need to index it to the respective letter with charAt(0);



HTML Form Validation :
    - check if userInput is within a minlength and maxlength
    - for phone number: we might have to elaborate a function to validate if the userInput matches a regEx. -
        - the dificulty is that phone numbers change drastically according to its region or country 
        - Consider using ParsleyJS - an open source form validation library - parsleyjs.org - it relies on JQuery;
            ""


The search form shall at least look up and retrieve:
    - contacts according to the user input;

    - On an Epic level, we can create advanced filter options (firstName, lastName, address, gender, etc)
    


Manipulating the DOM

I am now trying to get a grasp of the jQuery methods


scroll jquery method 
$(".classname").on("scroll", function() {}) 

<script>
        $(function(){
            $("#td-first-name").text('');
            $("#td-last-name").text('');
            $("#td-phone-number").text('');
            $("#td-address").text('');

        })
    </script>



DOM Manipulation

const body = document.body
const div = document.createElement("div")
div.innerText = "Hello World"
div.innerContent = "Hello World"
div.innerHTML = "<strong>Hello World</strong>"
body.append(div)

const div = document.querySelector('div')''

const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

spanBye.remove(); -- better
div.append(spanBye);
div.removeChild(spanHi);


spanHi.getAttribute("id")
spanHi.title();

spanHi.setAttribute("id, "adasdad") 
spanHi.id = "adasdad"
spanHi.RemoveAttribute("html");

spanHi.dataset(); // return the data- attributes of an ID
spanHi.dataset.propertyName = "hi"


spanHi.classList.add("new-class");
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi3", true)

spanHi.style.color = "red"

spanHi.style.backgroundColor = "red " //you have to camelCase the css property



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


const getValues = () => {
    let getFirstName = document.getElementById("input-first-name").value;
    let firstNameInput = getFirstName.charAt(0).toUpperCase()+getFirstName.substring(1).toLowerCase();
    let getLastName = document.getElementById("input-last-name").value;
    let lastNameInput = getLastName.charAt(0).toUpperCase()+getLastName.substring(1).toLowerCase();
    let getPhoneNumber = document.getElementById("input-phone-number").value;
    let getAddress = document.getElementById("input-address").value;

    document.getElementById("input-first-name").value = "";
    document.getElementById("input-last-name").value = "";
    document.getElementById("input-phone-number").value = "";
    document.getElementById("input-address").value = "";



    let newContact = new Contact(firstNameInput,lastNameInput,getPhoneNumber,getAddress);
    newContact.firstName = firstNameInput;
    newContact.lastName = lastNameInput;
    newContact.phoneNumber = getPhoneNumber;
    newContact.address = getAddress;

  addressBook.push(newContact);

  console.log(addressBook);
  console.log(typeof addressBook);

  let tableBody = document.getElementById("table-body");
    
  tableBody.innerHTML = "";
  
for(let i = 0; i=addressBook.length-1; i++) {
    
     
        let rowFirstLetter = addressBook[i]["firstName"][0];
        let rowFirstName = addressBook[i]["firstName"];
        let rowLastName = addressBook[i]["lastName"];
        let rowPhoneNumber = addressBook[i]["phoneNumber"];
        let rowAddress = addressBook[i]["address"];  

    

        tableBody.innerHTML = "<tr>" + 
                                    "<td>"+rowFirstLetter+"</td>" +
                                    "<td>"+rowFirstName+"</td>" +
                                    "<td>"+rowLastName+"</td>" +
                                    "<td>"+rowPhoneNumber+"</td>" +
                                    "<td>"+rowAddress+"</td>" +
                                "</tr>";
    
  }




 
  
}
-->