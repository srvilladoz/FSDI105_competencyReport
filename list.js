
function displayUsers(users) {
    // travel the array

    for (let i = 0; i< users.length; i++) {

        //get each user
        let user = users[i];

        // display the user
        //let syntax = `<li>+ user.firstName +<li>`;
        //let syntax = `<li>${user.firstName}<li>`;
        

        let syntax = 
        `<tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <t>${user.dateOfBirth}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
            <td style="background-color:${user.color}"> </td> 

            
        </tr>`

        $("#tblUsers").append(syntax);

    }

}



function init() {

    console.log("Listing Users");

    //load data
    var users = readUsers();
    ///console.log(users);
    displayUsers(users);


    //hook events
    $("#btnClear").click(function() {
        clearUsers();
        location.reload();
    });
}


window.onload = init;