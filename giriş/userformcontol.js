function submitFunction() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("sifre").value;
   


  

    if (validateEmail(email)) {
        if (email.length === 0)
            alert("Email alanı boş bırakılamaz !");
        else if (email.length > 20)
            alert("Email adresiniz 20 karakterden fazla olamaz !");
    } else {
        alert("Lütfen geçerli bir email adresi giriniz !");
    }
  

    if (phone.length === 0)
        alert("Şifre alanı boş bırakılamaz !");
    else if (phone.length != 11)
        alert("Şifrenizi girmelisiniz !")

}

function validateEmail(email) {
    var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
}