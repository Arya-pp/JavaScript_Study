let login = prompt("who's there?","");
let password;

if (login == 'Admin') {
    password = prompt("Enter password : ", "");
    if (password == 'TheMaster') {
        alert("Welcome");
    }else if (password == null) {
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if (login == null) {
    alert('Canceled');
}else{
    alert("I don't know you");
}

