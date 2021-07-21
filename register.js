errorOnForm = false;




function User(email, pass, first, last, bday, age, address, phone, payment, color) {

    this.email = email;
    this.password = pass;
    this.firstName = first;
    this.lastName = last;
    this.dateOfBirth = bday;
    this.age = age;
    this.address = address;
    this.phoneNumber = phone;
    this.payment = payment;
    this.color = color;

    
}






function registerUser(){

    

    console.log("Button Clicked!");

    if (errorOnForm) {
        //show an error
        return; //get out of the function
    }

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirstName").val();

    //HW: get the values for all of the controls

    let last=$("#txtLastName").val();
    let bday=$("#dateDOB").val();
    let age=$("#numAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#telPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#selColor").val();

    let user = new User(email, password, first, last, bday, age, address, phone, payment, color);

    saveUser(user); //this fn exist in storageManager.js

    console.log(email, pass, first, last, bday, age, address, phone, payment, color);

    setNavInfo();


    //2nd part: Create an object constructor for User
   // create a user object with data from the input fields
    // console log the object

    clearForm();

}

function clearForm()  {


    // homework: clear every input field
    // set the select to first element
    // set the color back to black




}




function changeColor() {

    let color = $("#selColor").val();
    console.log("New Color", color);

    $("#hForm").css("color", color);
}

function validatePass() {
    let txtPass = $("#txtPassword");
    let password = txtPass.val();
    if(password.length < 5) {
        console.log("Error, password too short");
       txtPass.css('border', '2px solid red');
       displayError("Error: Password too short");

    }else {

        txtPass.css('border', '1px solid rgb(133, 133, 133)');
        hideError();
    }

}

function displayError(text) {

    $("#alertError").removeClass("hide").text(text);
    $("#btnSave").attr("disabled", "true");
    errorOnForm = true;
}

function hideError() {

    $("#alertError").addClass("hide");
    $("#btnSave").attr("disabled", false);
    errorOnForm = false;
}


function init() {
    console.log("Register Page!");

    $("#btnSave").click(registerUser);

    $("#selColor").change(changeColor);

    $("#txtPass").change(validatePass);

    

    
}

window.onload = init;