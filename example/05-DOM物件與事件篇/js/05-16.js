window.onload = function(){
    
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var phone = document.getElementById("contentPhone");
    
    var angleleft = document.getElementById("angleleft");
    var angleright = document.getElementById("angleright");
    var pageIdx = 1;

    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);
    angleleft.addEventListener("click", angleleftFn)
    angleright.addEventListener("click", anglerightFn)

    function showPhoto(){
        pageIdx = Number(this.id.substr(1));
        phone.style.backgroundImage = 'url("../images/05/big/' + this.id +'.jpg")';
    }

    function angleleftFn(){
        pageIdx = pageIdx - 1;
        if(pageIdx < 1){
            pageIdx = 5;
        }
        phone.style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    }
    function anglerightFn(){
        pageIdx = pageIdx + 1;
        if(pageIdx > 5){
            pageIdx = 1;
        }
        phone.style.backgroundImage = 'url("../images/05/big/a' + pageIdx +'.jpg")';
    }



}