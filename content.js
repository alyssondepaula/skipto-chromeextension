console.log("Skip to Movie Run");

var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var el = document.querySelector(".nf-flat-button");
        if(el!=null){
            skip(el);
        }
    }

function skip(el) {
    el.click();
}