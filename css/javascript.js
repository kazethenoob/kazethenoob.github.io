function validateForm() {
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    var c = document.getElementById("othernames").value;
    var d = document.getElementById("email").value;
    var e = document.getElementById("password").value;
    var f = document.getElementById("repeatpassword").value;
    var g = document.forms["myForm"]["country"].value;
    var h = document.getElementById("phone").value;
    var i = document.getElementById("cities").value;
    var j = document.getElementById("address").value;
    var k = document.forms["myForm"]["gender"];
    var checkboxsize = document.forms["myForm"]["checkboxsize"];
    var terms = document.forms["myForm"]["terms"];

  
  
    if (a== ""){
    alert("Please enter your first name");
    a.focus();
    return false;
    
    }
    else if(b == ""){
    alert("Please enter your last name ");
    b.focus();
        return false;
    
    }

    else if(c == ""){
    alert("Please enter your other names");
    c.focus();
    return false;
    }

    else if(d == ""){
    alert("Please enter your email");
    d.focus();
    return false;
    }

    else if(e == ""){
    alert("Please enter your password");
    e.focus();
    return false;
    }

    else if(e.length < 8){
    alert("Password must be atleast 8 characters");
    e.focus();
    return false;
    }


    else if(f == ""){
    alert("Please enter your password again");
    f.focus();
    return false;
    }

    else if(f !== e){
    alert("Repeated Password must be the same with first password");
    f.focus();
    return false;
    }

    else if(g == "Select Country"){
    alert("Country must be stated");
    g.focus();
    return false;
    }

    else if(isNaN(h)){
    alert("Phone number must be in numbers");
    h.focus();
    return false;
    }

    else if(i == ""){
    alert("City must be stated");
    i.focus();
    return false;
    }

    else if(j == ""){
    alert("Address must be stated");
    j.focus();
    return false;
    }

    else if((k[0].checked == false)&&(k[1].checked == false)&&(k[2].checked == false)){
    alert("Gender must be stated");
    k.focus();
    return false;
    }

    else if((checkboxsize[0].checked == false)&&(checkboxsize[1].checked == false)&&(checkboxsize[2].checked == false)&&(checkboxsize[3].checked == false)&&(checkboxsize[4].checked == false)&&(checkboxsize[5].checked == false)&&(checkboxsize[6].checked == false)){
    alert("Size must be stated");
    checkboxsize.focus();
    return false;
    }

    else if((terms[0].checked == false)){
    alert("You must agree to the terms");
    terms.focus();
    return false;
    }

    else{
    alert("Details have been sent");
    return false;
    }


}
