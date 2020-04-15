window.onload = function(){

    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var phone = document.getElementById("contentPhone");

    a1.addEventListener("click", function(){
        phone.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
    });

    a2.addEventListener("click", function(){
        phone.style.backgroundImage = 'url("../images/05/big/a2.jpg")';
    });

    a3.addEventListener("click", function(){
        phone.style.backgroundImage = 'url("../images/05/big/a3.jpg")';
    });

    a4.addEventListener("click", function(){
        phone.style.backgroundImage = 'url("../images/05/big/a4.jpg")';
    });

    a5.addEventListener("click", function(){
        phone.style.backgroundImage = 'url("../images/05/big/a5.jpg")';
    });

}