window.onload = function(){
    
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var phone = document.getElementById("contentPhone");

    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);

    function showPhoto(){
        if(this.id == "a1"){
            phone.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
        }else if(this.id == "a2"){
            phone.style.backgroundImage = 'url("../images/05/big/a2.jpg")';
        }else if(this.id == "a3"){
            phone.style.backgroundImage = 'url("../images/05/big/a3.jpg")';
        }else if(this.id == "a4"){
            phone.style.backgroundImage = 'url("../images/05/big/a4.jpg")';
        }else if(this.id == "a5"){
            phone.style.backgroundImage = 'url("../images/05/big/a5.jpg")';
        }
    }

}