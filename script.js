var nameinput = document.getElementById("name");
    var nameerror = document.getElementById("nameerror");
    nameinput.addEventListener("blur", function () {
        if (this.value.trim() === "") {
            nameerror.textContent = 'Name Cannot be Empty';
            this.focus();
            isValid = false;
        }
        else {
            nameerror.textContent = "";
            isValid = true;
        }
    });

    var emailinput = document.getElementById("email");
    var emailerror = document.getElementById("emailerror");
    emailinput.addEventListener("blur", function () {
        var emailvalue = emailinput.value;
        var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (this.value.trim() === "") {
            emailerror.textContent = "Email is Required"
            this.focus();
            isValid = false;
        }
        else if (!emailpattern.test(this.value.trim())) {
            emailerror.textContent = "Enter a Valid Email";
            this.focus();
            isValid = false;
        }
        else {
            emailerror.textContent = "";
            isValid = true;
        }
    });

    var passwordinput = document.getElementById("password");
    var passworderror = document.getElementById("passworderror");
    passworderror.textContent = "";
    passwordinput.addEventListener("blur", function () {
        if (this.value.trim() === "") {
            passworderror.textContent = "Enter Password";
            this.focus();
            isValid = false;
        }
        else if (this.value.length < 6) {
            passworderror.textContent = "Password minimum 6 Character";
            this.focus();
            isValid = false;
        }
        else {
            passworderror.textContent = "";
            isValid = true;
        }
    });

    var bioinput =document.getElementById("bio");
    var bioerror = document.getElementById("bioerror");
    bioinput.addEventListener("blur", function () {
        if (this.value.trim() === "") {
            bioerror.textContent = "Tell about yourself";
            this.focus();
            isValid = false;
        }
        else {
            bioerror.textContent = "";
            isValid = true;
        }
    });

    const charcount = document.getElementById("charcounter");
    bioinput.addEventListener("input", function () {
        let currentlength = bioinput.value.length;
        charcount.textContent = `${currentlength} / 200`;
    });
const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    let namevalid = nameinput.value.trim() !== "";
    let emailvalid = emailinput.value.includes("@");
    let passwordvalid = passwordinput.value.length >=6;
    let biovalid = bioinput.value.trim() !=="";

    if(!namevalid || !emailvalid || !passwordvalid || !biovalid){
        event.preventDefault();
        alert("Please Enter values");
    }
    else
    {
        alert("Form Submitted Successfully!");
    }
});