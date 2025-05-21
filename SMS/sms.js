const { consumers } = require("nodemailer/lib/xoauth2")

const prompt = require("prompt-sync")()

function printInfo(){
    console.log("Contact Management System")
    console.log("--------------------------")
    console.log("1. Add a Contact")
    console.log("2. Delete a Contact")
    console.log("3. View Contact")
    console.log("4. Search Contacts")
    console.log("5. Exit")
}

function addContact(){
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const phone=prompt("Number: ")
    const contact={
        name:name,
        email:email,
        phone:phone,
    }
    contacts.push(contact)
}

function deleteContact(){
    console.log("Contact ID")
    for(let i=0;i<contacts.length;i++){
        const contact=contacts[i]
        console.log((i+1).toString()+":",contact.name)
    }
    const num = parseInt(prompt("Enter an ID: "))
    if (isNaN(num) || num>contacts.length){
        console.log("Invalid.")
        return
    }
    contacts.splice(num-1,1)
    console.log("Removed.")
}
function searchContact(){
    const searchString=prompt("Search: ").toLowerCase();
    const res=[];

    for (let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString)){
            res.push(contact)
        }
    }
}
function lsitContact(contacts){
    for (let contact  of contacts){
        console.log("\n------------------------\n");
        console.log('Name:',contact.name);
        console.log('Email:',contact.email);
        console.log('Phone:',contact.phone);
    }
}

printInfo()

const contacts=[]
let keepgo=true;
while(keepgo){
    const num= prompt("Enter an opeation (1-5): ")
    switch(num){
        case "1": addContact()
            break;
        case "2":deleteContact()
            break;
        case "3":lsitContact(contacts)
            break;
        case "4":searchContact()
            break;
        case "5":
            keepgo=false;
            break;
        default:
            console.log("Invalid...")
            break;
    }
}

