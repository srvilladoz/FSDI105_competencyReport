
function login() {

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();

    console.log(email, password);

    let usersList = readUsers();
    let found = false;
    for (let i=0; i < usersList.length; i++) {
        let user = usersList[i];
        if(user.email === email && user.password === password) {
            found = true;
            console.log("You are now logged in");

            saveLoggedIn(user);

            window.location("users.html");
        }

        
    }

    if (!found) {

        console.error("Invalid Credentials");
        $("#alertError").removeClass("hide");
        setTimeout(init, 5000);
    }
}






function showProperDiv() {
console.log("Home Page!")

// load data
let currentUser = getLoggedIn();
if (currentUser) {
    //already logged in
    //hide the log in form
    //show the log out form

    $("#loginForm").hide();
    $("#logoutForm").show();

}else{
    //not logged in
    $("#loginForm").show();
    $("#logoutForm").hide();
}


}
function init() {
    console.log("Home page");
    showProperDiv();
//hook events

$("#btnLogin").click(login);

$("#btnLogOut").click(logOut); //logout fn from storageManager
}

window.onload = init;

/**
 * 1 catch the click on the button
 * 2 call a function
 * 3 get the text from the input field
 * 4 console log the text
 * 
 * 
 * 
 * 5 get the list of users
 * 6 travel the array
 * 7 get the element from the array
 * 8 compare user and password var witht the value inside the object**/



