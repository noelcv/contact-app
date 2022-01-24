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
    
